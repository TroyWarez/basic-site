import React from 'react'
import classes from '../Input/Input.module.css'
interface InputProps {
    className?: string
    type?: string
    name?: string
    id?: string
    required?: boolean
    placeholder?: string
    maxLength?: number
    autoFocus?: boolean

}
function Input(props : InputProps) : JSX.Element {
    function onInputHandler (event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value !== "")
          {
            switch(event.target.name) {
              case "Postal Code": 
              {
                if(event.target.value !== '')
                  {
                    event.target.value = event.target.value.toUpperCase().replace(/([^A-Z0-9:./()\-\s])/g, "");
                    if (event.target.value.length === 4 && event.target.value.charCodeAt(event.target.value.length - 1) !== 32)
                    {
                      event.target.value = event.target.value.slice(0, 3) + ' ' + event.target.value.slice(3, event.target.value.length - 1);
                    }
                  }
                break;
              }
              case "Phone Number":
                {
                  if(isNaN(Number(event.target.value)))
                    {
                      event.target.value = event.target.value.replace(/\D/g, "");
                    }
  
                  if (event.target.value.length === 4 && event.target.value.charCodeAt(0) !== 40)
                      {
                        event.target.value = '(' + event.target.value.slice(0, 3) + ') ' + event.target.value.slice(3, event.target.value.length - 1);
                      }
  
                    if (event.target.value.length === 10 && event.target.value.charCodeAt(event.target.value.length - 1) !== 45)
                        {
                          event.target.value = event.target.value.slice(0, 9) + '-' + event.target.value.slice(9, event.target.value.length);
                        }
                  break;
              }
              case "ZIP Code": 
              case "Card number":
              case "Expiration date (MM / YY)":
              case "Security Code":
                  {
                    if(isNaN(Number(event.target.value)))
                      {
                        event.target.value = event.target.value.replace(/\D/g, "");
                      }
                    break;
                  }
            }
          }
        }
  return (
    <input onInput={onInputHandler} className={(!props.className) ? classes.input : props.className} type={props.type} name={props.name} id={props.id} required={props.required} placeholder={props.placeholder} maxLength={props.maxLength} autoFocus={props.autoFocus} />
  )
}

export default Input