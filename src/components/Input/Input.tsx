import React from 'react'
import classes from '../Input/Input.module.css'
function Input(props : React.InputHTMLAttributes<HTMLInputElement>) : JSX.Element {
    function onInputHandler (event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value !== "")
          {
            switch(event.target.inputMode) {
              case "numeric":
                  {
                    if(isNaN(Number(event.target.value)))
                      {
                        event.target.value = event.target.value.replace(/\D/g, "");
                      }
                    break;
                  }
                case "tel":
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
            }
            switch(event.target.name) {
              case "Postal Code": 
              {
                event.target.value.toUpperCase();
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
          }
        }
        }
  return (
    <input  {...props}
    onInput={onInputHandler}
     className={(!props.className) ? classes.input : props.className}>
    </input>
  )
}

export default Input