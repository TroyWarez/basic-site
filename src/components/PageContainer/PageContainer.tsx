import classes from "./PageContainer.module.css";

interface PageContainerProps {
  children: JSX.Element | JSX.Element[];
  isCentered?: boolean;
  Overflow?: boolean;
}
const PageContainer = ({ children, isCentered, Overflow }: PageContainerProps): JSX.Element  => (
    <div className={`${classes.container}${(isCentered) ? ` ${classes.centered}` : ''} ${classes.overflow}${(Overflow) ? ` ${classes.overflow}` : ''}`}>
    {children}
    </div>
);

export default PageContainer;
