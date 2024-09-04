// Javascript function

// Cara.1
//Function declaration/fungsi yang berdiri sendiri


///Function initialization
// function greetings(){
//     console.log("Hello world")
// }

// greetings() // Function call

// // Cara.2
// //Function Expression

// let greetings2 = function(){
//     console.log("Hello world")
// }
// greetings2()

// Parameter & Argument

//Cara.1
//                  parameter
function greetings1(fullName) {
    return"Hello " + fullName
}
//                       sargument
let output = greetings1("John Doe")
console.log(output)

// //Cara.2 

// let greetings2 = function(fullName){
//     return "Hello " + fullName
// }
// let output2 = greetings2("John aja")
// console.log (output2)

///Function Hoisting hanya berlaku untuk function declaration (cara 1)
// cara nya adalah membalikan, jadi di panggil dulu lalu fungsinya

//Global dan local scope
// Global adalah variabel yang bisa di akses dari mana saja


// let x = 10 

// function foo(){
//     let y = 20
//     console.log(x) //20
//     console.log(y) //20
// }

// console.log(x) //10
// // console.log(y) // error
// foo()

