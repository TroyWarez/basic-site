import classes from '../ProductShowcase/ProductShowcase.module.css'
import NavProductClasses from '../ProductDisplay/ProductDisplay.module.css'
import storeApiService from '../../services/storeApiService';
import ProductItem from '../../models/ProductItem';
import MinMax from '../../models/MinMax';
import DropdownContainer from '../DropdownContainer/DropdownContainer';
import { useState } from 'react';
import { Link } from "react-router-dom";
import SelectMenu from '../SelectMenu/SelectMenu';
import SelectMenuOption from '../../models/selectMenuOption';
import ImgButton from '../ImgButton/ImgButton';
import Navclasses from "../NavigationBar/NavigationBar.module.css"
import storefrontCartIcon from "../../assets/icons/storefronCartAltIcon.svg"
import storefrontIcon from "../../assets/icons/storefrontIcon.svg"
const ProductShowcase = (): JSX.Element  => {

  const [Savedproducts, setSavedProducts] = useState(new Array<ProductItem>);
  const [products, setProducts] = useState(new Array<ProductItem>);
  const [categories, setCategories] = useState(new Array<string>);
  const [filteredCategories, setFilteredCategories] = useState(new Array<string>);
  const [filteredPrices, setFilteredPrices] = useState(new Array<MinMax>);

  
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

    <ImgButton imgPath={storefrontIcon} name={"Store"} altText={"Home"} linkPath="/"/>
    <ImgButton className={`${Navclasses.cart} ${NavProductClasses.ImgButton}`} imgPath={storefrontCartIcon} altText={"Cart"} linkPath="">
        <div className={NavProductClasses.MiniCartContainerAlt}>
        <p className={Navclasses.badge}>0</p>
        </div>
      <div className={NavProductClasses.MiniCartContainer}>
        <b className={NavProductClasses.MiniCart}>Your shopping cart is empty</b>
      </div>
      </ImgButton>

    </header>
    </div>
        </>);
  }
  return (
  <>
    <div className={Navclasses.navbarcontainer}>
    <header className={`${Navclasses.navbar} ${Navclasses.noncentered}`}>

    <ImgButton imgPath={storefrontIcon} name={"Store"} altText={"Home"} linkPath="/"/>
    <ImgButton className={`${Navclasses.cart} ${NavProductClasses.ImgButton}`} imgPath={storefrontCartIcon} altText={"Cart"} linkPath="">
        <div className={NavProductClasses.MiniCartContainerAlt}>
        <p className={Navclasses.badge}>0</p>
        </div>
      <div className={NavProductClasses.MiniCartContainer}>
        <b className={NavProductClasses.MiniCart}>Your shopping cart is empty</b>
      </div>
      </ImgButton>

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
          <Link to={`products/?sku=${ProductItem.sku}`} className={classes.ProductLink}>
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