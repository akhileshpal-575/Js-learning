let myDate = new Date()

console.log(myDate)//not much understandable

console.log(myDate.toString()) // readable

//best practice to use 
console.log(myDate.toDateString()) // show only Date
console.log(myDate.toLocaleString)
console.log(typeof myDate)

// month start with zero in javascript
let myCreateDate = new Date(2024,1,7) 
console.log(myCreateDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp )
console.log(myCreateDate.getTime())

// In  milisecond
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth)
console.log(newDate.getDay)
console.log(newDate.getFullYear)
console.log(newDate.getTime)

