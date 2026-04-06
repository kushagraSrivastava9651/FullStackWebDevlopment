
import heroImg from './assets/hero.png'
import './App.css'
import { useState } from 'react'
import { useMemo } from 'react'

function App() {
const [count,secount]=useState(0)

const [comple,setcomlex]=useState(0)



function handlecount(){
  secount(count+1)
}
function complete(xyz){
  for(let i=0;i<10000;i++){
    console.log('dunia')

  }
  return Number(2*xyz)
}


// const triple = useMemo(() => complete(comple), [comple])
let triple = complete(comple)
  return (
<div>
<button onClick={handlecount}>count</button>
<p>count:{count}</p>
<input type="Number" value={comple} onChange={e=>{setcomlex(e.target.value)}} />

<p>comple:{triple}</p>
</div>
  )
}

export default App
