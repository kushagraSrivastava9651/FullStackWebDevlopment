import React from 'react'

import './Counter.css';
import { useState } from 'react';
const Counter = () => {
    const [count,setCount]=useState(11)

  return (
    <div className='counter-container'>
      
      <p className='clicked'>counter clicked:{count}</p>
       <button className='button' onClick={()=>{setCount(count+1)}}>Click</button>
    </div>
  )
}

export default Counter
