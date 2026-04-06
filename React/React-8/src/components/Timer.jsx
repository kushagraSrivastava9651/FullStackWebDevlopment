import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [second,setsecond]= useState(0)

    useEffect(() => {
      const interval=setInterval(() => {
         console.log('time to work') 
       setsecond(prev=>prev+1)
      }, 1000);
    
      return () => {
        clearInterval(interval)
        console.log('time to stop')
      }
    }, [])
    
  return (
    <div>
      <h2>Timer: {second} sec</h2>

      
    </div>
  )
}

export default Timer
