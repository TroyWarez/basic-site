import classes from './ProductDisplay.module.css'
import CartClasses from '../ShoppingCart/ShoppingCart.module.css'
import storeApiService from '../../services/storeApiService';
import ProductItem from '../../models/ProductItem';
import DropdownContainer from '../DropdownContainer/DropdownContainer';
import { useSearchParams, Link } from "react-router-dom";
import { useState } from 'react';
import ImgButton from '../ImgButton/ImgButton';
import Navclasses from "../NavigationBar/NavigationBar.module.css"
import storefrontCartIcon from "../../assets/icons/storefronCartAltIcon.svg"
import storefrontIcon from "../../assets/icons/storefrontIcon.svg"
import trashIcon from "../../assets/icons/deleteIcon.svg"
import CartItem from '../../models/CartItem';
interface ProductDisplayProps {
    className?: string;
}
const ProductDisplay = ( {className} : ProductDisplayProps) : JSX.Element => {
  const [queryParams, setQueryParams] = useSearchParams();
  const [product, setProduct] = useState<ProductItem>();
  const [maxStock, setMaxStock] = useState(1);
  const [cartData, setCartData] = useState(storeApiService.getCartDatalocal());
  const [cartAmount, setCartAmount] = useState(cartData.length);

  const [itemAmount, setItemAmount] = useState(1);
  const sku = queryParams.get('sku');
  if(queryParams.size === 1 && sku !== null)
  {
    const productDataHandler = storeApiService.getSingleProductData(sku);
    productDataHandler.then((Product) => {
      if(Product?.sku !== product?.sku)
      {
        if(Product){
        setProduct(Product);
        setMaxStock(Product.stockAmount);
        }
      }
    })
    if(product?.displayItemName === '')
    {
      return(
        <>
        <title>Loading...</title>
            <div className={Navclasses.navbarcontainer}>
    <header className={`${Navclasses.navbar} ${Navclasses.noncentered}`}>

    <ImgButton imgPath={storefrontIcon} name={"Store"} altText={"Home"} linkPath="/"/>
    <ImgButton className={`${Navclasses.cart} ${classes.ImgButton}`} imgPath={storefrontCartIcon} altText={"Cart"} linkPath="">
        <div className={classes.MiniCartContainerAlt}>
        <p className={Navclasses.badge}>0</p>
        </div>
      <div className={classes.MiniCartContainer}>
        <b className={classes.MiniCart}>Your shopping cart is empty</b>
      </div>
      </ImgButton>

    </header>
    </div>
        </>
      );
    }
    if (product) {
    return (
      <>
    <title>{`${product?.displayItemName} | Store`}</title>

    <div className={Navclasses.navbarcontainer}>
    <header className={`${Navclasses.navbar} ${Navclasses.noncentered}`}>

    <ImgButton imgPath={storefrontIcon} name={"Store"} altText={"Home"} linkPath="/"/>
    <ImgButton className={`${Navclasses.cart} ${classes.ImgButton}`} imgPath={storefrontCartIcon} altText={"Cart"} linkPath="">
        <div className={classes.MiniCartContainerAlt}>
        <p className={Navclasses.badge}>{cartAmount}</p>
        </div>
      {(cartData.length) ? 

      <div className={classes.MiniCartContainer}>
        <div className={classes.MiniCart}>
        <p>Congratulations! You've qualified for FREE shipping!</p>
        <div className={`${CartClasses.bluebar} ${classes.pBluebar}`}/>
        <h2>Your Cart</h2>
        <div className={classes.containerCart}>
        {cartData.map((cartItem) => (
        <div className={classes.containerCartItem} key={cartItem.sku}>
        <img className={classes.MiniCartImg} title='Product Image' src={`${window.origin}/${cartItem.productImageBinData}`}></img>
        <div className={classes.containerProductInfo}>
          <h1 className={classes.h1}>{cartItem.displayItemName} <p className={classes.h2model}>{`Model No: ${cartItem.sku}`}</p></h1>
          <div>
          <b className={classes.p}>{`${product?.displayCurrencyValueType}${product?.displayCurrencyValueSymbol}${product?.displayCurrencyValue}`}</b>
          <s hidden={(product?.displayCurrencySaleValue) ? false : true} className={classes.pDiscount}>{`${product?.displayCurrencyValueType}${product?.displayCurrencyValueSymbol}${product?.displayCurrencySaleValue}`}</s>
          </div>
          <div className={classes.itemAddTo}>
              <div className={`${classes.itemAmountControl} ${classes.itemCursor}`} onClick={(event) => {
                const currentValue = (event.currentTarget.nextElementSibling as HTMLParagraphElement).textContent;
                if(Number(currentValue) > 1)
                {
                  if(currentValue !== null){
                    const newValue = Number(currentValue) - 1;
                    ((event.currentTarget.nextElementSibling as HTMLParagraphElement).firstElementChild as HTMLParagraphElement).textContent = newValue.toFixed();
                  }
                }
              }}>
                <b>-</b>
              </div>
               <div className={`${classes.itemAmountControl} ${classes.itemWidth}`}>
                <b>{cartItem.quantityNumber}</b>
              </div>
              <div className={`${classes.itemAmountControl} ${classes.itemCursor}`} onClick={(event) => {
                const currentValue = (event.currentTarget.previousElementSibling as HTMLParagraphElement).textContent;
                if(Number(currentValue) < 99)
                {
                  if(currentValue !== null){
                    const newValue = Number(currentValue) + 1;
                    ((event.currentTarget.previousElementSibling as HTMLParagraphElement).firstElementChild as HTMLParagraphElement).textContent = newValue.toFixed();
                  }
                }
              }}>
                <b>+</b>
              </div>
              <img alt="Delete Icon" src={trashIcon} onClick={(event) => {
                console.log('test');
              }}/>
          </div>
        </div>

      </div>
        ))}
        </div>
        </div>
      </div>
       : 
      <div className={classes.MiniCartContainer}>
        <b className={classes.MiniCart}>Your shopping cart is empty</b>
      </div>}
      </ImgButton>

    </header>
    </div>

      <div className={`${classes.container} ${(className) ? className : ''}`}>
        <img className={classes.ProductImg} title='Product Image' src={`${window.origin}/${product?.productImageBinData}`}></img>
        <div className={classes.containerProductInfo}>
          
          <h1>{product?.displayItemName} <p className={classes.h2model}>{`Model No: ${product?.sku}`}</p><p className={classes.h2model}>{product?.displayItemDescription}</p></h1>
          <div>
          <b className={classes.p}>{`${product?.displayCurrencyValueType}${product?.displayCurrencyValueSymbol}${product?.displayCurrencyValue}`}</b>
          <s hidden={(product?.displayCurrencySaleValue) ? false : true} className={classes.pDiscount}>{`${product?.displayCurrencyValueType}${product?.displayCurrencyValueSymbol}${product?.displayCurrencySaleValue}`}</s>
          <b hidden={(product?.displayCurrencySaleValue) ? false : true}>{`${((product?.displayCurrencyValue / product?.displayCurrencySaleValue) * 100)?.toFixed(0)}% off`}</b>
          </div>
          <p className={`${(product.stockAmount > 10) ? classes.instock : `${classes.instock} ${classes.pSaleRed}` }`}>{`${(product?.stockAmount > 10) ? 'In stock' : `${(product?.stockAmount && product?.stockAmount < 10) ? `Only ${product.stockAmount} items left in stock!` : '' }`}`}</p>
          <div className={classes.itemAddToCartContainer}>
              <div className={`${classes.itemAmountControl} ${classes.itemCursor}`} onClick={() => {
                if(itemAmount > 1)
                {
                  setItemAmount(itemAmount - 1)
                }
              }}>
                <b>-</b>
              </div>
               <div className={`${classes.itemAmountControl} ${classes.itemWidth}`}>
                <b>{itemAmount}</b>
              </div>
              <div className={`${classes.itemAmountControl} ${classes.itemCursor}`} onClick={() => {
                if(itemAmount < maxStock)
                {
                  setItemAmount(itemAmount + 1)
                }
              }}>
                <b>+</b>
              </div>
          <button className={classes.AddtoCart}><b>Add To Cart</b></button>
          </div>
        </div>
      </div>
      </>
    );
  }}
  return (
    <>
    <title>Loading</title>
    </>
  );
}
export default ProductDisplay;