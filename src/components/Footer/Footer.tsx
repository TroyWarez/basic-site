import React from 'react'
import classes from "./Footer.module.css"

function Footer() {
  return (
    <footer className={classes.Footer}>© Copyright {new Date().getFullYear()} all rights reserved</footer>
  )
}

export default Footer