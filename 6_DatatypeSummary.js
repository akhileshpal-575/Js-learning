// Primitive (call by value)
// String,Number, Boolean, null, undefined , Symbol , BigInt

// Reference type (nonprimitive)
// Array,Objects,Functions

// javaScript is Dynamically typed

const  id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const big = 123432555987597n;
console.log(typeof big)

const heros = ["shaktimaan", "naagraj", "doga"]

let obj ={
    name: "hitesh",
    age : 22
}
//  typeof null = Object 

const myfunction = function(){
    console.log("hello world")
}

// +++++++++++++++++++++++

// stack (primitive), heap (non-primitive)
 
let user = {
    email:"user@gmail.com"
}
console.log(user.email)
// email got memory in heap 
// user get in stack that referenced email availabl in heap

