import classes from '../ProductShowcase/ProductShowcase.module.css'
import NavigationBar from '../NavigationBar/NavigationBar';
const ProductShowcase = (): JSX.Element  => {
  return (
  <>
  <NavigationBar/>
  <h1 className={classes.h1}>Products</h1>
    <div className={classes.CheckboxesContainer}>
      <h2>Filters</h2>
    <input type='checkbox'/>
  </div>
    <div className={classes.ProductContainer}>
    <div className={classes.Product}>
        
        <div className={classes.Product}>
          <img alt='Product Image' className={classes.img} src='car.jpg'></img>
          <b>RC Car</b>
          <div className={classes.ProductPriceContainer}>
          <b className={classes.from}>Color: </b>
          <b> Red</b>
         </div>
          <div className={classes.ProductPriceContainer}>
            <b className={classes.from}>From: </b>
            <b className={classes.ProductPrice}>CA$45.20</b>
          </div>
        <div className={classes.ProductSalePriceContainer}>
            <b className={`${classes.from} ${classes.sale}`}>From: </b>
            <s className={`${classes.ProductPrice} ${classes.sale}`}>CA$45.20</s>
            <b>32% off</b>
          </div>
        </div>
    </div>
  </div>
  </>
  )
}

export default ProductShowcase;