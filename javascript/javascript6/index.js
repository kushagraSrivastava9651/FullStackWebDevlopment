// //reference type : object array function

// //let arr[]={1,2,3,4};
// //arr is stored in stack memory and {1,2,3,4} stored in heap: arr has reference of {1,2,3,4}
// //object is key value pair

// let obj={
// name:'kusu',
// 'age of kusu':44,
// greet:()=>{console.log('hello');}
// };
// // delete obj.greet
// obj.ptanhi='pta chalao'
// obj.name='kushagra'
// console.log(obj);
// console.log(obj.greet())
// console.log(typeof(obj))

// let obj2=obj; //same refernece as obj one one location in heap if change one other also change

// //arrays :collectioins of items

// let array=[1,2,3,4,5]
// console.log(array)

// //array construcute

// let array1=new Array('kushagra',1,true)
// console.log(array1)
// console.log(array1[2])

// //built in function: pop ,slice,pop,shift,unshift,map,filter,sort,educe,indexof ,find
// array1.push('aman')
// array1.pop()
// array1.shift()
// array1.unshift('aman')
// console.log(array1.slice(1,2))
// console.log(array1)
// array1.splice(1,1,22)
// console.log(array1)
// let arr=[10,20,30];
// let ans=arr.map((number,index)=>{
//     console.log(number)
//         console.log(index)
//     return number*number;
// })


// console.log(ans)



// let arr=[99.99,77,87,66,55,44]
// let ans=arr.filter((number)=>{
//     return number%2==0
// })

// console.log(ans)


// let arr=['hh',99,'g',99,'00']

// let filternum=arr.filter((num)=>{return typeof(num)=='string'})
// console.log(filternum)



//reduce

// let arr=[1,2,333,4,5,6,7,8,9,333];

// let ans=arr.reduce((acc,curr)=>{
// return acc=acc+curr;//also return acc+curr
// },110);
// arr.sort((a,b)=>(b-a));
// console.log(arr.findLastIndex(num=>(num==333)))

// let arr=[1,2,333,4,5,6,7,8,9,333];

// arr.forEach((value,index)=>{
//     console.log(`print value ${value} for index : ${index}`)
// })

//we can use for loop method 2


//for in method 3



// let obj={
// name:'kusu',
// 'age of kusu':44,
// greet:function(){
//     console.log('hello');
// }
// };

// for(let key in obj){
//  console.log(key +": " + obj[key])
// }

// //for of method 3



// let arr=[1,2,333,4,5,6,7,8,9,333]; 
// for(let value of arr){
//  console.log(value);
// }

// let arr='dddddkji'; 
// for(let value of arr){
//  console.log(value);
// }


let arr=[1,2,333,4,5,6,7,8,9,333]; 
function sum(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){sum+=arr[i];console.log( sum)}
}

sum(arr)