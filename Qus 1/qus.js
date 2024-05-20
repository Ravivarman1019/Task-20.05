function compareJSON(json1, json2) {
    
    let obj1 = JSON.parse(json1);
    let obj2 = JSON.parse(json2);

    
    let sortedJson1 = JSON.stringify(obj1, Object.keys(obj1).sort());
    let sortedJson2 = JSON.stringify(obj2, Object.keys(obj2).sort());

    
    return sortedJson1 === sortedJson2;
}

let json1 = '{"name": "Person 1", "age": 5}';
let json2 = '{"age": 5, "name": "Person 1"}';
console.log(compareJSON(json1, json2)); 