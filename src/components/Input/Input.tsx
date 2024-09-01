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
                      event.target.value = event.target.value.replace(/[^\d!@$%^`~+\-().\s#*]/g, "");
                      
                      if(event.target.value !== '' && event.target.value.length < 14) {
                        if(event.target.value.length > 2 && (event.target.value.length < 11))
                        {
                          if( event.target.value.length > 2 && event.target.value[0] !== '(' && event.target.value[3] !== ')' ||
                            event.target.value[0] !== '(' && event.target.value[4] !== ')' ) 
                          {
                            event.target.value = '(' + event.target.value.slice(0, 3) + ')' + event.target.value.slice(3, event.target.value.length);
                          }
                          if ( event.target.value.length > 5 && event.target.value[0] === '(' && event.target.value[4] === ')' && event.target.value[5] !== ' ')
                          {
                            event.target.value = event.target.value.slice(0, 5) + ' ' + event.target.value.slice(5, event.target.value.length);
                          }
                          if( event.target.value.length > 9 && event.target.value[0] === '(' && event.target.value[4] === ')' && event.target.value[5] === ' ' && event.target.value[9] !== '-')
                          {
                            event.target.value = event.target.value.slice(0, 9) + '-' + event.target.value.slice(9, event.target.value.length);
                          }
                        }

                      }
                      else if (event.target.value.length > 14)
                      {
                        if(isNaN(Number(event.target.value)))
                          {
                            event.target.value = event.target.value.replace(/\D/g, "");
                          }
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