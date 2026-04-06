//handling error

//try catch block

// try{
//         console.log('start try')
//     console.log(x);
//          console.log('end try')
// }
// catch(e){
//     //define error ke sth kya krna hai
//     console.log('i am inside catch block')
//         console.log('err: ',e)
// }
// finally{
// console.log('run always')
// }


//self error
try{
    console.log(x);
}
catch(e){
    throw new Error('clear kr dh')
}