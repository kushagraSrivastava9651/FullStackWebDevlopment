
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react';

function App() {
  // const [count,setcount]=useState(0)
  // let val=useRef(0);
  // let btnref=useRef();
  // function handlecount(){
  //    val.current+=1;
  //   console.log('value of val',val)
  //   setcount(count+1)
  // }

  // useEffect(() => {
   
  //   console.log('everty render')
  // })

  // function changecoloe(){
  //   btnref.current.style.backgroundColor='red';
  // }


  const [time,settime]=useState(0)
  let timeref=useRef(null)


  function starttimer(){
     timeref.current=  setInterval(() => {
   settime(time=>time+1)
    }, 1000);
  }


    function stoptimer(){

    clearInterval(timeref.current)
    timeref.current=null

  }

  function cleartimer(){
    stoptimer()
    settime(0);
  }
  
  return (
    // <div>
    //   <button ref={btnref} onClick={handlecount}>increment</button>
    //   <p>count : {count}</p>
    //         <button onClick={changecoloe}>changecoloe</button>

    // </div>
<div>
  <h1>stop timer:{time}</h1>
  <button onClick={starttimer}>
start
  </button>
    <button onClick={stoptimer}>
stop
  </button>
    <button onClick={cleartimer}>
reset
  </button>
</div>

   
  )
}

export default App
