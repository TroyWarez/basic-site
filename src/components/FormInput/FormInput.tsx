import classes from '../FormInput/FormInput.module.css'
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
  label?: string | undefined;
  error_message?: string | undefined;
  message?: string | undefined;
}
const FormInput = (
  {className,
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
  label,
  error_message,
  message,
}: FormInputProps) : JSX.Element => {
  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor={(!className) ? classes.input : `${className} ${classes.input}`}>{label}<span className={classes.span} hidden={(required && (type !== 'submit')) ? false : true }> *</span></label>
        <input
          className={(!className) ? classes.input : `${className} ${classes.input}`}
          onInput={onInput}
          onBlur={onBlur}
          onFocus={onFocus}
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
        />
        <p hidden={(error_message && (!message)) ? (false) : (true)} className={classes.error_message}><span className={classes.span}>⚠ </span>{error_message}</p>
        <p hidden={(message) ? (false) : (true)} className={` ${classes.error_message} ${classes.message}`}>{message}</p>
    </div>
  )
}

export default FormInput