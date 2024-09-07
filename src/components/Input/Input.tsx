import React from 'react'
import classes from '../Input/Input.module.css'
function Input(props : React.InputHTMLAttributes<HTMLInputElement>) : JSX.Element {
      function luhnCheck(input : string) { // Wikipedia code
        const number = input;
        const digits = number.replace(/\D/g, "").split("").map(Number);
        let sum = 0;
        let isSecond = false;
        for (let i = digits.length - 1; i >= 0; i--) {
          let digit = digits[i];
          if (isSecond) {
            digit *= 2;
            if (digit > 9) {
              digit -= 9;
            }
          }
          sum += digit;
          isSecond = !isSecond;
        }
        return sum % 10 === 0;
      }
    function onInputHandler (event : React.ChangeEvent<HTMLInputElement>) {
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
                    if (event.target.value.length > 3 && event.target.value[3] !== ' ')
                    {
                      event.target.value = event.target.value.slice(0, 3) + ' ' + event.target.value.slice(3, event.target.value.length);
                    }
                  }
                break;
              }
            case "Card number":
                {
                  if(!luhnCheck(event.target.value) && event.target.value.length === 16)
                  {
                    event.target.classList.add(classes["input-error"]);
                  }
                  else if (event.target.classList.length > 0)
                  {
                    event.target.classList.remove(classes["input-error"]);
                  }
                  
                  if( event.target.value.length > 4 && event.target.value[4] !== ' ') 
                  {
                    event.target.value = event.target.value.slice(0, 4) + ' ' + event.target.value.slice(4, event.target.value.length);
                  }
                  if( event.target.value.length > 9 && event.target.value[9] !== ' ') 
                    {
                      event.target.value = event.target.value.slice(0, 9) + ' ' + event.target.value.slice(9, event.target.value.length);
                    }
                  if( event.target.value.length > 14 && event.target.value[14] !== ' ') 
                  {
                    event.target.value = event.target.value.slice(0, 14) + ' ' + event.target.value.slice(14, event.target.value.length);
                  }
                  break;
                }
              case "Expiration date (MM / YY)": 
                {
                  event.target.value.toUpperCase();
                  if(event.target.value !== '')
                    {
                      event.target.value = event.target.value.toUpperCase().replace(/([^A-Z0-9:./()\-\s])/g, "");
                      if (event.target.value.length > 3 && event.target.value[3] !== ' ')
                      {
                        event.target.value = event.target.value.slice(0, 2) + '/' + event.target.value.slice(2, event.target.value.length);
                      }
                    }
                  break;
                }
          }
        }
        }
    function onBlur(event : React.FocusEvent<HTMLInputElement>)
    {
      switch(event.currentTarget.name)
      {
        case "Card number":
          {
            if (event.target.classList.length > 1 && event.currentTarget.classList[1] === classes["input-error"])
              {
                event.currentTarget.classList.remove(classes["input-error"]);
              } 
            break;
          }
      }
    }
  return (
    <input  {...props}
    onInput={onInputHandler}
    onBlur={onBlur}
    className={(!props.className) ? classes.input : props.className + ' ' + classes.input}>
    </input>
  )
}

export default Input