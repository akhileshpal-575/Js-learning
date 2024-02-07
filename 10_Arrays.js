// const arr = [44,5,3,6,7,2]
// const str = ['akhile','ajfaj','jalkjfl']

// const arr1 = new Array(30,4,56,3)
// console.log(arr1)

// arr1.unshift(9)
// console.log(arr1)
// arr1.shift()
// console.log(arr1)

// console.log(arr.includes(6))
// console.log(arr.indexOf(3))

// const newArr = arr.join()
// console.log(newArr)
// console.log(typeof newArr) // becomes string 

// const myn1 = arr.slice(1,3)
// console.log(myn1)
// //slice never manipulate the original array 
// const myn2 = arr.splice(1,3) 
// // splice manipulate the original array 
// console.log(myn2)

 const marvel = ["ironman","tony"]
 const dc = ["superman","batman"]

 const allheoros =  [...marvel, ...dc]
 console.log(allheoros)

 const another_arr = [2,3,5,[4,6,7],3,[6,8,9,5,[0,1]]]
const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr)

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh")) // make an array

let score1 = 4949;
let score2 = 9399;
let score3 = 8200;
console.log(Array.of(score1,score2,score3)) //convert into array