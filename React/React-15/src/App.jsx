
import { useState } from 'react'
import './App.css'
import Child from './ChildComponents/Child'
import { useCallback } from 'react'


function App() {

const [count,setCount]=useState(0)


let handleButton=useCallback(()=>{setCount(count+1)},[count])
  return (
   <div>
    <div>
      <p>Count: {count}</p>
      <button onClick={handleButton}>click</button>
      <Child buttonName="click me2" handleClick={handleButton}></Child>
    </div>
   </div>
  )
}

export default App
