//array (array of obj) specific loops
// for of 

const arr = [1,2,4,5,6]
for (const num of arr) {
    console.log(num)
}

const greeting = "hello world!"
for (const greet of greeting ) {
 console.log(`each chat is ${greet}`)
}

//map in js 
const map = new Map()
map.set('in',"india")
map.set('usa',"united state of america")

for (const [key,value] of map) {
    console.log(key," ",value)
}

const myobj = {
    js:'javascript',
    cp: 'c++'
}
//for objects we use for in loop
for (const key in myobj) {
    console.log(`${key} shortcut for ${myobj[key]}`)
}

const programming  = ["js","rb","cp"]

programming.forEach(function (item){
    console.log(item)
})

programming.forEach((item,index,arr)=>{   //have an excess of index and complete arr also
 console.log(item)
})

const myCoding = [
    {
        name : "java",
        age : 23
    },
    {
        name : "java",
        age : 23
    },
    {
        name : "java",
        age : 23
    },
]

myCoding.forEach((item)=>{
 console.log(item.name)
})

