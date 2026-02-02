// Using rest parameters with arrays
let original = [1, 2, 3, 4];

let spread = [...original, 5, 6, 7, 8];

console.log(spread); // [1, 2, 3, 4, 5, 6, 7, 8]

// Merging objects using spread operator

var object1 = { a: 1, b: 2 };
var object2 = { c: 3, d: 4 };
var mergedObject = { ...object1, ...object2 };

console.log(mergedObject); // { a: 1, b: 2, c: 3, d: 4 }

// Using rest parameters in function definitions
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20, 30)); // 60
