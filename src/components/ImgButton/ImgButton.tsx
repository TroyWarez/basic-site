import { ReactNode } from "react";
import classes from "./ImgButton.module.css"
import { Link } from "react-router-dom";
interface ImageButtonProps {
    className?: string;
    imgPath: string;
    name?: ReactNode;
    altText: string;
    linkPath: string;
}
const ImgButton = ( {className, imgPath, name, altText, linkPath} : ImageButtonProps)  : JSX.Element => {
    return (
        <div className={`${classes.ImgButton} ${className ? className : ''}`} >
        <Link className={classes.Link} to={linkPath}>
        <img className={classes.Img} src={imgPath} alt={altText}/>
        </Link>
        <Link className={classes.Link} to={linkPath}>
        <p className={classes.p}><span>{name}</span></p>
        </Link>
        </div>
    );
};

export default ImgButton;