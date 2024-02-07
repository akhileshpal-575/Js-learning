  function myName(){
    console.log("hello is akhilesh pal") 
  }
//   myName()

function addTwoNum(num1,num2){ //here use parameters
    return num1+num2;
}
console.log(addTwoNum(2,3)) //here arguements

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
//499 and 299 goes into val1,val2 and rest of the values spread into array
console.log(calculateCartPrice(499,299,399,599)) 

const user = {
    username:"hitesh",
    price : 459
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username}`)
}
// handleObject(user)   
//also
handleObject({
    username: "sam",
    price:999
})

const myArr = [23,3,5,67,2]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArr))