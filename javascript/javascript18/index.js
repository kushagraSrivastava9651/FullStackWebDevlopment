//promise : eventual completeion of async operation
//status:pending ,completed,rejected
//promise let async method return value like synchronous methods
//khta hai future mae value mil jaegi

//promise:1- resolve and rejected

//

// let firstpromise=new Promise((resolve,reject)=>{
//     console.log('hrllo')
//     reject(10000)
// })

// let firstpromise=new Promise((resolve,reject)=>{
//     console.log('hrllo')
//     reject(new Error('internal error'))
// })



//async examplr

//promise fulfill: --> then()
//promise reject: --> catch()



// let firstpromise=new Promise((resolve,reject)=>{
  
// setTimeout(function myName(){
//     console.log('hekkki')
// }
// , 15000);

// })


// let promise1=new Promise((resolve,reject)=>{
// let success=false
// if(success){
//     resolve("promise fullfilled")
// }
// else {
//     reject("promise rejected")
// }
// })


// //promise chaining
// promise1.then((message)=>{
//     console.log('then ka  2 message ',message)
//     return "promise fullfilled 2"
// }).then((message)=>{
//     console.log('then ka 3 message ',message)
//     return "promise fullfilled 3"
// }).then((message)=>{
//     console.log('then ka  4 message ',message)
//     return "promise fullfilled 4"
// }).catch((e)=>{
//     console.log('catch ka message ',e) 
// }).finally(()=>{
//     console.log('finallu')
// }
// )


let promise1= new Promise((accept,reject)=>{
  setTimeout(accept,1000,"11");
})


let promise2= new Promise((accept,reject)=>{
  setTimeout(accept,3000,"22");
})


let promise3= new Promise((accept,reject)=>{
  setTimeout(() => {
 reject('33')
  }, 6000);
})

Promise.all([promise2,promise3,promise1]).then((message)=>{
    console.log(message)
})
.catch((e)=>{
    console.error('error',e)
})