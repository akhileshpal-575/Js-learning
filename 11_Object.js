// const obj = new Object()

// const regularUser = {
//     fullname: {
//         userfullname : {
//         firstname : "hitesh",
//         surname : "chaudary"
//     }
//   }
// }
// console.log(regularUser.fullname.userfullname.firstname)

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// console.log(obj3)

// const newobj = Object.assign({},obj1,obj2)
// console.log(newobj)

// //Array object
// const user =[
//     { email:"hello1.com",
//       name:"akhilesh"
//     },
//     { email:"hello2.com",
//         name:"akhilesh"
//       },
//       { email:"hello3.com",
//         name:"akhilesh"
//       },
//       { email:"hello4.com",
//         name:"akhilesh"
//       },
          
// ]
// user[1].email
// console.log(Object.keys(obj1))

 const course ={
    coursename : 'js in hindi',
    price: "999",
    courseInstructor:"hitesh"
 }
// Objects de-structure
const {courseInstructor:Instructor} = course
console.log(Instructor)

// {
//  "name" : "hitesh",
//  "course": "MCA",
//  "price" : "free"
// }



