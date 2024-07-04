import RegionalInput from '../RegionalInput/RegionalInput'
import classes from "./OrderForm.module.css"
const OrderForm = () => {
    return (
        <>
        <div className={classes.shippingform}>
            <form action="" method="get">
            <h3 className={classes.shippingheading}>Shipping Address</h3>
            <p>Please enter your shipping details.</p>
                <input className={classes.shippinginput} type="text" name="name" id="firstname" placeholder="First Name" maxLength={50} autoFocus={true} required />

                <input className={classes.shippinginput} type="text" name="name" id="lastname" placeholder="Last Name" maxLength={50} required />

                <input className={classes.shippinginput} type="email" name="email" id="email" required placeholder="Email" maxLength={62}/>

                <input className={classes.shippinginput} type="text" name="address" id="address" required placeholder="Address" maxLength={95}/>

                <input className={classes.shippinginput} type="text" name="City" id="City" required placeholder="City" maxLength={35}/>

                <RegionalInput/>

                <input type="submit" id="submit" value="Submit Order" />
            </form>
        </div>
        </>
    );
};

export default OrderForm;