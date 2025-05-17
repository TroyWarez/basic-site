import { MouseEventHandler, ReactNode } from "react";
import classes from "./ImgButton.module.css"
import { Link } from "react-router-dom";
interface ImageButtonProps {
    className?: string;
    imgPath: string;
    name?: ReactNode;
    altText: string;
    linkPath: string;
    onClick?: MouseEventHandler;
    children?: JSX.Element | JSX.Element[];
}
const ImgButton = ( {className, imgPath, name, altText, linkPath, children, onClick} : ImageButtonProps)  : JSX.Element => {
    return (
        <div className={`${classes.ImgButton} ${className ? className : ''}`} onClick={onClick}>
        {(linkPath) ? <Link className={classes.Link} to={linkPath}>
        <img className={classes.Img} src={imgPath} alt={altText}/>
        {children}
        </Link> : <img className={classes.Img} src={imgPath} alt={altText}/>}
        {children}
        {(linkPath) ? <Link className={classes.Link} to={linkPath}>
        <p className={classes.p}>{name}</p>
        </Link> : <p className={classes.p}>{name}</p>}
        </div>
    );
};

export default ImgButton;