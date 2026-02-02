const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// ForEach
// Explanation: Executes a function for each element in the array. Does NOT return a new array.
// Used for side effects like logging or updating external variables.
// Rule to remember: "For Each element, do something" - loops through each item but gives nothing back
nums.forEach((num) => {
    console.log(num);
});

// Map
// Explanation: Transforms each element in the array using a function and returns a NEW array of the same length.
// Each element is mapped to a new value.
// Rule to remember: "Map transforms the terrain" - creates a new landscape (array) from the old one
const squared = nums.map((n) => n * n);
console.log(squared);

// Filter
// Explanation: Creates a NEW array containing only elements that pass a test (return true).
// The new array is usually shorter than the original.
// Rule to remember: "Filter is like a coffee filter" - only lets certain things through
const even = nums.filter((n) => n % 2 == 0);
console.log(even);

// Reduce
// Explanation: Reduces an array to a SINGLE value by applying a function that combines elements.
// Takes an accumulator (running total) and current value, returns the final accumulated result.
// Rule to remember: "Reduce to something smaller".
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Reduce used on an array of objects
const products = [
    { name: 'Apple', price: 0.5, quantity: 10 },
    { name: 'Banana', price: 0.25, quantity: 5 },
    { name: 'Orange', price: 0.3, quantity: 8 },
];

const totalCost = products.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
}, 0);

console.log(totalCost); // result: 7.9

// Reduce to flatten array of arrays
const nestedArray = [
    [1, 2],
    [3, 4],
    [5, 6],
];

const flattenedArray = nestedArray.reduce((acc, curr) => {
    return acc.concat(curr);
}, []);

console.log('flattened:', flattenedArray); // result [1, 2, 3, 4, 5, 6]

// Splice - deletes from list and can even replace items
// Explanation: MUTATES the original array by removing, replacing, or inserting elements at a specific position.
// splice(startIndex, deleteCount, ...itemsToAdd) - returns an array of deleted items
// Rule to remember: "Splice is like surgery" - cuts into the original array and modifies it permanently
let spliceme = ['hello', { 1: 'banana' }, 69];
spliceme.splice(1, 1, 'used to be object');
console.log(spliceme); // [ 'hello', 'used to be object', 69 ]

// Slice - copy from range
// Explanation: Creates a SHALLOW COPY of a portion of the array. Does NOT mutate the original.
// slice(start, end) - extracts from start index up to (but not including) end index
// Rule to remember: "Slice is like slicing cake" - cuts out a piece but leaves the original intact
let copiedRange = nums.slice(2, 5);
console.log(copiedRange); // 3, 4, 5

// Find
// Explanation: Returns the FIRST element that satisfies the test function. Returns undefined if nothing found.
// Only finds one element, then stops searching (unlike filter which finds all matches)
// Rule to remember: "Find the first one and stop" - like finding your keys, once you spot them, you stop looking
let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Pete' },
    { id: 3, name: 'Mary' },
    { id: 4, name: 'John' },
];

console.log(users.find((user) => user.id == 2).name); // Pete

// Sort - defaults to sorting as string
// Explanation: MUTATES the original array by sorting elements. Default converts to strings (watch out!).
// Use a compare function (a, b) => a - b for numeric sorting. Return negative/0/positive to determine order.
// Rule to remember: "Sort is a string snob by default" - treats numbers as strings unless you teach it otherwise
let sortMe = [15, 2, 69, 1];
console.log(sortMe.sort()); // [ 1, 15, 2, 69 ]
console.log(
    sortMe.sort((a, b) => {
        if (a > b) return 1;
        if (a == b) return 1;
        if (a < b) return -1;
    }),
); // [ 1, 2, 15, 69 ]

// Split
// Explanation: STRING method that converts a string into an ARRAY by dividing it at each separator.
// split(separator) - the separator can be a string or regex pattern
// Rule to remember: "Split breaks strings apart" - opposite of join, turns text into array pieces
let splitMe = 'Hello world';
let split = splitMe.split(' ');
console.log(split); // ["Hello", "world"]

// Join
// Explanation: Converts an array into a STRING by concatenating elements with a separator between them.
// join(separator) - if no separator provided, uses comma by default
// Rule to remember: "Join brings the band together" - opposite of split, combines array elements into one string
console.log(split.join(' ')); // Hello world
