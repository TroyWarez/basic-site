import Inputclasses from '../Input/Input.module.css'
import selectClasses from './SelectMenu.module.css'
import SelectMenuOption from '../../models/selectMenuOption.tsx'
import SelectMenuItem from '../SelectMenuItem/SelectMenuItem.tsx'
interface SelectMenuProps {
  options: SelectMenuOption[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string | number;
  name?: string;
  placeholder?: string;
  required?: boolean;
  hidden?: boolean;
  'aria-label'?: string;
  title? : string;
}
const SelectMenu = ({options, onChange, value, name, placeholder, required, 'aria-label':ariaLabel, title, hidden}: SelectMenuProps) : JSX.Element => {
  return (
    <select className={`${Inputclasses.input} ${selectClasses.select}`} value={value} onChange={onChange} name={name} aria-label={ariaLabel} required={required} title={title} hidden={hidden}>
    {placeholder && <SelectMenuItem>{placeholder}</SelectMenuItem>}
    {options.map((option) => (
        <SelectMenuItem key={option.value} value={option.value}>
          {option.displayValue}
        </SelectMenuItem>
      ))}
    </select>
  )
}

export default SelectMenu