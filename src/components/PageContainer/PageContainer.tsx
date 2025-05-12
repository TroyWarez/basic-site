import classes from "./PageContainer.module.css";

interface PageContainerProps {
  className?: string;
  children: JSX.Element | JSX.Element[];
}
const PageContainer = ({ children, className }: PageContainerProps): JSX.Element  => (
    <div className={`${classes.container}${(className) ? ` ${className}` : ''}`}>
    {children}
    </div>
);

export default PageContainer;
