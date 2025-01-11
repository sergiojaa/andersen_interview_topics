//const let var 
// In JavaScript, let, const, and var are used to store values, but there are important differences between them that affect their behavior.
//const - blocked scope as let
//We can't use it until we reach the initial value.
//Mutable is a feature of objects: const is only used for immutable variables, but if an object or array is contained, their contents can still be changed.

//let - blocked scope We can change the original value

//var - global scoped
//why not to use Hoisting: Hoisting a var can be more confusing than initializing it.
//If there is no need to create a global variable outside of the society/function, let or const are the best choices.
//We can change the original value

//operators 
//Arithmetic operators (+, -, *, /, %)
//Logical operators (&&, ||, !)
//Assignment operators (=, +=, -=, *=, /=)
//Ternary operator (condition ? expr1 : expr2)
//Comparison operators (==, ===, !=, !==, >, <, >=, <=)

//

// 1. = (Assignment Operator)It is an operator used to assign a value to a variable.

//2. == (Equality Operator) This is a comparison operator that compares two values ​​without custom types.
//console.log(5 == '5');  // Output: true

//3. === (Strict Equality Operator)
//This operator compares both values ​​and their types. That is, when both types must be the same and no type conversion occurs.
//console.log(5 === '5');  // Output: false

//4. != (Inequality Operator)
// console.log(5 !=='5');  // Output: false
//!= is an operator in JavaScript that compares two values ​​and returns true if they are not equal. However, it is important that != does type coercion in between, i.e. it does not consider different types.

//5.!== (Strict Inequality Operator)
//!== is a stricter version of != that looks at types as well as value when comparing. If both value and type do not match, then the result will be true.
///console.log(5 !== '5');  // Output: true

//control flows
// else/if 
//1. if and else Used to test which condition is true.
// If the condition is met, the if section will be executed.
// let number = 10;
// if (number > 5) {
//   console.log("number is greater than 5");
// } else {
//   console.log("number is 5 or less");
// }

//2.switch  is used if we want to check several conditions at the same time.
// Switch is often used when multiple if-else combinations are required.
// Sometimes more practical than long if-else statements.
//let day = 3;
// switch (day) {
//     case 1:
//       console.log("Monday");
//       break;
//     case 2:
//       console.log("Tuesday");
//       break;
//     case 3:
//       console.log("Wednesday");
//       break;
//     default:
//       console.log("Invalid day");
//   }
//frequency used with react

//3. while Loo 
// In this loop, the condition is checked before it is executed.
// If the condition is true, the code will be executed. If the condition is not true, the code will not be executed at all.
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }  //output 0 1 2 3 4

// 4. for Loop Used for a known number of iterations.
// Often used when you know how many times to repeat an action.
// The syntax of this loop is simple and the most commonly used.
// for (let i = 0; i < 5; i++) {
//     console.log(i);
//   } // output 0 1 2 3 4

//5. do-while Loop Similar to while, but it will always execute once until the condition becomes false.
// First the action will be executed and only then the condition will be checked.
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5); //output 0 1 2 3 4
// When is what used:
// if / else: Used when more than one condition is required to be checked and the appropriate action to be taken.
// switch: works well when we have many cases and can compare one value with several different values.
//while: It is used when we don't know how many times to repeat the action, but we know that before the condition is true, the repetition must be done.
// for: is most often used when we know how many times to repeat an action.
//do-while: Used when the code must be executed at least once, or when some action must be performed even though the condition may not initially be true.

//Objects and Arrays In JavaScript, it is used to store and manipulate data.
//1. Creating and Accessing Objects and Arrays
//Objects
//Objects are used to store data, where each property has a name (key) and a corresponding value (value).
// const person = {
//     name: 'Sergi',
//     age: 25,
//     greet: function() {
//       console.log('Hello!');
//     }
//   };
  
//   // Accessing properties
//   console.log(person.name);  // Output: Sergi
//   console.log(person['age']);  // Output: 25
  
//   // Calling method
//   person.greet();  // Output: Hello!

//arrays
//Arrays are series of data stored in one place. The array can contain different types of data (numbers, strings, objects and others).
// const numbers = [1, 2, 3, 4, 5];

// // Accessing elements
// console.log(numbers[0]);  // Output: 1
// console.log(numbers[4]);  // Output: 5
// array methods:
// map()Creates a new array containing the transformed elements.
// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled);  // Output: [2, 4, 6]

//filter()
// filter() creates a new array containing only those elements that meet the condition.
//const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);  // Output: [2, 4]

//reduce()use the reduce() function, which returns all the elements of the array into one result.
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
// console.log(sum);  // Output: 10

//foreach()
// forEach() performs an operation on all elements of an array like a loop. Doesn't create a new array, just operates on each element.
// const numbers = [1, 2, 3];
// numbers.forEach(num => {
//   console.log(num * 2);
// });// Output: 2 Output: 4 Output: 6

// 3. Spread and Rest Operators (...)
// Spread Operator (...)
// Used to expand array or object elements. Appends an array or object to a new context.

//example with arrays
// const numbers = [1, 2, 3];
// const moreNumbers = [...numbers, 4, 5];
// console.log(moreNumbers);  // Output: [1, 2, 3, 4, 5]

//example with objects
// const person = { name: 'Sergi', age: 25 };
// const personWithAddress = { ...person, address: 'Tbilisi' };
// console.log(personWithAddress);  // Output: { name: 'Sergi', age: 25, address: 'Tbilisi' }

///Rest Operator (...)
// Collect parameters when we don't know how many arguments to send to a function. Also, you can use objects and arrays.
// example with function parameters
// function sum(...numbers) {
//     return numbers.reduce((acc, num) => acc + num, 0);
//   }
//   console.log(sum(1, 2, 3, 4));  // Output: 10

//rest with objects
// const person = { name: 'Sergi', age: 25, country: 'Georgia' };
// const { name, ...rest } = person;
// console.log(name);  // Output: Sergi
// console.log(rest);  // Output: { age: 25, country: 'Georgia' }

//4. Destructuring Assignment
// Destructuring allows us to easily split an object or array into separate variables.
//Destructuring with Arrays
//Removing specific elements from an array.
//const numbers = [1, 2, 3];
// const [first, second] = numbers;
// console.log(first);  // Output: 1
// console.log(second); // Output: 2

//Destructuring with Objects
// const person = { name: 'Sergi', age: 25 };
// const { name, age } = person;
// console.log(name);  // Output: Sergi
// console.log(age);   // Output: 25

//Default values: In Destructuring, you can define default values ​​when there is no corresponding data.
// const person = { name: 'Sergi' };
// const { name, age = 30 } = person;
// console.log(age);   // Output: 30

//regular expression regex
// egular Expression (regex) is a powerful tool used to select and manipulate texts. Regular expressions allow us to search, replace, or validate different patterns in strings.
//They consist of special characters and are used in many programs, including JavaScript, Python, and others.
// const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
// const email = "example@mail.com";
// console.log(regex.test(email)); // true

//Regular expressions (regex) are a very powerful tool for text manipulation. This allows complex search and replace operations to be performed in minimal time. In JavaScript, regexes are often used for formatting checks, text sanitization, and more.