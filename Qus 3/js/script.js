function reqListener() {
    const countries = JSON.parse(this.responseText);

    countries.forEach(country => {
        
        console.log("Name:", country.name.common);
        console.log("Region:", country.region);
        console.log("Sub-region:", country.subregion);
        console.log("Population:", country.population);
        
    });
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();