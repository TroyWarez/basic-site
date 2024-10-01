import { ReactNode } from "react";
import classes from "./ImgButton.module.css"
import { Link } from "react-router-dom";
interface ImageButtonProps {
    className?: string;
    imgPath: string;
    name?: ReactNode;
}
const ImgButton = ( {className, imgPath, name} : ImageButtonProps)  : JSX.Element => {
    return (
        <div className={classes.button}>
        <Link to="/">
        <img className={`${classes.img} ${className}`} src={imgPath} alt="Home"/>
        <p>{name}</p>
        </Link>
        </div>
    );
};

export default ImgButton;