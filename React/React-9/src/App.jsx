import { useState } from 'react'

import './App.css'
import { createContext } from 'react'
import Child1 from './components/Child1';


const ThemeContext=createContext()


  // //step1 create context
  // const UserContext=createContext();

function App() {

console.log('App is rendering')

// const [user,setuser]=useState({name:'kushagra'})

const [theme,settheme]=useState('light')

  //step2 wrap all child inside provider
  return (
   <div>

  <ThemeContext.Provider value={{theme,settheme}}>

<div id='container' style={{backgroundColor:theme==='light'?"beige":"brown"}}>
    <Child1></Child1>
</div>

  </ThemeContext.Provider>




    {/* <UserContext.Provider value={user}>
    <Child1></Child1>
    </UserContext.Provider>
     */}
   </div>
  )
}

export default App
// export {UserContext}
export {ThemeContext}