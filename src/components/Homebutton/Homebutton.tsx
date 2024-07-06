import classes from "./Homebutton.module.css"
import { Link } from "react-router-dom";
const Homebutton = () => {
    return (
        <>
        <Link className={classes.Homebutton}to="/"><img src={"storefrontIcon.png"} alt="Home" width="64"/> Store</Link>
        </>
    );
};

export default Homebutton;