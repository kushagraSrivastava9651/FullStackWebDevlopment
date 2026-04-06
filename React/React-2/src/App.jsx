import React from 'react'
import './App.css'
import UserCards from "../components/usercards"
import kushagra from '../src/assets/image.png';


function App() {

  return (
    <div className="container">
      <UserCards name="Love rana" desc="desc1" image={kushagra} style={{"border-radius":"50%"}}/>
      <UserCards  name="Maha rana" desc="desc2" image={kushagra}/>
      <UserCards name="Kushagra rana"  desc="desc3" image={kushagra}/>
    </div>
  )
}

export default App
