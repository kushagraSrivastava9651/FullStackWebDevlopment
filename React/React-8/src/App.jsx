
import { useEffect, useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import Fecture from './components/Fecture'

function App() {


  // //first--> side effect function
  // //second--> clean up function
  // //third--> comman separate deep list

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  
  // const [count,setcount]=useState(0)
 
  // const [total,settotal]=useState(1)

  //variation 1
  //run on every render
  // useEffect(() => {
  //    alert('ubfuiwf')
  // })
  


  // //variation 2
  // //that runs on only first render
  // useEffect(() => {
  //    alert('ubfuiwf 1st')
  // },[])
  

  //   //variation 3
  // //that runs on only first render
  // useEffect(() => {
  //    alert('run onlt when count updates')
  // },[count])
  



      //variation 4
  // //that runs on multiple dependency
  // useEffect(() => {
  //    alert('run onlt when count/total updates')
  // },[count,total])
  
  // function clickme(){
  //   setcount(count+1)
  // }
  // function clickmetotal(){
  //   settotal(total+1)
  // }

    //that runs on multiple dependency
  // useEffect(() => {
  //    console.log('run onlt when count/total updates',count)
  //    return ()=>{
  //     alert('unmounted clean up')
  //    }
  // },[count])
  
  // function clickme(){
  //   setcount(count+1)
  // }
  // function clickmetotal(){
  //   settotal(total+1)
  // }
  return (
    <div>
     {/* <Timer></Timer> */}
   <Fecture></Fecture>
    </div>
  )
}

export default App
