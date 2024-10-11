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
        <div className={classes.button}>
        <Link to={linkPath}>
        <img className={`${classes.img} ${className}`} src={imgPath} alt={altText}/>
        <p>{name}</p>
        </Link>
        </div>
    );
};

export default ImgButton;