import classes from "./PageContainer.module.css";

interface PageContainerProps {
  children: JSX.Element | JSX.Element[];
  isCentered?: boolean;
}
const PageContainer = ({ children, isCentered }: PageContainerProps): JSX.Element  => (
    <div className={`${classes.container}${(isCentered) ? ` ${classes.centered}` : ''}`}>
    {children}
    </div>
);

export default PageContainer;
