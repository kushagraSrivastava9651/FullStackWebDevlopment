import React from 'react'

const Child = React.memo((props) => {
    console.log('rerender')
  return (
    <div>
        <button onClick={props.handleClick}>
 {props.buttonName}
 
        </button>
     
    </div>
  )
}

)
export default Child
