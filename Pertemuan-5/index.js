// IIFE dan Callback
// IIFE (Immediately inovoked function expression)

// IIFE
// (function (){}) ()
// without params & args & return value
// (function () {
//    console.log("Hello world") 
// })()

// // with params & args & return value
// let output = (function (fullName) {
//     return "Hello"+ fullName
// })("John Doe")

// // Callback
// // without params args return value
// function sayHello(callback){
//     callback()
// }

// sayHello(function() {
//     console.log("Hello world")
// })

// with params args return value
function sayHello(callback){
    let output = callback("John Doe")
    return output
}

let output = sayHello(function(fullName){
    return "Hello" + fullName
})
console.log(output)
