import classes from '../ProductShowcase/ProductShowcase.module.css'
import NavigationBar from '../NavigationBar/NavigationBar';
import storeApiService from '../../services/storeApiService';
import ProductItem from '../../models/ProductItem';
import DropdownContainer from '../DropdownContainer/DropdownContainer';
import { useState } from 'react';
const ProductShowcase = (): JSX.Element  => {
  const [products, setProducts] = useState(new Array<ProductItem>);
      if(products.length === 0) 
    {
  const productsHandler = storeApiService.getProductData();
  productsHandler.then((value) => {

      setProducts(value);

  })
      }
  return (
  <>
  <NavigationBar/>
  <h1 className={classes.h1}>Products</h1>
  <div>
        <h2 className={classes.h2}>Filters</h2>
        <p className={`${classes.h2} ${classes.TotalProducts}`}>{`(${products.length} Products)`}</p>
  </div>
  <div className={classes.ProductShowcaseContainer}>
    <div className={classes.ProductContainer}>
    <div className={classes.CheckboxesContainer}>
    <div>
    <DropdownContainer label='Catagory' collapsed={true}>
          <div className={classes.Product}>
    <input title='Brand' type='checkbox' id='Test'/>
    <label>Test</label>
        <input title='Brand' type='checkbox' id='Test'/>
    <label>Test</label>
        <input title='Brand' type='checkbox' id='Test'/>
    <label>Test</label>
    </div>
    </DropdownContainer>
    </div>
    
    </div>
    <div className={classes.Product}>
        {products.map((ProductItem) => (
        <div className={classes.ProductItem} key={ProductItem.sku}>
          <img alt='Product Image' className={classes.img} src={ProductItem.productImageBinData}></img>
          <b>{ProductItem.displayItemName}</b>
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
  </div>
  </>
  )
}

export default ProductShowcase;