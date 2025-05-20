import classes from '../FormInput/FormInput.module.css'
import { useState } from 'react';
interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  minlength?: number;
  maxlength?: number;
  label?: string;
  divclassName?: string;
  pattern?: string;
  message: string;
  error_message: string;
  validation_message: string;
  tooShort_message: string;
  noLabel?: boolean;
  defaultValue?: string;
  
}
const FormInput = (
  {
  className,
  divclassName,
  onInput, 
  onBlur,
  onFocus,
  title, 
  placeholder, 
  inputMode, 
  type, 
  name, 
  id,
  minlength,
  maxlength, 
  autoFocus, 
  required, 
  autoComplete, 
  value, 
  disabled, 
  form,
  hidden,
  label,
  pattern,
  message,
  error_message,
  validation_message,
  tooShort_message,
  noLabel,
  defaultValue,
}: FormInputProps) : JSX.Element => {

  const [messageValue, setMessageValue] = useState<string>((message !== '') ? message : error_message);
  const [classStr, setClassString] = useState<string>((message !== '' && error_message !== '') ? classes.message : `${classes.error_message} ${classes.invisible} ${(type === 'submit') ? classes.displayNone : ''}`);
  const [classSpanStr, setClassSpanStr] = useState<string>((message !== '' && error_message !== '') ? `${classes.spanError} ${classes.displayNone}` : `${classes.spanError} ${classes.displayNone}`);
  return (
    <div hidden={hidden} className={`${classes.container} ${(divclassName) ? divclassName : ''}`}>
      <label hidden={hidden || noLabel} className={classes.label} htmlFor={(!className) ? classes.input : `${className} ${classes.input}`}>{label}<span className={classes.span} hidden={((required && (type !== 'submit') || label)) ? false : true }> *</span></label>
        <input 

        pattern={(pattern) ? pattern : undefined}
        minLength={(minlength) ? minlength : 0}
        maxLength={(maxlength) ? maxlength : 10}
        onInvalid={(e) => {
          e.preventDefault();
        }}
        onBlur={(e) => {
          if (e.target.value === '' && e.target.required) {
            e.target.style.borderColor = '#eb1919';
            setMessageValue(error_message);
            setClassString(`${classes.error_message}`);
            setClassSpanStr(`${classes.spanError}`);
          }
          else if (e.target.validity.patternMismatch && e.target.required) {
            e.target.style.borderColor = '#eb1919';
            setMessageValue(validation_message);
            setClassString(`${classes.error_message}`);
            setClassSpanStr(`${classes.spanError}`);
          } else if (e.target.validity.tooShort && e.target.required) {
            e.target.style.borderColor = '#eb1919';
            setMessageValue(tooShort_message);
            setClassString(`${classes.error_message}`);
            setClassSpanStr(`${classes.spanError}`);

          } else if (e.target.validity.valid && e.target.required) {
            if(message !== '') {
            setMessageValue(message);
            setClassString(`${classes.message}`);
            setClassSpanStr(`${classes.spanError} ${classes.displayNone}`);
            }
            else {
            setClassString(`${classes.error_message} ${classes.invisible}`);
            setClassSpanStr(`${classes.spanError} ${classes.invisible}`);
            e.target.style.borderColor = 'var(--main-bg-accentColor)';
            }
          }
         if(e.target.style.borderColor === 'rgb(47, 115, 60)'){
            e.target.style.borderColor = 'var(--main-bg-accentColor)';
            }

          if(onBlur) {
            onBlur(e)
          }
        }}
        hidden={hidden}
          className={(!className) ? classes.input : `${className} ${classes.input}`}
          onFocus={(e) => {
            if(type !== 'submit' && label){
              setMessageValue(message);
              setClassString(classes.message);
              if(message) {
              setClassSpanStr(`${classes.spanError} ${classes.displayNone}`);
              }
              else {
                setClassSpanStr(`${classes.spanError} ${classes.invisible}`);
              }

            e.target.style.borderColor = '#2f733c';
          }
          if(onFocus) {
              onFocus(e)
            }
          }}
          onInput={(e) => {
          if(type !== 'submit' && label){
            setMessageValue(message);
            setClassString(classes.message);
            }
            if(onInput) {
              onInput(e)
            }
          }}
          title={title}
          placeholder={placeholder}
          inputMode={inputMode}
          type={type}
          name={name}
          id={id}
          autoFocus={autoFocus}
          required={ (hidden) ? false : required }
          autoComplete={autoComplete}
          value={value}
          disabled={disabled}
          form={form}
          defaultValue={defaultValue}
        />
        <p hidden={noLabel} className={classStr}><span hidden={noLabel} className={ classSpanStr }>⚠ </span>{messageValue}</p>
    </div>
  )
}

export default FormInput