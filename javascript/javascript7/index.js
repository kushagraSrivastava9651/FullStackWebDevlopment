//hoisting and call stack
//hoisting:process which shift var(onky for var works) and function declaration at the top of the scope


// setname('aaas')
// for simple fucntion case it works 
// function setname(name){
//     console.log(name);
// }


//for variable format not works
// let setname=function(name){
//      console.log(name);
// }
// console.log(num)
// var num=24


// const obj=new Human();
// class Human{

// }



//function callstack


//function called as first citizen: assign to varaible,return ,argument pass




// function greetme(greet,name){

// console.log(name)
// console.log(greet())
// }
// greetme(greet,'aa')


// function greet(){
//     console.log('hello')
// }



// function solve(num){
//   return    function(num){
//         return num*num
//     }
// }


// let ans=solve(2);
// console.log(ans(222))


const arr=[function(a,b){
    return a*b;
},
function(a,b){
    return a-b;
},
function(a,b){
    return a+b;
}
]

const plus=arr[2];
console.log(plus(3,33))