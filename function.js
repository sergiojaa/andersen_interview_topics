//In JavaScript, a function is a block of code that performs a specific action and can be reused multiple times. Functions are an essential part of JavaScript as they carry out various tasks, help in refactoring, prevent code duplication, and create a modular code structure.
//A function is a block of code with a name that can take parameters (arguments) and return a value. It may or may not have parameters.
// how to create function:
//1:function declaration
// function greet(){
//     console.log('hello')
// }
// greet()
//2: function expression
// const greet = function(){
//     console.log('hello')
// }
// greet()
//3:arrow functions:
// const greet = ()=> {
//     console.log('Hello')
// }
// greet()
//4:Anonymous function it doesnot have name
// setTimeout(()=>{
//     console.log('hello')
// },2000)
//5:immediately invoked function expressions(IIFE)
// (function(){
//     console.log('hello')
// })()
//parameters and return
// function greet(name){
//     console.log(`hello ${name}`)
// }
// greet('sergi')

// function sum(num1,num2){
//     return num1 + num2
// }
// const result = sum(2,3)
// console.log(result)
//when to use functions:
//1) For Code Reuse: Functions can be used multiple times for the same piece of code, which avoids code duplication.
//2)Using different parameters and return values: Functions help us take different types of arguments and return specific results.
//3)For structuring code: functions provide structuring and better representation of code.


//function types

// function fetchData(callback) {
//     setTimeout(() => {
//       callback("Data received");
//     }, 1000);
//   }
  
//   fetchData(function(message) {
//     console.log(message); 
//   });
//1: Higher-Order Functions - A higher-order function is a function that takes another function as either an argument or returns a function.
// const array = [1,2,3,4,5]
// const doubleArrayNumbers = array.map(num => num * 2)
// console.log(doubleArrayNumbers)

//2:asynchronous functions - callback functions,promises and async/await.
//Callback Functions -  A function passed as an argument to a function is called a callback function
// function print(callback){
//     callback()
// }
// print(()=>console.log('hello callback function'))
//  function foo(){

//  }
//A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows 
// you to handle asynchronous tasks more effectively. A promise can be resolved (completed successfully) or rejected (failed). Promises are created using the 
// new Promise() constructor, which takes a function (executor) with two parameters: resolve and reject.
// in details go to async.js