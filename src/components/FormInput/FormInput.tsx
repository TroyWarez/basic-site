import classes from '../FormInput/FormInput.module.css'
import { useState } from 'react';
interface FormInputProps {
  className?: string | undefined;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void | undefined;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void | undefined;
  title?: string | undefined;
  placeholder?: string | undefined;
  inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
  type?: string | undefined;
  name?: string | undefined;
  id?: string | undefined;
  maxLength?: number | undefined;
  autoFocus?: boolean | undefined;
  required: boolean | undefined;
  autoComplete?: string | undefined;
  value?: string | undefined;
  disabled?: boolean | undefined;
  form?: string;
  label?: string;
  hidden?: boolean;
  message: string;
  error_message: string;
  validation_message: string;
}
const FormInput = (
  {
  className,
  onInput, 
  onBlur,
  onFocus, 
  title, 
  placeholder, 
  inputMode, 
  type, 
  name, 
  id, 
  maxLength, 
  autoFocus, 
  required, 
  autoComplete, 
  value, 
  disabled, 
  form,
  hidden,
  label,
  message,
  error_message,
  validation_message,
}: FormInputProps) : JSX.Element => {

  const [messageValue, setMessageValue] = useState<string>((message !== '') ? message : error_message);
  const [classStr, setClassString] = useState<string>((message !== '' && error_message !== '') ? classes.message : `${classes.error_message} ${classes.invisible}`);
  const [classSpanStr, setClassSpanStr] = useState<string>((message !== '' && error_message !== '') ? `${classes.spanError} ${classes.displayNone}` : `${classes.spanError} ${classes.displayNone}`);
  return (
    <div hidden={hidden} className={classes.container}>
      <label hidden={hidden} className={classes.label} htmlFor={(!className) ? classes.input : `${className} ${classes.input}`}>{label}<span className={classes.span} hidden={(required && (type !== 'submit')) ? false : true }> *</span></label>
        <input hidden={hidden}
          className={(!className) ? classes.input : `${className} ${classes.input}`}
          onInput={(e) => {
            if(onInput) {
              onInput(e as React.ChangeEvent<HTMLInputElement>);
            }
            if ((message !== '' && error_message !== '' && validation_message !== '') && e.currentTarget.value !== '')
              {
                if(message !== '')
                {
                  setMessageValue(validation_message);
                }
                setClassString(classes.message);
                setClassSpanStr(`${classes.spanError} ${classes.displayNone}`);
                e.currentTarget.style.border = '1px solid #6ebe49';
              }
            else if ((message !== '' && error_message !== '') && e.currentTarget.value !== '')
            {
              if(message !== '')
              {
                setMessageValue(message);
              }
              setClassString(classes.message);
              setClassSpanStr(`${classes.spanError} ${classes.displayNone}`);
              e.currentTarget.style.border = '1px solid #6ebe49';
            }
            else if (e.currentTarget.value !== '')
            {
              e.currentTarget.style.border = '1px solid #6ebe49';
              setClassString(`${classes.error_message} ${classes.invisible}`);
              setClassSpanStr(`${classes.spanError} ${classes.invisible}`);
            } 
          }}
          onBlur={(e) => {
            if (e.target.value === '' && required && (type !== 'submit')) {
              setMessageValue(error_message);
              setClassString(classes.error_message);
              setClassSpanStr(classes.spanError);
              e.currentTarget.style.border = '1px solid #eb1919';
          }
          else
          {
            setMessageValue(message);
            e.currentTarget.style.border = '1px solid var(--main-bg-accentColor)';
          }
          if(onBlur) {
            onBlur(e);
          }
        }}
          onFocus={(e) => {
            e.currentTarget.style.border = '1px solid #6ebe49';
            setClassString(`${classes.error_message} ${classes.invisible}`);
            setClassSpanStr(`${classes.spanError} ${classes.invisible}`);
            if(onFocus) {
            onFocus(e)
            }
          }}
          title={title}
          placeholder={placeholder}
          inputMode={inputMode}
          type={type}
          name={name}
          id={id}
          maxLength={maxLength}
          autoFocus={autoFocus}
          required={ (hidden) ? false : required }
          autoComplete={autoComplete}
          value={value}
          disabled={disabled}
          form={form}
        />
        <p hidden={(!message && !error_message) || hidden} className={classStr}><span className={ classSpanStr }>⚠ </span>{messageValue}</p>
    </div>
  )
}

export default FormInput