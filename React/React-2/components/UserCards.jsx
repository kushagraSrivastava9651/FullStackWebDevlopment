import React from 'react'
import './UserCards.css'
import icons from '../src/assets/image.png';

//rafce
const UserCards = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id='user-image' src={props.image} alt={props.name} />
      <p id='user-desc'>Description of {props.desc}</p>
    </div>
  )
}

export default UserCards
                 