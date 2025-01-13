import React from 'react'
import "./Button.css"

function Button({title, onClick,variant}) {
  return (
    <button  onClick={onClick}type='button' className='btn'>{title}</button>
  )
}

export default Button