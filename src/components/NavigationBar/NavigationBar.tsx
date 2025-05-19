import classes from "./NavigationBar.module.css"
import ImgButton from "../ImgButton/ImgButton"
import storefrontIcon from "../../assets/icons/storefrontIcon.svg"
interface NavigationBarProps {
  cartItemAmount?: number;
  className?: string;
  isCentered?: boolean;
}
export const NavigationBar = ( { className, isCentered } : NavigationBarProps)  : JSX.Element => {
  return (
    <div className={`${classes.navbarcontainer} `}>
    <header className={`${classes.navbar} ${(className) ? className : ''} ${(isCentered) ? classes.centered : classes.noncentered}`}>
    <ImgButton imgPath={storefrontIcon} name={"Store"} altText={"Home"} linkPath="/"/>
    </header>
    </div>
  )
}

export default NavigationBar;