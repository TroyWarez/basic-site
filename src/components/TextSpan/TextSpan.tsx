
interface TextSpanProps {
  className?: string;
  children: React.ReactNode;
}
const TextSpan = ({children, className} : TextSpanProps)  : JSX.Element => {
  return (
    <span className={className} >
        {children}
        </span>
  )
}
export default TextSpan;