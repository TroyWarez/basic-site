import classes from "./NavigationBar.module.css"
import ImgButton from "../ImgButton/ImgButton"
import storefrontIcon from "../../assets/icons/storefrontIcon.svg"
import { useNavigate, useLocation } from "react-router-dom";
interface NavigationBarProps {
  cartItemAmount?: number;
  className?: string;
  isCentered?: boolean;
}
export const NavigationBar = ( { className, isCentered } : NavigationBarProps)  : JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={`${classes.navbarcontainer} `}>
    <header className={`${classes.navbar} ${(className) ? className : ''} ${(isCentered) ? classes.centered : classes.noncentered}`}>
    <ImgButton imgPath={storefrontIcon} name={"Store"} altText={"Home"} linkPath="/" onclickHandler={(event) => {
            event.preventDefault();
            navigate("/", {state: { username: (location.state) ? location.state['username'] : '', userId: (location.state) ? location.state['userId'] : 0 }});
          }}/>
    </header>
    </div>
  )
}

export default NavigationBar;