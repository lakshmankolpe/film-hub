import React from 'react'
import "./Input.css"

function Input({value,setValue,label,placeholder,type="text"}) {
  return (
    <div className="input-container">
    <label htmlFor={label} className="input-lebal">
    {label}
    </label>
    <input
      type={type}
      id={label}
      className="input-element"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  </div>
  )
}

export default Input