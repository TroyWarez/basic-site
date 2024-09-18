interface SelectMenuItemProps {
    children: React.ReactNode;
    value?: string | number;
  }
  const SelectMenuItem = ({
    children,
    value,
  }: SelectMenuItemProps): JSX.Element => {
    return <option title={children?.toString()} value={value}>{children}</option>;
  };
  
  export default SelectMenuItem;
  