/* PTS TO REM:   objects mein optional chaining ka concept bhi hota which makes code more cleaner and shorter which is defined by using "?." this operator 
// ex:-
// console.log(regularUser.fullname.firstName?.lastName); ->  this lines actually tells us to check whether there is regularUser and inside it look for fullname and inside look for its firstName and if not available then dont go further  

ques) Optional Chaining (?.) in JavaScript ?
Optional chaining (?.) is a feature introduced in ES2020 (ES11) that allows you to safely access deeply nested properties of an object without having to explicitly check if each level of the object exists. If any part of the chain is null or undefined, the expression short-circuits and returns undefined instead of throwing an error.

Why Use Optional Chaining?
In JavaScript, if you try to access a property or call a method on an object that doesn't exist (i.e., null or undefined), JavaScript will throw a TypeError. With optional chaining, you can safely navigate through potentially null or undefined properties without causing runtime errors.

object?.property: Safely accesses the property on the object. If the object is null or undefined, it returns undefined instead of throwing an error.
object?.[propertyName]: Works like the dot notation but allows you to use variables or expressions as the property key.
object?.method(): Calls a method on the object if it exists; otherwise, it returns undefined instead of throwing an error


Key Points:-->

+> Short-circuiting behavior: If at any point in the chain the value is null or undefined, the expression returns undefined without evaluating further, preventing errors.

+> Works with arrays: Optional chaining can be used to safely access array elements.

+> Works with functions: You can call functions or methods with optional chaining, which will safely return undefined if the method does not exist.

+> Does not call null or undefined values: If the function, property, or array is not available (null or undefined), optional chaining avoids trying to access it.


When Not to Use Optional Chaining?
Non-nullable values: If you're sure that an object or property is never null or undefined, there's no need to use optional chaining because the check will add unnecessary overhead.

Performance-sensitive code: In performance-critical areas, you might avoid optional chaining as it introduces an additional check for each level, although this is typically negligible unless in very tight loops or performance-intensive code.
*/

const user = {
    name: 'John',
    address: {
      street: '123 Main St',
      city: 'New York'
    }
  };
  
  const street = user?.address?.street;  // "123 Main St"
  const zip = user?.address?.zip;        // undefined (no error)
  const country = user?.address?.country?.name;  // undefined (no error)
  
// accesing array elems:-
  const users = [
    { name: 'Alice' },
    { name: 'Bob' }
  ];
  
  const firstUserName = users?.[0]?.name;  // "Alice"
  const thirdUserName = users?.[2]?.name;  // undefined (no error)
  

//   calling method :- 
const person = {
    greet: function() {
      return 'Hello!';
    }
  };
  
  const greeting = person?.greet();  // "Hello!"
  const farewell = person?.sayGoodbye();  // undefined (no error)

  //Using with Optional Chaining and Function Calls
  const team = {
    players: [
      { name: 'Player 1', stats: { score: 10 } },
      { name: 'Player 2', stats: { score: 5 } }
    ]
  };
  
  const firstPlayerScore = team?.players?.[0]?.stats?.score;  // 10
  const secondPlayerAssist = team?.players?.[1]?.stats?.assist;  // undefined
  
// objects.freeze() is used for freezing any properties of particular object so by doing this we can't manioulate obj from outside
//  remember there is  a way by which we can print symbol as ley in object  which is by providing symbol properties inside suare bracket like [sym]: "mykey1"
// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "abhi",
    "full name": "abhi Choudhary",
    [mySym]: "mykey1",
    age: 24,
    location: "chandigarh",
    email: "abhi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "abhi@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "abhi@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* now declaring obj by using constructor or can say singleton  */

const devTalksUser = new Object();   //singleton user

const devTalksUser1 = {}; //non singleton user 



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/*pts to rem for destructuring that is in object we have to keep the key name must be same and in array order is important how indexes are written 

 Object Destructuring: Property Names Can't Be Changed Directly
When destructuring an object, the property names must match the keys in the object, unless you explicitly rename them. The variable names you create during destructuring can be different from the property names, but the key names in the object must stay the same.

Example: Renaming during Object Destructuring
You can rename the variables during object destructuring using the : syntax, but the key in the original object must still match.



&&  IN ARRAYS :Array Destructuring: Order Matters

In array destructuring, the order of elements is important. The elements are assigned to variables based on their position in the array.


SUMMARY FOR DESTRUCTURING :------
1->  Object Destructuring: You can rename variables, but property names must match the object’s keys unless explicitly renamed during the destructuring.
2->  Array Destructuring: The order of elements matters. The variables will be assigned in the order they appear in the array. You cannot change the order unless you adjust the destructuring expression itself.
*/
const person1 = { name: 'Alice', age: 30 };

// Destructuring with renaming the variables
const { name: userName, age: userAge } = person1;

console.log(userName); // 'Alice'
console.log(userAge);  // 30
 
// In the example above, name is the property in the person object, and it's assigned to the userName variable. Similarly, age is assigned to userAge.
// So, the key names in the object stay the same, but you can choose to rename the variables if you want.



// FOR ARRAY DESTRUCTURING:
const arr = [10, 20, 30];

// Destructuring with order
const [first, second, third] = arr;

console.log(first);  // 10
console.log(second); // 20
console.log(third);  // 30

// Here, first gets the first element (10), second gets the second element (20), and third gets the third element (30).
// The order of the variables in the destructuring expression must match the order of the elements in the array.

// BASIC EX FOR DESTRUCTURING:->
const course = {
    coursename: "js-revision",
    price: "free",
    courseInstructor: "abhi"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// { this obj is json format 
//     "name": "abhi",
//     "coursename": "js-revision",
//     "price": "free"
// }

[
    {},
    {},
    {}
]