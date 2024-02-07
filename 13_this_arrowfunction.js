 const user ={
    username:"hitesh",
    price:999,
 welcomeMessage: function(){
 console.log(`${this.username} , welcome to website`)
 console.log(this)
 }
 }
 user.welcomeMessage()
 user.username = 'sam'
 user.welcomeMessage()
 console.log(this) //empty {}
//  browser has window object 

// ***********************Arrow function****************

// const addtwo = (num1,num2)=>{
//     return num1+num2;
// }
// const addtwo = (num1,num2)=> num1+num2
const addtwo = (num1,num2)=> (num1+num2)
console.log(addtwo(3,4))

const obj = ()=>({username:"hitesh"})
console.log(obj())