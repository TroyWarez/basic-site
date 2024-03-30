import React from 'react';

const OrderForm = () => {
    return (
        <>
            <form action="" method="get" className="form-example">
                <input type="text" name="name" id="firstname" placeholder="First Name" maxLength={50} required />

                <input type="text" name="name" id="lastname" placeholder="Last Name" maxLength={50} required />

                <input type="email" name="email" id="email" required placeholder="Email" maxLength={62}/>

                <input type="text" name="address" id="address" required placeholder="Address" maxLength={95}/>

                <input type="text" name="City" id="City" required placeholder="City" maxLength={35}/>

                <input type="text" name="ZIP/Postal Code" id="ZIP/Postal Code" required placeholder="ZIP/Postal Code" maxLength={10}/>

                <input type="text" name="State/Province/Territory" id="State/Province/Territory" required placeholder="State/Province/Territory" maxLength={35}/>

                <input type="text" name="country" id="country" required placeholder="Country" maxLength={95}/>

                <input type="submit" id="submit" value="Submit Order" />
            </form>
        </>
    );
};

export default OrderForm;
  