import classes from '../ProductShowcase/ProductShowcase.module.css'
import NavigationBar from '../NavigationBar/NavigationBar';
const ProductShowcase = (): JSX.Element  => {
  return (
  <>
  <NavigationBar/>
    <div className={classes.container}>
        <h1>Products</h1>
    </div>
  </>
  )
}

export default ProductShowcase;