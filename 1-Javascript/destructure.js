// Destructuring from a object
const person = {
    name: 'Alice',
    age: 30,
    city: 'New York',
};

const { name, age, city } = person;

console.log(name); // Alice
console.log(age); // 30
console.log(city); // New York

// Destructuring from an array

const numbers = [10, 20, 30, 40, 50];

const [first, second, ...rest] = numbers;

console.log(first); // 10
console.log(second); // 20
console.log(rest); // [30, 40, 50]

// Nested destructuring
const nestedObject = {
    title: 'Developer',
    details: {
        skills: ['JavaScript', 'React', 'Node.js'],
        experience: 5,
    },
};

const {
    title,
    details: { skills, experience },
} = nestedObject;

console.log(title); // Developer
console.log(skills); // ['JavaScript', 'React', 'Node.js']
console.log(experience); // 5
