console.log('kusu');

function name(name){

    return name;
}

console.log(name('aa'))

function printcount(n){
    for(let i=0;i<=n;i++)console.log(i+'\n');
}
printcount(100)


//another method

let multiply=function(a,b){
    return a*b;
}

console.log(multiply(1,2))

//arrow fusntion

let add = (a,b,c)=>{
    return a+b+c;
}
console.log(add(177,277,99))