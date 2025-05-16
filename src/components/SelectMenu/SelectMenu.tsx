import FormInputclasses from '../FormInput/FormInput.module.css'
import selectClasses from './SelectMenu.module.css'
import FormInputClasses from '../FormInput/FormInput.module.css'
import SelectMenuOption from '../../models/selectMenuOption.tsx'
import SelectMenuItem from '../SelectMenuItem/SelectMenuItem.tsx'
interface SelectMenuProps {
  className?: string;
  options: SelectMenuOption[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string | number;
  name?: string;
  placeholder?: string;
  required?: boolean;
  hidden?: boolean;
  'aria-label'?: string;
  title? : string;
  disabled?: boolean;
  label?: string;
}
const SelectMenu = ({className, options, onChange, value, name, placeholder, required, 'aria-label':ariaLabel, label, title, hidden, disabled}: SelectMenuProps) : JSX.Element => {
  return (
    <div hidden={hidden} className={FormInputClasses.container}>
    <label hidden={hidden} className={FormInputClasses.label} htmlFor={(!className) ? FormInputClasses.input : `${className} ${FormInputClasses.input}`}>{label}<span className={FormInputClasses.span}> {`${(label) ? '*' : ''}`}</span></label>
    <select className={`${FormInputclasses.input} ${selectClasses.select} ${(className) ? className : ''}`} value={value} disabled={disabled} onChange={onChange} name={name} aria-label={ariaLabel} required={required} title={title} hidden={hidden}>
    {placeholder && <SelectMenuItem>{placeholder}</SelectMenuItem>}
    {options.map((option) => (
        <SelectMenuItem key={option.value} value={option.value}>
          {option.displayValue}
        </SelectMenuItem>
      ))}
    </select>
    </div>
  )
}

export default SelectMenu