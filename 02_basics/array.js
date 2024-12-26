//array 

// vry imp: there are two operator in js which are spread opr[...] this actully copy the whole arrray and the other one is rest opr[...] but used as arr(a,b,...c)means a and b will get single values where as all the remaining one's belongs to c

/* PTS TO REMEMBER :  

arraw always make shallow copies instead of making deep copies 

so whats is shallow copy ?

shallow copy of an obj is a copy whose properties share the same reference(pt to the same underlying values) as those of the source object from which the copy was made. As a result, when you  change either of the source or the copy, you may also cause the other object to change too. so you may endup unintentionally causing changes to the source or copy that you don't expect. 


where as this doesnt happen to deep copies it actually create a copy of the real one's so whenver t=you create or made any changes inside them there real once won;t get affected



THERE ARE MANY METHODS INSIDE THE ARRAY WHICH ACTUALLTY HELPS US TO AMKE THINGS EASIER :


[  push,pop,shift, unshift,forEach,filter,map,reduce,some,every,find,findIndex , indexOf,,from, includes, reverse,sort,splice,,slice,join,cancat]

*/

const myArr = [0, 1, 2, 3, 4, 5];

// 1- push()
console.log(myArr.push(7));

//pop()
console.log(myArr.pop(7));

//shift()
console.log(myArr.shift(1));

//unshift()
console.log(myArr.unshift(6));

//concat()
const arr1 = [1, 2];
const arr2 = [3, 4];
const result = arr1.concat(arr2); // result = [1, 2, 3, 4]

//join()

// const arr = [1, 2, 3];
const joined = arr.join('-'); // joined = "1-2-3"

//slice()->Purpose: Returns a shallow copy of a portion of an array, from start to end (end not included).
// const arr = [1, 2, 3, 4];
const sliced = arr.slice(1, 3); // sliced = [2, 3]

//splice()->Purpose: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

// const arr = [1, 2, 3, 4];
arr.splice(1, 2, 5, 6); // arr = [1, 5, 6, 4]

//forEach()-> Purpose: Executes a provided function once for each element in the array.
// const arr = [1, 2, 3];
arr.forEach((element) => console.log(element)); // Outputs 1, 2, 3

// map()-> Purpose: Creates a new array populated with the results of calling a provided function on every element in the calling array.
// const arr = [1, 2, 3];
const doubled = arr.map(x => x * 2); // doubled = [2, 4, 6]

// filter()-> Purpose: Creates a new array with all elements that pass the test implemented by the provided function.
// const arr = [1, 2, 3, 4];
const evenNumbers = arr.filter(x => x % 2 === 0); // evenNumbers = [2, 4]

// reduce()->Purpose: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// const arr = [1, 2, 3];
const sum = arr.reduce((acc, curr) => acc + curr, 0); // sum = 6

// some()->Purpose: Tests whether at least one element in the array passes the test implemented by the provided function.
// Syntax: array.some(callback(currentValue, index, array))
// const arr = [1, 2, 3];
const hasEven = arr.some(x => x % 2 === 0); // hasEven = true

// every()->Purpose: Tests whether all elements in the array pass the test implemented by the provided function.
// Syntax: array.every(callback(currentValue, index, array))
// const arr = [1, 2, 3];
const allEven = arr.every(x => x % 2 === 0); // allEven = false

// find()-> Purpose: Returns the first element in the array that satisfies the provided testing function.
// Syntax: array.find(callback(currentValue, index, array))
// const arr = [1, 2, 3];
const firstEven = arr.find(x => x % 2 === 0); // firstEven = 2

// findIndex()->Purpose: Returns the index of the first element in the array that satisfies the provided testing function.
// Syntax: array.findIndex(callback(currentValue, index, array))
// const arr = [1, 2, 3];
const indexOfEven = arr.findIndex(x => x % 2 === 0); // indexOfEven = 1

// includes()-> Purpose: Determines if the array contains a certain element, returning true or false.
// Syntax: array.includes(value, startIndex)
// const arr = [1, 2, 3];
const containsTwo = arr.includes(2); // containsTwo = true

// indexOf()-> Purpose: Returns the first index at which a given element can be found in the array, or -1 if not found.
// Syntax: array.indexOf(searchElement, fromIndex)
// const arr = [1, 2, 3];
const index = arr.indexOf(2); // index = 1

// sort()-> Purpose: Sorts the elements of an array in place and returns the sorted array.
// Syntax: array.sort(compareFunction)
// const arr = [3, 1, 2];
arr.sort(); // arr = [1, 2, 3]

// reverse()-> Purpose: Reverses the elements of an array in place and returns the reversed array.
// const arr = [1, 2, 3];
arr.reverse(); // arr = [3, 2, 1]


// from()-> Purpose: Creates a new array instance from an array-like or iterable object.
// Syntax: Array.from(arrayLike, mapFunction, thisArg)
const str = 'hello';
const arr = Array.from(str); // arr = ['h', 'e', 'l', 'l', 'o']
