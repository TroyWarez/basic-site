import classes from '../ProductShowcase/ProductShowcase.module.css'
import NavigationBar from '../NavigationBar/NavigationBar';
const ProductShowcase = (): JSX.Element  => {
  return (
  <>
  <NavigationBar/>
    <div className={classes.container}>
        <div></div>
    </div>
  </>
  )
}

export default ProductShowcase;