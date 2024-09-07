import React from 'react'
import Inputclasses from '../Input/Input.module.css'
import selectClasses from '../Select/Select.module.css'

function Select(props : React.InputHTMLAttributes<HTMLSelectElement>) : JSX.Element {
  return (
    <select {...props} className={Inputclasses.input + ' ' + selectClasses.select }></select>
  )
}

export default Select