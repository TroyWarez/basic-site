import React from 'react'
import classes from '../FormInput/FormInput.module.css'
interface FormInputProps {
  className?: string | undefined;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void | undefined;
  onClick?: (event: React.PointerEvent<HTMLInputElement>) => void | undefined;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void | undefined;
  title?: string | undefined;
  placeholder?: string | undefined;
  inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
  type?: string | undefined;
  name?: string | undefined;
  id?: string | undefined;
  maxLength?: number | undefined;
  autoFocus?: boolean | undefined;
  required?: boolean | undefined;
  autoComplete?: string | undefined;
  value?: string | undefined;
  disabled?: boolean | undefined;
  form?: string;
}
const FormInput = (
  {className,
  onInput, 
  onBlur, 
  onClick,
  onKeyUp,
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
  form  }: FormInputProps) : JSX.Element => {
  return (
    <input
    className={(!className) ? classes.input : `${className} ${classes.input}`}
    onInput={onInput}
    onKeyUp={onKeyUp}
    onBlur={onBlur}
    onClick={onClick}
    title={title}
    placeholder={placeholder}
    inputMode={inputMode}
    type={type}
    name={name}
    id={id}
    maxLength={maxLength}
    autoFocus={autoFocus}
    required={required}
    autoComplete={autoComplete}
    value={value}
    disabled={disabled}
    form={form}
    >
    </input>
  )
}

export default FormInput