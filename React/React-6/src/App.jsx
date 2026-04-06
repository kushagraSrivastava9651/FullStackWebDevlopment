import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

function App() {
  const [isLogin, setLogIn] = useState(false)

  return (
    <div>
      {isLogin ? <LoginBtn/> : <LogoutBtn/>}
  </div>
  )
}

export default App
