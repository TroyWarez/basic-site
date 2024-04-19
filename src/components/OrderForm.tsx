import React from 'react';

const OrderForm = () => {
    return (
        <>
            <h1>Shipping</h1>
            <p>Please enter your shipping details.</p>
            <form action="" method="get" className="form-example">
                <input type="text" name="name" id="firstname" placeholder="First Name" maxLength={50} autoFocus={true} required />

                <input type="text" name="name" id="lastname" placeholder="Last Name" maxLength={50} required />

                <input type="email" name="email" id="email" required placeholder="Email" maxLength={62}/>

                <input type="text" name="address" id="address" required placeholder="Address" maxLength={95}/>

                <input type="text" name="City" id="City" required placeholder="City" maxLength={35}/>

                <input list="country" name="country" placeholder="Country" required />

                <input type="text" name="ZIP Code" id="ZIP Code" required placeholder="ZIP Code" maxLength={10}/>

                <input list="" name="state" placeholder="State" required/>

                <input type="submit" id="submit" value="Submit Order" />
            </form>
        </>
    );
};

export default OrderForm;