import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from '/src/components/Card'

function App() {

  //create state
  //manage state
  //change state
  //sabhi child ke sth sync krwadunga

  const [name, setname] = useState('')

  return (
 <div>
  <Card title="title1" name={name} setname={setname}/>

<p>I am inside parent:{name}</p>
  <Card title="title2" name={name} setname={setname}/>
 </div>
  )
}

export default App
