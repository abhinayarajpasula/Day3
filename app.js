function compareTwoJSONS(obj1, obj2) {
    // Extract and sort keys of obj1 and obj2
    var keys1 = Object.keys(obj1).sort();
    var keys2 = Object.keys(obj2).sort();
    
    // Convert objects to strings with sorted keys
    var str1 = JSON.stringify(obj1, keys1);
    console.log("str1: ", str1);

    var str2 = JSON.stringify(obj2, keys2);
    console.log("str2: ", str2);

    // Compare the sorted JSON strings for equality
    return str1 === str2;
}

let obj1 = {name: "Person1", age: 5};
let obj2 = {age: 5, name: "Person1"};

console.log(compareTwoJSONS(obj1, obj2)); // Output: true