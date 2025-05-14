import classes from '../ProductShowcase/ProductShowcase.module.css'
import NavigationBar from '../NavigationBar/NavigationBar';
const ProductShowcase = (): JSX.Element  => {
  return (
  <>
  <NavigationBar/>
    <div className={classes.container}>
        <h1 className={classes.h1}>Products</h1>
        <div className={classes.Product}>
          <img alt='Product Image' className={classes.img} src='car.jpg'></img>
          <p>RC Car</p>
          <div className={classes.ProductPriceContainer}>
            <b className={classes.from}>From: </b>
            <b className={classes.ProductPrice}>CA$0.20</b>
          </div>
          <div className={classes.ProductPriceContainer}>
          <p className={classes.from}>Color: </p>
          <p> Red</p>
        </div>
        </div>
    </div>
  </>
  )
}

export default ProductShowcase;