import classes from '../ProductShowcase/ProductShowcase.module.css'
import NavProductClasses from '../ProductDisplay/ProductDisplay.module.css'
import CartClasses from '../ShoppingCart/ShoppingCart.module.css'
import storeApiService from '../../services/storeApiService';
import ProductItem from '../../models/ProductItem';
import MinMax from '../../models/MinMax';
import DropdownContainer from '../DropdownContainer/DropdownContainer';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import SelectMenu from '../SelectMenu/SelectMenu';
import SelectMenuOption from '../../models/selectMenuOption';
import ImgButton from '../ImgButton/ImgButton';
import Navclasses from "../NavigationBar/NavigationBar.module.css"
import storefrontCartIcon from "../../assets/icons/storefronCartAltIcon.svg"
import storefrontIcon from "../../assets/icons/storefrontIcon.svg"
import trashIcon from "../../assets/icons/deleteIcon.svg"
import loginIcon from "../../assets/icons/LoginIcon.svg"
const ProductShowcase = (): JSX.Element  => {

  const [Savedproducts, setSavedProducts] = useState(new Array<ProductItem>);
  const [products, setProducts] = useState(new Array<ProductItem>);
  const [categories, setCategories] = useState(new Array<string>);
  const [filteredCategories, setFilteredCategories] = useState(new Array<string>);
  const [filteredPrices, setFilteredPrices] = useState(new Array<MinMax>);
  const [isBusy, setIsBusy] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [cartData, setCartData] = useState(storeApiService.getCartDatalocal());
  let cartItemAmount = 0;
  let CurrencyAmount = 0;
  let CurrencySymbol = '';
  let CurrencySymbolType = '';
  if(location.state && location.state['userId'] !== '')
  {
    const cartDataHandler = storeApiService.getUserCartData(location.state['userId']);
    
    cartDataHandler.then((value) => {
      if(cartData.length === 0){
      storeApiService.setCartDatalocal(value);
      setCartData(value);
        value.forEach((cartData2) => {
           cartItemAmount += cartData2.quantityNumber;
           CurrencyAmount += (cartData2.displayCurrencyValue * cartData2.quantityNumber);
           CurrencySymbol = cartData2.displayCurrencyValueSymbol;
           CurrencySymbolType = cartData2.displayCurrencyValueType;
          });
          setCartCurrencyAmount(`${CurrencySymbolType}${CurrencySymbol}${CurrencyAmount.toFixed(2)}`);
          setCartAmount(cartItemAmount);
        }
    })
    
  }
  else 
  {
    storeApiService.setCartDatalocal([]);
  }

    cartData.forEach((cartData2) => {
           cartItemAmount += cartData2.quantityNumber;
           CurrencyAmount += (cartData2.displayCurrencyValue * cartData2.quantityNumber);
           CurrencySymbol = cartData2.displayCurrencyValueSymbol;
           CurrencySymbolType = cartData2.displayCurrencyValueType;
          });
  const [cartCurrencyAmount, setCartCurrencyAmount] = useState(`${CurrencySymbolType}${CurrencySymbol}${CurrencyAmount.toFixed(2)}`);
  const [cartAmount, setCartAmount] = useState(cartItemAmount);
    const SortList: SelectMenuOption[] = [

            {value: "DATE", displayValue: 'By Date - Newest First'},
            {value: "PRICE_HIGH", displayValue: 'By Price - High to Low'},
            {value: "PRICE_LOW", displayValue: 'By Price - Low to High'},
            ];
  const filterCategories = ( product: ProductItem) => {
    let filterCheck = true;
    filteredCategories.forEach((Category) => {
      filterCheck = (product.categories.includes(Category));
      if(filterCheck === false)
        return filterCheck;
    });
        filteredPrices.forEach((Price) => {
          if(Price.max > Price.min){
          filterCheck = (product.displayCurrencyValue > Price.min && product.displayCurrencyValue < Price.max);
          }
      if(filterCheck === false)
        return filterCheck;
    });
    return filterCheck;
  }
      if(products.length === 0) 
    {
  const productsHandler = storeApiService.getProductData();
  productsHandler.then((value) => {
    value.forEach((Product) => {
      Product.categories.forEach((Category) => {
        if(!categories.includes(Category))
        {
          categories.push(Category);
        }
      })
    })
      setProducts(value);
      setCategories(categories);
      setSavedProducts(value);
  })
  }
  if((products.length === 0))
  {
    return (<>
        <title>Loading...</title>
          <div className={Navclasses.navbarcontainer}>
    <header className={`${Navclasses.navbar} ${Navclasses.noncentered}`}>

    <ImgButton imgPath={storefrontIcon} name={"Store"} altText={"Home"} linkPath="/" onclickHandler={(event) => {
            event.preventDefault();
            navigate("/", {state: { username: (location.state) ? location.state['username'] : '', userId: (location.state) ? location.state['userId'] : 0 }});
          }}/>

    <div className={NavProductClasses.LoginContainer}>
    {((location.state && location.state['username'] !== '')) ? <b className={NavProductClasses.AccountName}>{`Hello, ${location.state['username']}`}</b> : <ImgButton imgClassName={NavProductClasses.LoginImg} className={NavProductClasses.LoginDiv} imgPath={loginIcon} name={"Account"} altText={"Account"} linkPath="/login"/>}
    <ImgButton className={`${Navclasses.cart} ${NavProductClasses.ImgButton}`} imgPath={storefrontCartIcon} altText={"Cart"} name={"Cart"} linkPath="">
        <div className={NavProductClasses.MiniCartContainerAlt}>
        <p className={Navclasses.badge}>{cartAmount}</p>
        </div>
      {(cartData.length) ? 

      <div className={NavProductClasses.MiniCartContainer}>
        <div className={NavProductClasses.MiniCart}>
        <p>Congratulations! You've qualified for FREE shipping!</p>
        <div className={`${CartClasses.bluebar} ${NavProductClasses.pBluebar}`}/>
        <h2>Your Cart</h2>
        <div className={NavProductClasses.containerCart}>
        {cartData.map((cartItem) => (
        <div className={NavProductClasses.containerCartItem} key={cartItem.sku}>
        <img className={NavProductClasses.MiniCartImg} title='Product Image' src={`${window.origin}/${cartItem.productImageBinData}`}></img>
        <div className={NavProductClasses.containerProductInfoCart}>
          <h1 className={NavProductClasses.h1}>{cartItem.displayItemName} <p className={NavProductClasses.h2model}>{`Model No: ${cartItem.sku}`}</p></h1>
          <div>
          <b className={NavProductClasses.p}>{`${cartItem.displayCurrencyValueType}${cartItem.displayCurrencyValueSymbol}${cartItem.displayCurrencyValue}`}</b>
          <s hidden={(cartItem.displayCurrencySaleValue) ? false : true} className={NavProductClasses.pDiscount}>{`${cartItem.displayCurrencyValueType}${cartItem.displayCurrencyValueSymbol}${cartItem.displayCurrencySaleValue}`}</s>
          </div>
          <div className={NavProductClasses.containerCartItemTrash}>
          <div className={NavProductClasses.itemAddTo}>
              <div className={`${NavProductClasses.itemAmountControl} ${NavProductClasses.itemCursor}`} onClick={(event) => {
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
                              if(location.state && location.state['userId'] !== '')
                              {
                                const cartDataHandler = storeApiService.setUserCartData(location.state['userId'], changedCartData);
                                storeApiService.setCartDatalocal(changedCartData)
                                cartDataHandler.then((cartItem) => {
                                  console.log(cartItem);
                                })
                              }
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
                        setCartCurrencyAmount(`${CurrencySymbolType}${CurrencySymbol}${CurrencyAmount.toFixed(2)}`);
                  }
                }
              }}>
                <b>-</b>
              </div>
               <div className={`${NavProductClasses.itemAmountControl} ${NavProductClasses.itemWidth}`}>
                <b>{cartItem.quantityNumber}</b>
              </div>
              <button className={`${NavProductClasses.itemAmountControl} ${NavProductClasses.itemCursor} ${NavProductClasses.itemAmountControlPlus}`} disabled={isBusy}  onClick={async (event) => {
                const currentValue = (event.currentTarget.previousElementSibling as HTMLParagraphElement).textContent;
                if(Number(currentValue))
                {
                  if(currentValue !== null){
                    const newValue = Number(currentValue) + 1;
                    const textContent = (event.currentTarget.previousElementSibling as HTMLParagraphElement).firstElementChild as HTMLParagraphElement;
                    setIsBusy(true);
                      const foundProduct = await storeApiService.getSingleProductData(cartItem.sku.toString());
                    setIsBusy(false);
                      if(foundProduct && Number(currentValue) < foundProduct.stockAmount)
                        {
                    textContent.textContent = newValue.toFixed();
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
                              if(location.state && location.state['userId'] !== '')
                              {
                                const cartDataHandler = storeApiService.setUserCartData(location.state['userId'], changedCartData);
                                storeApiService.setCartDatalocal(changedCartData)
                                cartDataHandler.then((cartItem) => {
                                  console.log(cartItem);
                                })
                              }
                            }
                          }
                          else
                          {
                            CurrencyAmount += (cartDataItem.displayCurrencyValue * cartDataItem.quantityNumber);
                          }
                        CurrencySymbol = cartDataItem.displayCurrencyValueSymbol;
                        CurrencySymbolType = cartDataItem.displayCurrencyValueType;
                        });
                          setCartCurrencyAmount(`${CurrencySymbolType}${CurrencySymbol}${CurrencyAmount.toFixed(2)}`);
                          setCartAmount(cartAmount + 1);
                        }
                  }
                }
              }}>
                <b>+</b>
              </button>
          </div>

          <img className={NavProductClasses.trashImg} alt="Delete Icon" src={trashIcon} onClick={() => {
                const filteredArray = cartData.filter((cartDataItem) => cartDataItem.sku !== cartItem.sku);
                setCartData(filteredArray);
                if(location.state && location.state['userId'] !== '')
                {
                const cartDataHandler = storeApiService.setUserCartData(location.state['userId'], filteredArray);
                storeApiService.setCartDatalocal(filteredArray)
                cartDataHandler.then((cartItem) => {
                console.log(cartItem);
                })
              }
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
                setCartCurrencyAmount(`${CurrencySymbolType}${CurrencySymbol}${CurrencyAmount.toFixed(2)}`);
              }}/>
              </div>
        </div>

      </div>
        ))}
        </div>

      <div className={NavProductClasses.containerCartInfo}>
        <div className={NavProductClasses.containerCartItemTrash}>
          <b>{`Subtotal (${cartAmount} item${(cartAmount > 1) ? 's' : ''})`}</b>
          <b>{cartCurrencyAmount}</b>
        </div>
        <p>{'All discounts, shipping & taxes calculated at checkout'}</p>
        <Link to={'/checkout/cart'} className={`${NavProductClasses.AddtoCart} ${NavProductClasses.AltButtonInfo}`}><b>View cart & checkout</b></Link>
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
        }} to={window.location.href}  className={`${NavProductClasses.AddtoCart} ${NavProductClasses.AltButtonInfo} ${NavProductClasses.AltButtonShopping}`} ><b>Continue shopping</b></Link>
        </div>
        </div>
      </div>
       : 
      <div className={NavProductClasses.MiniCartContainer}>
        <b className={NavProductClasses.MiniCart}>Your shopping cart is empty</b>
      </div>}
    </ImgButton>
    </div>

    </header>
    </div>
        </>);
  }
  return (
  <>
    <div className={Navclasses.navbarcontainer}>
    <header className={`${Navclasses.navbar} ${Navclasses.noncentered}`}>
    <ImgButton imgPath={storefrontIcon} name={"Store"} altText={"Home"} linkPath="/" onclickHandler={(event) => {
            event.preventDefault();
            navigate("/", {state: { username: (location.state) ? location.state['username'] : '', userId: (location.state) ? location.state['userId'] : 0 }});
          }}/>

    <div className={NavProductClasses.LoginContainer}>
    {((location.state && location.state['username'] !== '')) ? <b className={NavProductClasses.AccountName}>{`Hello, ${location.state['username']}`}</b> : <ImgButton imgClassName={NavProductClasses.LoginImg} className={NavProductClasses.LoginDiv} imgPath={loginIcon} name={"Account"} altText={"Account"} linkPath="/login"/>}
    <ImgButton className={`${Navclasses.cart} ${NavProductClasses.ImgButton}`} imgPath={storefrontCartIcon} altText={"Cart"} name={"Cart"} linkPath="">
        <div className={NavProductClasses.MiniCartContainerAlt}>
        <p className={Navclasses.badge}>{cartAmount}</p>
        </div>
      {(cartData.length) ? 

      <div className={NavProductClasses.MiniCartContainer}>
        <div className={NavProductClasses.MiniCart}>
        <p>Congratulations! You've qualified for FREE shipping!</p>
        <div className={`${CartClasses.bluebar} ${NavProductClasses.pBluebar}`}/>
        <h2>Your Cart</h2>
        <div className={NavProductClasses.containerCart}>
        {cartData.map((cartItem) => (
        <div className={NavProductClasses.containerCartItem} key={cartItem.sku}>
        <img className={NavProductClasses.MiniCartImg} title='Product Image' src={`${window.origin}/${cartItem.productImageBinData}`}></img>
        <div className={NavProductClasses.containerProductInfoCart}>
          <h1 className={NavProductClasses.h1}>{cartItem.displayItemName} <p className={NavProductClasses.h2model}>{`Model No: ${cartItem.sku}`}</p></h1>
          <div>
          <b className={NavProductClasses.p}>{`${cartItem.displayCurrencyValueType}${cartItem.displayCurrencyValueSymbol}${cartItem.displayCurrencyValue}`}</b>
          <s hidden={(cartItem.displayCurrencySaleValue) ? false : true} className={NavProductClasses.pDiscount}>{`${cartItem.displayCurrencyValueType}${cartItem.displayCurrencyValueSymbol}${cartItem.displayCurrencySaleValue}`}</s>
          </div>
          <div className={NavProductClasses.containerCartItemTrash}>
          <div className={NavProductClasses.itemAddTo}>
              <div className={`${NavProductClasses.itemAmountControl} ${NavProductClasses.itemCursor}`} onClick={(event) => {
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
                            if(location.state && location.state['userId'] !== '')
                              {
                                const cartDataHandler = storeApiService.setUserCartData(location.state['userId'], changedCartData);
                                storeApiService.setCartDatalocal(changedCartData)
                                cartDataHandler.then((cartItem) => {
                                console.log(cartItem);
                                })
                             }
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
                        setCartCurrencyAmount(`${CurrencySymbolType}${CurrencySymbol}${CurrencyAmount.toFixed(2)}`);
                  }
                }
              }}>
                <b>-</b>
              </div>
               <div className={`${NavProductClasses.itemAmountControl} ${NavProductClasses.itemWidth}`}>
                <b>{cartItem.quantityNumber}</b>
              </div>
              <button className={`${NavProductClasses.itemAmountControl} ${NavProductClasses.itemCursor} ${NavProductClasses.itemAmountControlPlus}`} disabled={isBusy}  onClick={async (event) => {
                const currentValue = (event.currentTarget.previousElementSibling as HTMLParagraphElement).textContent;
                if(Number(currentValue))
                {
                  if(currentValue !== null){
                    const newValue = Number(currentValue) + 1;
                    const textContent = (event.currentTarget.previousElementSibling as HTMLParagraphElement).firstElementChild as HTMLParagraphElement;
                    setIsBusy(true);
                      const foundProduct = await storeApiService.getSingleProductData(cartItem.sku.toString());
                    setIsBusy(false);
                      if(foundProduct && Number(currentValue) < foundProduct.stockAmount)
                        {
                    textContent.textContent = newValue.toFixed();
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
                              if(location.state && location.state['userId'] !== '')
                              {
                                const cartDataHandler = storeApiService.setUserCartData(location.state['userId'], changedCartData);
                                storeApiService.setCartDatalocal(changedCartData)
                                cartDataHandler.then((cartItem) => {
                                console.log(cartItem);
                                })
                             }
                            }
                          }
                          else
                          {
                            CurrencyAmount += (cartDataItem.displayCurrencyValue * cartDataItem.quantityNumber);
                          }
                        CurrencySymbol = cartDataItem.displayCurrencyValueSymbol;
                        CurrencySymbolType = cartDataItem.displayCurrencyValueType;
                        });
                          setCartCurrencyAmount(`${CurrencySymbolType}${CurrencySymbol}${CurrencyAmount.toFixed(2)}`);
                          setCartAmount(cartAmount + 1);
                        }
                  }
                }
              }}>
                <b>+</b>
              </button>
          </div>

          <img className={NavProductClasses.trashImg} alt="Delete Icon" src={trashIcon} onClick={() => {
                const filteredArray = cartData.filter((cartDataItem) => cartDataItem.sku !== cartItem.sku);
                setCartData(filteredArray);
                if(location.state && location.state['userId'] !== '')
                {
                const cartDataHandler = storeApiService.setUserCartData(location.state['userId'], filteredArray);
                storeApiService.setCartDatalocal(filteredArray)
                cartDataHandler.then((cartItem) => {
                console.log(cartItem);
                })
                }
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
                setCartCurrencyAmount(`${CurrencySymbolType}${CurrencySymbol}${CurrencyAmount.toFixed(2)}`);
              }}/>
              </div>
        </div>

      </div>
        ))}
        </div>

      <div className={NavProductClasses.containerCartInfo}>
        <div className={NavProductClasses.containerCartItemTrash}>
          <b>{`Subtotal (${cartAmount} item${(cartAmount > 1) ? 's' : ''})`}</b>
          <b>{cartCurrencyAmount}</b>
        </div>
        <p>{'All discounts, shipping & taxes calculated at checkout'}</p>
        <Link to={'/checkout/cart'} className={`${NavProductClasses.AddtoCart} ${NavProductClasses.AltButtonInfo}`}><b>View cart & checkout</b></Link>
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
        }} to={window.location.href}  className={`${NavProductClasses.AddtoCart} ${NavProductClasses.AltButtonInfo} ${NavProductClasses.AltButtonShopping}`} ><b>Continue shopping</b></Link>
        </div>
        </div>
      </div>
       : 
      <div className={NavProductClasses.MiniCartContainer}>
        <b className={NavProductClasses.MiniCart}>Your shopping cart is empty</b>
      </div>}
    </ImgButton>
    </div>

    </header>
    </div>
  <h1 className={classes.h1}>Products</h1>
  <div className={classes.filterContainer}>
    <div>
        <h2 className={classes.h2}>Filters</h2>
        <p className={`${classes.h2} ${classes.TotalProducts}`}>{`(${products.filter(filterCategories).length} Product${(products.filter(filterCategories).length === 1) ? '' : 's'})`}</p>
    </div>
                <SelectMenu className={classes.selectInput} options={SortList.map((sort) => ({
                  value: sort.value,
                  displayValue: sort.displayValue,
                  }))} onChange={(selectedOption) => {
                    switch(selectedOption.currentTarget.value)
                    {
                      case 'DATE': {
                        const newProducts = [...products];
                        setProducts(newProducts.sort((a, b) => (new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())));
                        setSavedProducts(newProducts);
                        break;
                      }
                      case 'PRICE_HIGH': {
                        const newProducts = [...products];
                        setProducts(newProducts.sort((a, b) => (b.displayCurrencyValue - a.displayCurrencyValue)));
                        setSavedProducts(newProducts);
                        break;
                      }
                       case 'PRICE_LOW': {
                        const newProducts = [...products];
                        setProducts(newProducts.sort((a, b) => (a.displayCurrencyValue - b.displayCurrencyValue)));
                        setSavedProducts(newProducts);
                        break;
                      }
                    }
                  }} name="sortSelect" aria-label="Sort method" label="" placeholder="Sort By" title="Sort menu, please select which way to sort the product page."/>
  </div>
    <div className={classes.ProductContainer}>
    <div className={classes.CheckboxesContainer}>
    <div>
    <DropdownContainer label='Category' collapsed={false}>

      {categories.map((Category) => (
        <div key={Category} hidden={(products.filter((Product) => (Product.categories.includes(Category))).length === 0)}>
          <input title={`Category: ${Category}`} type='checkbox' id={Category} name={Category} className={classes.Categorybox}
          onClick={(event) => {
            if(event.currentTarget.checked && !filteredCategories.includes(event.currentTarget.name)) {
              filteredCategories.push(event.currentTarget.name);
               setProducts(products.filter(filterCategories));
            }
            else if (!event.currentTarget.checked)
            {
              const index = filteredCategories.indexOf(event.currentTarget.name);
                if (index > -1) {
                filteredCategories.splice(index, 1);
                }
                setProducts(Savedproducts.filter(filterCategories));
            }
               setFilteredCategories(filteredCategories);
          }}/>
          <label>{`${Category} (${products.filter((Product) => (Product.categories.includes(Category))).length})`}</label>
        </div>
      ))}

    </DropdownContainer>

        <DropdownContainer label='Price' collapsed={false}>

        <div hidden={(products.filter((Product) => (Product.displayCurrencyValue < 99.99)).length === 0)}>
          <input type='checkbox' className={classes.Categorybox}
          onClick={(event) => {
            if(event.currentTarget.checked && !filteredPrices.includes({min: 0, max: 99.99})) {
              filteredPrices.push({min: 0, max: 99.99});
              setProducts(products.filter((Product) => (Product.displayCurrencyValue < 99.99)));
            }
            else if (!event.currentTarget.checked)
            {
              const index = filteredPrices.findIndex((price) => {return(price.min === 0 && price.max === 99.99)})
                if (index > -1) {
                filteredPrices.splice(index, 1);
                }
                setProducts(Savedproducts);
            }
               setFilteredPrices(filteredPrices);
          }}/>
          <label>{`< CA$99.99 (${products.filter((Product) => (Product.displayCurrencyValue < 99.99)).length})`}</label>
        </div>

        <div hidden={(products.filter((Product) => (Product.displayCurrencyValue > 99.99 && Product.displayCurrencyValue < 299.99)).length === 0)}>
          <input type='checkbox' className={classes.Categorybox}
          onClick={(event) => {
            if(event.currentTarget.checked && !filteredPrices.includes({min: 99.99, max: 299.99})) {
              filteredPrices.push({min: 99.99, max: 299.99});
              setProducts(products.filter((Product) => (Product.displayCurrencyValue > 99.99 && Product.displayCurrencyValue < 299.99)));
            }
            else if (!event.currentTarget.checked)
            {
              const index = filteredPrices.findIndex((price) => {return(price.min === 99.99 && price.max === 299.99)})
                if (index > -1) {
                filteredPrices.splice(index, 1);
                }
                setProducts(Savedproducts);
            }
               setFilteredPrices(filteredPrices);
          }}/>
          <label>{`CA$100 - CA$300 (${products.filter((Product) => (Product.displayCurrencyValue > 99.99 && Product.displayCurrencyValue < 299.99)).length})`}</label>
        </div>

        <div hidden={(products.filter((Product) => (Product.displayCurrencyValue > 299.99) && Product.displayCurrencyValue < 500).length === 0)}>
          <input type='checkbox' className={classes.Categorybox}
          onClick={(event) => {
            if(event.currentTarget.checked && !filteredPrices.includes({min: 299.99, max: 500})) {
              filteredPrices.push({min: 299.99, max: 500});
              setProducts(products.filter((Product) => (Product.displayCurrencyValue > 299.99 && Product.displayCurrencyValue < 500)));
            }
            else if (!event.currentTarget.checked)
            {
              const index = filteredPrices.findIndex((price) => {return(price.min === 299.99 && price.max === 500)})
                if (index > -1) {
                filteredPrices.splice(index, 1);
                }
                setProducts(Savedproducts);
            }
               setFilteredPrices(filteredPrices);
          }}/>
          <label>{`CA$300 - CA$500 (${products.filter((Product) => (Product.displayCurrencyValue > 299.99) && Product.displayCurrencyValue < 500).length})`}</label>
        </div>
    </DropdownContainer>
    </div>
    
    </div>
    <div className={classes.Product}>
        {products.filter(filterCategories).map((ProductItem) => (

        <div className={classes.ProductItem} key={ProductItem.sku}>
          <Link to={`products/?sku=${ProductItem.sku}`} className={classes.ProductLink} onClick={(event) => {
            event.preventDefault();
            navigate(`products/?sku=${ProductItem.sku}`, {state: { username: (location.state) ? location.state['username'] : '', userId: (location.state) ? location.state['userId'] : 0 }});
          }}>
          <img alt='Product Image' className={classes.img} src={ProductItem.productImageBinData}></img>
          <b className={classes.ProductB}>{ProductItem.displayItemName}</b>
          </Link>
          <div className={classes.ProductPriceContainer}>
            <p className={classes.from}>From: </p>
            <b className={classes.ProductPrice}>{`${ProductItem.displayCurrencyValueType}${ProductItem.displayCurrencyValueSymbol}${ProductItem.displayCurrencyValue}`}</b>
          </div>
        <div className={`${classes.ProductSalePriceContainer}${(ProductItem.displayCurrencySaleValue > 0) ? '' : classes.displayNone}`} hidden={(ProductItem.displayCurrencySaleValue > 0) ? false : true}>
            <p className={`${classes.from} ${classes.sale}`}>From: </p>
            <s className={`${classes.ProductPrice} ${classes.sale}`}>{`${ProductItem.displayCurrencyValueType}${ProductItem.displayCurrencyValueSymbol}${ProductItem.displayCurrencySaleValue}`}</s>
            <b>{((ProductItem.displayCurrencyValue / ProductItem.displayCurrencySaleValue) * 100).toFixed(0)}% off</b>
          </div>
        </div>
        ))}
    </div>
  </div>
  </>
  )
}

export default ProductShowcase;