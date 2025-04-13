
import classes from "./TextSpan.module.css"
interface TextSpanProps {
  children: React.ReactNode;
}
const TextSpan = ({children} : TextSpanProps)  : JSX.Element => {
  return (
    <span className={classes.span}>{children}</span>
  )
}
export default TextSpan;