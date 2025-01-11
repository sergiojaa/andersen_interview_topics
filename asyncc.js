//Async programming - when two actions are performed parallel to each other, i.e. asynchronously
// callbacks 
// callback - When two actions take place simultaneously or asynchronously
//A function passed as an argument to a function is called a callback function,
// setTimeout(() => console.log("Tick"), 3000);
// let arr = [1,2,3,4,5]
// let filteredArr = arr.filter(number=> number % 2 === 0) 
// console.log(filteredArr)
// function print(callback){
//     callback()
// }
// print(()=>console.log('hello callback function'))
//  function foo(){

//  }
//  function foo(num1,num2,callbackFunc){
//     console.log(callbackFunc(num1,num2))
//  }
//  foo(5,10, (number1,number2)=> {
//     return number1+number2
//  })

//promise  - It promises to return a value in the future. It’s an object that holds a future value—it doesn’t have it yet, but it might soon. I’ve sent a request and am waiting for a response, but it won’t give me the result immediately; instead, it returns a promise.
//A promise has several states. Initially, it's pending while the future value isn't yet available—waiting to be resolved or rejected. Once the asynchronous task is complete, it transitions to the settled state, which has two outcomes: fulfilled (the request succeeded) or rejected (the request failed). Use .then() for resolve/fulfilled and .catch() for reject.
//To create a Promise, you use new before it. Promise is a class that generates objects.
//A promise takes parameters, specifically a callback function. Inside this callback function, we use resolve and reject.
// first taken reolve, second takes reject, it does not matter what names will be written.
// let fifteen = Promise.resolve(15)
// console.log(fifteen) // consoles promise object
// fifteen.then(value=>console.log(`got ${value}`))//consoles value using then

const promise = new Promise((resolve,reject)=> {
    setTimeout(()=> resolve('success') ,2000)
} )
promise.then((message)=> {
    console.log(message)
}).catch(error => console.log(error))

const promiseReject = new Promise((resolve,reject)=> {
    setTimeout(()=> reject('fail') ,2000)
} )
promiseReject.then((message)=> {
    console.log(message)
}).catch(error => console.log(error))

// async / await
// async function fetchUsers(){
// const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json()
//    console.log(data)
// }
// fetchUsers()
//fetch with then and catch
// fetchUserss()
// function fetchUserss() {
//     fetch('https://jsonplaceholder.typicode.com/nonexistent')
//         .then(response => {
//             if (!response.ok) {
//                 // If response is not okay (status 404, 500, etc.), reject the promise
//                 return Promise.reject('Failed to fetch, status: ' + response.status);
//             }
//             return response.json();  // Continue processing if the response is okay
//         })
//         .then(data => console.log(data))
//         .catch(err => console.log('Error: ', err));  // Logs the error message
// }
