import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './feature/counter/counterSlice'

function App() {
  const [amount,updateamount]=useState(0)
const count =useSelector((state)=>state.counter.value)
const dispatch = useDispatch()
function incrementf(){
  dispatch(increment())
}
function updateamountss(){
  dispatch(incrementByAmount(amount))
}
function decrementf(){
dispatch(decrement())
}
function handlereset(){
  dispatch(reset())
}
  return (
    <div>
      <button onClick={incrementf}>+</button>
      <p>count : {count}</p>
      <button onClick={decrementf}>-</button>
       <button onClick={handlereset}>-</button>
       <br />
       <input type="Number" placeholder='enter value' value={amount} onChange={(e)=>updateamount(e.target.value)} />
       <button onClick={updateamountss}>update</button>
    </div>
  )
}

export default App
