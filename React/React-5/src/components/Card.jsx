import React from 'react'

const Card = (props) => {
  return (
    <div>
      {props.title}
      <input
        type='text'
        value={props.name}
        onChange={(e) => {
          props.setname(e.target.value)
        }}
      />
      <p>
        {props.title} : {props.name}
      </p>
    </div>
  )
}

export default Card
