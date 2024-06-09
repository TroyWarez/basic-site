import React from 'react';
import RegionalInput from './RegionalInput';
const OrderForm = () => {
    return (
        <>
            <h1>Shipping Address</h1>
            <p>Please enter your shipping details.</p>
            <form action="" method="get" className="shippingForm">
                <label htmlFor="firstname"> First Name </label>
                <input type="text" name="name" id="firstname" maxLength={50} autoFocus={true} required />

                <label htmlFor="lastname"> Last Name </label>
                <input type="text" name="name" id="lastname" maxLength={50} required />

                <label htmlFor="email"> Email </label>
                <input type="email" name="email" id="email" required maxLength={62}/>

                <label htmlFor="address"> Address </label>
                <input type="text" name="address" id="address" required maxLength={95}/>

                <label htmlFor="City"> City </label>
                <input type="text" name="City" id="City" required maxLength={35}/>

                <RegionalInput/>

                <input type="submit" id="submit" value="Submit Order" />
            </form>
        </>
    );
};

export default OrderForm;