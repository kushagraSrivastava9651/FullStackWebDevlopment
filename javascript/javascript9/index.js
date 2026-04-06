// // class human{
// //       age=99; //public
// //       #wt=990;//private

// //       constructor(newage,wt){
// //         this.age=newage;
// //         this.#wt=wt
// //       }

// //      walking(speed) {
// //         console.log("speed :",speed)
// //          console.log("wt :",this.#wt)
// //       }

// //       get ageof(){
// //            return this.age;
// //       }
// //       set ageofh(ages){
// //         this.age=ages
// //       }

// // }

// //  let h=new human(0,3);
// // console.log(h.age)
// // console.log(h.walking(999787))

// // console.log(h.age)
// // h.ageofh=77
// // console.log(h.ageof)



// //default parameters:allow to use functions with default values

// function sayname(name='prabhu',last='ss'){
//     console.log(name,last)
// }

// function saynamealsopassobject(name={age:44,name:'aa'}){
//     console.log(name)
// }

// function saynamealsopassobjectarray(name=[2,3,4,5,6]){
//     console.log(name)
// }
// saynamealsopassobjectarray()

// //if pass null then null print ,but if pas undefined then default value use



function arra(){
    return [1,2,3,4,5]
}

function saynamealsopassobjectarrays(name=arra()){
    console.log(name)
}
saynamealsopassobjectarrays()