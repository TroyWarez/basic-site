import classes from '../ProductShowcase/ProductShowcase.module.css'
import NavigationBar from '../NavigationBar/NavigationBar';
import storeApiService from '../../services/storeApiService';
import ProductItem from '../../models/ProductItem';
import DropdownContainer from '../DropdownContainer/DropdownContainer';
import { useState } from 'react';
const ProductShowcase = (): JSX.Element  => {
  const [products, setProducts] = useState(new Array<ProductItem>);
  const [categories, setCategories] = useState(new Array<string>);
  const [filteredCategories, setFilteredCategories] = useState(new Array<string>);

  const filterCategories = ( product: ProductItem) => {
    let filterCheck = true;
    filteredCategories.forEach((Category) => {
      filterCheck = (product.categories.includes(Category));
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
        if(categories.includes(Category))
        {
          console.log(Category);
        }
        else {
          categories.push(Category);
        }
      })
    })
      setProducts(value);
      setCategories(categories);

  })
      }
  return (
  <>
  <NavigationBar/>
  <h1 className={classes.h1}>Products</h1>
  <div>
        <h2 className={classes.h2}>Filters</h2>
        <p className={`${classes.h2} ${classes.TotalProducts}`}>{`(${products.filter(filterCategories).length} Products)`}</p>
  </div>
  <div className={classes.ProductShowcaseContainer}>
    <div className={classes.ProductContainer}>
    <div className={classes.CheckboxesContainer}>
    <div>
    <DropdownContainer label='Catagory' collapsed={false}>

      {categories.map((Category) => (
        <div>
          <input title={`Category: ${Category}`} type='checkbox' id={Category} name={Category} className={classes.Categorybox}
          onClick={(event) => {
            filteredCategories.push(event.currentTarget.name);
            setFilteredCategories(filteredCategories);
          }}/>
          <label>{`${Category} (${products.filter((Product) => (Product.categories.includes(Category))).length})`}</label>
        </div>
      ))}

    </DropdownContainer>
    </div>
    
    </div>
    <div className={classes.Product}>
        {products.filter(filterCategories).map((ProductItem) => (
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