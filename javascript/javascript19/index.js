// async function helloinsideasync() {
//     setTimeout(() => {
//         console.log('heeloo')
//     }, 3000);
// }
// let output=helloinsideasync()


//await
//fetch api:fetch data from internet:get,psot ,update.delete request





//scenario
//1-prepare url / api endpoint: sync
//2- fetch data / network call -> async
//3- process data-> sync



async function post(){
const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "kushagra",class:'asbl' }),
  // …
});
let data=await response.json()
console.log(data)

}
async function fetchdara() {
    //get request async operation 
    let response=  await fetch('https://jsonplaceholder.typicode.com/posts')
    //parse json is async operation
     let data=await response.json()
    console.log(data)
}
 
post()

fetchdara()