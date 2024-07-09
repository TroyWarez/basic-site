import classes from "./Homebutton.module.css"
import { Link } from "react-router-dom";
const Homebutton = () => {
    return (
        <>
        <div>
        <Link className={classes.button} to="/">
        <img src={"storefrontIcon.png"} alt="Home" width="64"/>
        <p>Store</p>
        </Link>
        </div>
        </>
    );
};

export default Homebutton;