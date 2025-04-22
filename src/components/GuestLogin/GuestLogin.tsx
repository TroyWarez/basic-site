import classes from "./GuestLogin.module.css"
import Cartclasses from "../ShoppingCart/ShoppingCart.module.css"
const GuestLogin = ()  : JSX.Element => {
  return (
    <div className={classes.container}>
        <div className={classes.signInContainer}>
            <p className={`${classes.p} ${classes.p2}`}><b>Sign in to your account</b></p>
            <p className={classes.p2}>Sign in to check out faster</p>
            <input className={`${Cartclasses.buttonSignIn} ${classes.button}`} type="button" placeholder="Sign In" title="Sign In" value="Sign In" />
            <div className={classes.OrHorizontalContainer}>
                <div className={classes.accent}></div>
                <p className={classes.OrP}><b>OR</b></p>
                <div className={classes.accent}></div>
            </div>
            <p className={`${classes.p} ${classes.p2}`}><b>Don't have an account?</b></p>
            <p className={classes.p2}>Create one today and enjoy:</p>
            <div className={classes.BenfitsContainer}>
                
            <div className={classes.CheckmarkContainer}>
                <p className={classes.Checkmark}>✔</p><p className={`${classes.p2} ${classes.p3}`}>Faster checkout</p>
            </div>
            <div className={classes.CheckmarkContainer}>
                <p className={classes.Checkmark}>✔</p><p className={`${classes.p2} ${classes.p3}`}>Easy order tracking</p>
            </div>
            <div className={classes.CheckmarkContainer}>
                <p className={classes.Checkmark}>✔</p><p className={`${classes.p2} ${classes.p3}`}>Exclusive discounts</p>
            </div>

            <p className={classes.p2}>Your journey starts here, create your account in seconds and elevate your experience.</p>

            <input className={`${Cartclasses.buttonSignIn} ${Cartclasses.buttonColored} ${classes.buttonClear}`} type="button" placeholder="Create your account" title="Create your account" value="Create your account" />
            </div>
        </div>
    </div>
  )
}

export default GuestLogin