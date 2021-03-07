import React from 'react'

const Button = (props) => {

  return(

    <button style={{width:`${props.width}`, border:"5px red solid"}}>
      {props.button}
    </button>

  )

}

export default Button