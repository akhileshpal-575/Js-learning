// to remove pollution of global scope declaration
(function chai(){
    console.log("immediate invoked")
})();

((name)=>{
console.log(`hello ${name}`)
})("hitesh");