let src={
    age:88,
    name:'kisj'
}
// console.log(obj)
// obj.color='blue'
// console.log(obj)

//object cloning methods

//1-spread operator ...


// let des={...src}
// src.age=99

// console.log('src'+'',src)
// console.log(des)

//2-assign operator ...

// let des=Object.assign({},src)

// src.age=99

// console.log('src'+'',src)
// console.log(des)


//3-iteration operator ...
let des={};
for(key in src){
    let newkey=key;
    let newvalue=src[key];
    des[newkey]=newvalue

}

src.age=99

console.log('src'+'',src)
console.log(des)


//garbage collector