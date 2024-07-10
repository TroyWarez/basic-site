import classes from "./Homebutton.module.css"
import { Link } from "react-router-dom";
const Homebutton = () => {
    return (
        <div className={classes.button}>
        <Link to="/">
        <img className={classes.img} src={"storefrontIcon.png"} alt="Home" width="64"/>
        <p>Store</p>
        </Link>
        </div>
    );
};

export default Homebutton;