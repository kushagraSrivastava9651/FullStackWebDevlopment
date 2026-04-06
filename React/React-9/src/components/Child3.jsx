import React, { useContext } from 'react'
import { ThemeContext } from '../App'
const Child3 = () => {
    const {theme,settheme}=useContext(ThemeContext);
    function handleclick(){
        if(theme === 'light'){
            settheme('dark')}
        else {settheme('light')}
    }
  return (
    <div>
     <button onClick={handleclick}>change theme</button>
    </div>
  )
}

export default Child3
