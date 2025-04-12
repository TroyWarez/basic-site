import classes from "./PageContainer.module.css";

interface PageContainerProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}
const PageContainer = ({ children, title }: PageContainerProps) => (
    <div className={classes.container}>
    <title>{title}</title>
    {children}
    </div>
);

export default PageContainer;
