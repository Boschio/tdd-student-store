import * as React from "react"
import "./Sidebar.css"
import { useEffect } from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

//FIXME need CSS stuff done
//FIXME  When the sidebar is opened, it should display the ShoppingCart and CheckoutForm components and should be wider than 350px.
//FIXME  When the sidebar is closed, it should only render the toggle button and shouldn't be wider than 150px

export default function Sidebar(props) {
  return (
    // <section className="sidebar">
    <section className={props.isOpen ? "sidebar open" : "sidebar closed"}>
      <button className="toggle-button" onClick={props.handleOnToggle}><i class="fa fa-bars"></i></button>
      <ShoppingCart isOpen={props.isOpen} products={props.products} shoppingCart={props.shoppingCart} />
      <CheckoutForm isOpen={props.isOpen} shoppingCart={props.shoppingCart} checkoutForm={props.checkoutForm} setCheckoutForm={props.setCheckoutForm} handleOnCheckoutFormChange={props.handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm} />
    </section>
  )
}
