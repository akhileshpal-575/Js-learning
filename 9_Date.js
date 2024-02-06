let myDate = new Date()

console.log(myDate)//not much understandable

console.log(myDate.toString()) // readable

//best practice to use 
console.log(myDate.toDateString()) // show only Date
console.log(typeof myDate)

// month start with zero in javascript
let myCreateDate = new Date(2024,1,7)
console.log(myCreateDate.toDateString())


