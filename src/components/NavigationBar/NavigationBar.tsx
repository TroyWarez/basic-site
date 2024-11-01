import classes from "./NavigationBar.module.css"
import ImgButton from "../ImgButton/ImgButton"
export const NavigationBar = ()  : JSX.Element => {
  return (
    <div className={classes.navbar}>
    <ImgButton imgPath={"storefrontIcon.png"} name={"Store"} altText={"Home"} linkPath="/"/>
    </div>
  )
}
export default NavigationBar