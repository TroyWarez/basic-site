import RegionalInput from './RegionalInput';
const OrderForm = () => {
    return (
        <>
        <div id="stylized-shipping-form" className="shipping-form">
            <form action="" method="get">
            <h3 id="shipping-heading">Shipping Address</h3>
            <p>Please enter your shipping details.</p>
                <input type="text" name="name" id="firstname" placeholder="First Name" maxLength={50} autoFocus={true} required />

                <input type="text" name="name" id="lastname" placeholder="Last Name" maxLength={50} required />

                <input type="email" name="email" id="email" required placeholder="Email" maxLength={62}/>

                <input type="text" name="address" id="address" required placeholder="Address" maxLength={95}/>

                <input type="text" name="City" id="City" required placeholder="City" maxLength={35}/>

                <RegionalInput/>

                <input type="submit" id="submit" value="Submit Order" />
            </form>
        </div>
        </>
    );
};

export default OrderForm;