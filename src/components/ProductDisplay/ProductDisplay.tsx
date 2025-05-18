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
  const [cartDataMax, setCartDataMax] = useState([{}]);
  const [itemAmount, setItemAmount] = useState(1);

  const sku = queryParams.get('sku');
  let cartItemAmount = 0;
    let cartItemMax;
  let CurrencyAmount = 0;
  let CurrencySymbol = '';
  let CurrencySymbolType = '';
  cartData.forEach((cartData2) => {
           cartItemAmount += cartData2.quantityNumber;
           CurrencyAmount += (cartData2.displayCurrencyValue * cartData2.quantityNumber);
           CurrencySymbol = cartData2.displayCurrencyValueSymbol;
           CurrencySymbolType = cartData2.displayCurrencyValueType;
           cartItemMax = storeApiService.getSingleProductData(cartData2.sku.toString());

  const [cartCurrencyAmount, setCartCurrencyAmount] = useState(`${CurrencySymbolType}${CurrencySymbol}${CurrencyAmount}`);
  const [cartAmount, setCartAmount] = useState(cartItemAmount);
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
    <ImgButton className={`${Navclasses.cart} ${classes.ImgButton}`} imgPath={storefrontCartIcon} altText={"Cart"} name={"Cart"} linkPath="">
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
        <div className={classes.containerProductInfoCart}>
          <h1 className={classes.h1}>{cartItem.displayItemName} <p className={classes.h2model}>{`Model No: ${cartItem.sku}`}</p></h1>
          <div>
          <b className={classes.p}>{`${cartItem.displayCurrencyValueType}${cartItem.displayCurrencyValueSymbol}${cartItem.displayCurrencyValue}`}</b>
          <s hidden={(cartItem.displayCurrencySaleValue) ? false : true} className={classes.pDiscount}>{`${cartItem.displayCurrencyValueType}${cartItem.displayCurrencyValueSymbol}${cartItem.displayCurrencySaleValue}`}</s>
          </div>
          <div className={classes.containerCartItemTrash}>
          <div className={classes.itemAddTo}>
              <div className={`${classes.itemAmountControl} ${classes.itemCursor}`} onClick={(event) => {
                const currentValue = (event.currentTarget.nextElementSibling as HTMLParagraphElement).textContent;
                if(Number(currentValue) > 1)
                {
                  if(currentValue !== null){
                    const newValue = Number(currentValue) - 1;
                    ((event.currentTarget.nextElementSibling as HTMLParagraphElement).firstElementChild as HTMLParagraphElement).textContent = newValue.toFixed();
                        let CurrencyAmount = 0;
                        let CurrencySymbol = '';
                        let CurrencySymbolType = '';
                        cartData.forEach((cartDataItem) => {
                          if(cartDataItem.sku === cartItem.sku)
                          {
                            CurrencyAmount += (cartDataItem.displayCurrencyValue * (cartDataItem.quantityNumber - 1));
                            const index = cartData.findIndex((cartDataItem) => cartDataItem.sku === cartItem.sku);
                            if(index !== -1) 
                            {
                              const changedCartData = cartData;
                              changedCartData[index].quantityNumber = changedCartData[index].quantityNumber - 1;
                              setCartData(changedCartData);
                            }
                          }
                          else
                          {
                            CurrencyAmount += (cartDataItem.displayCurrencyValue * cartDataItem.quantityNumber);
                          }
                        CurrencySymbol = cartDataItem.displayCurrencyValueSymbol;
                        CurrencySymbolType = cartDataItem.displayCurrencyValueType;
                        });
                        setCartAmount(cartAmount - 1);
                        setCartCurrencyAmount(`${CurrencySymbolType}${CurrencySymbol}${CurrencyAmount}`);
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
                        let CurrencyAmount = 0;
                        let CurrencySymbol = '';
                        let CurrencySymbolType = '';
                        cartData.forEach((cartDataItem) => {
                          if(cartDataItem.sku === cartItem.sku)
                          {
                            CurrencyAmount += (cartDataItem.displayCurrencyValue * (cartDataItem.quantityNumber + 1));
                            const index = cartData.findIndex((cartDataItem) => cartDataItem.sku === cartItem.sku);
                            if(index !== -1) 
                            {
                              const changedCartData = cartData;
                              changedCartData[index].quantityNumber = changedCartData[index].quantityNumber + 1;
                              setCartData(changedCartData);
                            }
                          }
                          else
                          {
                            CurrencyAmount += (cartDataItem.displayCurrencyValue * cartDataItem.quantityNumber);
                          }
                        CurrencySymbol = cartDataItem.displayCurrencyValueSymbol;
                        CurrencySymbolType = cartDataItem.displayCurrencyValueType;
                        });
                        setCartAmount(cartAmount + 1);
                        setCartCurrencyAmount(`${CurrencySymbolType}${CurrencySymbol}${CurrencyAmount}`);
                  }
                }
              }}>
                <b>+</b>
              </div>
          </div>

          <img className={classes.trashImg} alt="Delete Icon" src={trashIcon} onClick={() => {
                const filteredArray = cartData.filter((cartDataItem) => cartDataItem.sku !== cartItem.sku);
                setCartData(filteredArray);
                let cartItemAmount2 = 0;
                let CurrencyAmount = 0;
                let CurrencySymbol = '';
                let CurrencySymbolType = '';
                filteredArray.forEach((cartData) => {
                        cartItemAmount2 += cartData.quantityNumber;
                        CurrencyAmount += (cartData.displayCurrencyValue * cartData.quantityNumber);
                        CurrencySymbol = cartData.displayCurrencyValueSymbol;
                        CurrencySymbolType = cartData.displayCurrencyValueType;
                        });
                setCartAmount(cartItemAmount2);
                setCartCurrencyAmount(`${CurrencySymbolType}${CurrencySymbol}${CurrencyAmount}`);
              }}/>
              </div>
        </div>

      </div>
        ))}
        </div>

      <div className={classes.containerCartInfo}>
        <div className={classes.containerCartItemTrash}>
          <b>{`Subtotal (${cartAmount} item${(cartAmount > 1) ? 's' : ''})`}</b>
          <b>{cartCurrencyAmount}</b>
        </div>
        <p>{'All discounts, shipping & taxes calculated at checkout'}</p>
        <Link to={'/checkout/cart'} className={`${classes.AddtoCart} ${classes.AltButtonInfo}`}><b>View cart & checkout</b></Link>
        <Link onClick={(event) => {
          if(event.currentTarget.parentElement?.parentElement?.parentElement)
          {
            event.currentTarget.parentElement.parentElement.parentElement.style.display = 'none';
          }
        }}
         onBlur={(event) => {
          if(event.currentTarget.parentElement?.parentElement?.parentElement)
          {
            event.currentTarget.parentElement.parentElement.parentElement.style = '';
          }
        }} to={window.location.href}  className={`${classes.AddtoCart} ${classes.AltButtonInfo} ${classes.AltButtonShopping}`} ><b>Continue shopping</b></Link>
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