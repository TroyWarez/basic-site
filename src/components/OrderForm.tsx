import React from 'react';

const OrderForm = () => {
    return (
        <>
            <form action="" method="get" className="form-example">
                <input type="text" name="name" id="firstname" placeholder="First Name" required />
                <input type="text" name="name" id="lastname" placeholder="Last Name" required />
                <input type="email" name="email" id="email" required placeholder="Email"/>
                <input type="text" name="name" id="address" required placeholder="Address"/>
                <input type="text" name="name" id="country" required placeholder="Country"/>
                <input type="text" name="name" id="ZIP Code" required placeholder="ZIP Code"/>
                <input type="text" name="name" id="City" required placeholder="City"/>
                <input type="text" name="name" id="State" required placeholder="State"/>
                <input type="submit" id="submit" value="Submit Order" />
            </form>
        </>
    );
};

export default OrderForm;
  