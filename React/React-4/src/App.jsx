import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


import Button from '../src/components/Button'
function App() {
 const [count ,setcount]=useState(0);

 function handleclick(){
   setcount(count+2)
 }

  return (
    <div>

      
       <Button handleclick={handleclick} text="click Me">
      <h1>{count}</h1>
       </Button>


<Button handleclick={handleclick} text="click Me">
      <h1>{count}</h1>
       </Button>

      {/* <Card name="love babbar">
           <h1>Web dev Course</h1>
      <p>complete soon</p>
      </Card>

       <Card children="love babbar">
           {/* <h1>Web dev Course</h1>  overwrite the above children}
    
      </Card> */}
   
    </div>
  )
}

export default App
