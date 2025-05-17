import classes from './ProductDisplay.module.css'
import CartClasses from '../ShoppingCart/ShoppingCart.module.css'
import storeApiService from '../../services/storeApiService';
import ProductItem from '../../models/ProductItem';
import DropdownContainer from '../DropdownContainer/DropdownContainer';
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
      if(Product?.sku !== product?.sku)
      {
        setProduct(Product);
      }
    })
    if(product?.displayItemName === '')
    {
      return(
        <>
        <title>Loading...</title>
        </>
      );
    }
    return (
      <>
      <title>{`${product?.displayItemName} | Store`}</title>
      <div className={`${classes.container} ${(className) ? className : ''}`}>
        <img className={classes.ProductImg} title='Product Image' src={`${window.origin}/${product?.productImageBinData}`}></img>
        <div className={classes.containerProductInfo}>
          <h1>{product?.displayItemName}</h1>
          <p>{`Model No: ${product?.sku}`}</p>
          <p>{product?.displayItemDescription}</p>
          <p>{`${product?.displayCurrencyValueType}${product?.displayCurrencyValueSymbol}${product?.displayCurrencyValue}`}</p>
          <p>{`${(product?.stockAmount) ? 'In stock' : `${(product?.stockAmount && product?.stockAmount < 10) ? `Only ${product.stockAmount} items left in stock!` : '' }`}`}</p>
        </div>
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