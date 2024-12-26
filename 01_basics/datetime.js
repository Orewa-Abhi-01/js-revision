let myDate = new Date()
console.log(myDate);//2024-12-26T09:18:22.325Z
console.log(myDate.toString());//Thu Dec 26 2024 09:18:22 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Thu Dec 26 2024
console.log(myDate.toLocaleString());//12/26/2024, 9:18:22 AM
console.log(typeof myDate);//object

// let myCreateDate = new Date(2024,11,26,14,51,53);
let myCreateDate = new Date("11-26-2024");
//console.log(myCreateDate.toLocaleString());//12/26/2024, 2:51:00 PM
console.log(myCreateDate.toLocaleString());

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// time related stuffs -like timestamp

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myCreateDate.getTime());

// console.log(myTimeStamp.getTime());

// learn more about .toLocaleString() cause it takes object so that we can get more info about it so dive dig