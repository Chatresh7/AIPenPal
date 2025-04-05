// Variables
let name = "Chatresh";    // string
const age = 25;           // number
var isStudent = true;     // boolean

// Data types
let x = null;             
let y;                    // undefined
let person = { name: "Ram", age: 30 };  // object

// Operators
let a = 10;
let b = 5;

//Outputs 
console.log(a + b);   // 15 
console.log(a - b);   // 5  
console.log(a * b);   // 50 
console.log(a / b);   // 2  
console.log(a % b);   // 0  

console.log(a > b);   // true 
console.log(a === 10); // true 
console.log(a !== 10); // false

// Functions
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Chatresh"));

// Arrow function
const add = (x, y) => x + y;
console.log(add(5, 3)); // 8


// Loop
for (let i = 0; i < 5; i++) {
  console.log("Number:", i);
} // Output 0,1,2,3,4


// Array
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]); // banana


// Destructuring
const user = { name: "Chatresh", age: 22 };
const { name, age } = user;
console.log(name); // Chatresh

const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(second); // green


// Spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; 
console.log(arr2); // [1, 2, 3, 4, 5]

let obj1 = { a: 1 };
let obj2 = { ...obj1, b: 2 };
console.log(obj2); // { a: 1, b: 2 }


// Splicing
let fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(1, 2); 
console.log(fruits); // ['apple', 'date']


// Prototype
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hi, I'm " + this.name);
};

let p1 = new Person("Chatresh");
p1.sayHello(); // Hi, I'm Chatresh



// Shift 
let fruits = ["apple", "banana", "cherry"];
let firstFruit = fruits.shift();

console.log(firstFruit); // "apple"
console.log(fruits);     // ["banana", "cherry"]


// Unshift
let fruits = ["banana", "cherry"];
fruits.unshift("apple", "orange");

console.log(fruits); // ["apple", "orange", "banana", "cherry"]






