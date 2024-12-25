// there are mainly 7 types of datatypes which is avail in javascript

/* 
 DATATYPES IN JS ARE :--- > 

Summary:->
Primitive types:->      Number, String, Boolean, Undefined, Null, Symbol, BigInt
Non-primitive types:->  Object, Array, Function
*/

//  1-> PRIMITIVE DATA-TYPES:->  These are basic types of data that are immutable (i.e., their values cannot be changed once created) and are stored directly in memory.

console.log("datatypes in js");

let age = 25;
console.log(typeof age); //number

let yourName = "John";
console.log(typeof yourName); //string

let isActive = true;
console.log(isActive);//boolean

let x; 
console.log(x);//undefined

let person = null;
console.log(person);//object

let sym = Symbol('description');
console.log(sym);//symbol

let bigNumber = 9007199254740991n;
console.log(bigNumber);//bigInt


// non-primitive data-types: These types are more complex and can store collections of values or can say reference based datatypes

let person1 = { name: "Alice", age: 30 };
console.log(person1); //object

let fruits = ["apple", "banana", "orange"];
console.log(fruits); //array  which bts is an object only 

function greet(name) {
    return "Hello, " + name;
  }

  console.log(typeof greet);  // function 
  
