import classes from './ProductDisplay.module.css'
import CartClasses from '../ShoppingCart/ShoppingCart.module.css'
import storeApiService from '../../services/storeApiService';
import ProductItem from '../../models/ProductItem';
import { useSearchParams, Link } from "react-router-dom";
import { useState } from 'react';
interface ProductDisplayProps {
    className?: string;
}
const ProductDisplay = ( {className} : ProductDisplayProps) : JSX.Element => {
  const [queryParams, setQueryParams] = useSearchParams();
  const [product, setProduct] = useState<ProductItem>();
  const sku = queryParams.get('sku');
  if(queryParams.size === 1 && sku !== null)
  {
    const productDataHandler = storeApiService.getSingleProductData(sku);
    productDataHandler.then((Product) => {
      setProduct(Product);
    })
    if(product?.displayItemName === '')
    {
      return(
        <>
        <title>{'Loading...'}</title>
        </>
      );
    }
    return (
      <>
      <title>{product?.displayItemName}</title>
      <div className={`${classes.container} ${(className) ? className : ''}`}>
          <h2  className={classes.h2}>{`Thanks for your order, ${(queryParams.get('firstName') !== null) ? queryParams.get('firstName') : 'First name not found.'}`}</h2>
          <p className={classes.p}>{`Here's your order number: #${(queryParams.get('OrderNumber') !== null) ? queryParams.get('OrderNumber') : 'Order number not found.'}. We can't wait for you to see what's in store.`}</p>
          <p className={classes.p}>{`A confirmation email was sent to your email address: ${(queryParams.get('email') !== null) ? queryParams.get('email') : 'Email not found.'}`}</p>
          <br/>
          <p className={classes.p}>Once your package ships, we'll send you a tracking number.</p>
          <br/>
          <p className={classes.p}>{`${queryParams.get('deliveryDate')}`}</p>
          <p>Have a question about your order? <Link to='/' className={CartClasses.AltText} >Send us a message</Link> and a Store team member will be in touch.</p>
      </div>
      </>
    );
  }
  return (
    <>
    <title>Failed to confirm order</title>
    <div className={`${classes.container} ${(className) ? className : ''}`}>
        <h2>Failed to order your items.</h2>
        <p className={classes.p}>We're sorry, but the Store was not able to place your order at this time</p>
        <p className={classes.p}> You were not charged</p>
        <p className={classes.p}>Please try again later.</p>
        <Link to='/' className={CartClasses.AltText}>Go to the home page.</Link>
    </div>
    </>
  );
}
export default ProductDisplay;