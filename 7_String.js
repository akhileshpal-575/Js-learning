// backticks modern way best practice

// let name = "akhilesh"
// let surname = "pal"
// console.log(`my name is ${name} ${surname}`)

// another way to define string in js 

const str = new String("hello js")
console.log(str)
// console.log(str[0])
// console.log(str.__proto__)
// console.log(str.length)
// console.log(str.toUpperCase())
// console.log(str.charAt(2))
console.log(str.indexOf('j'))

// string slicing************

const newstr = str.substring(0,4)
console.log(newstr)


const anotherstr = str.slice(-8,4)
console.log(anotherstr)


// const newStringOne = "   hitesh   ";
// console.log(newStringOne)
// console.log(newStringOne.trim())
// trim work over white spaces

const url = "https://hitesh.com/hitesh%20choudahry"
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

console.log(str.split('-'))


