import * as React from "react"
import "./Sidebar.css"
import { useEffect } from "react"

//FIXME need CSS stuff done
//FIXME  When the sidebar is opened, it should display the ShoppingCart and CheckoutForm components and should be wider than 350px.
//FIXME  When the sidebar is closed, it should only render the toggle button and shouldn't be wider than 150px

export default function Sidebar(props) {
  return (
    <section className="sidebar">
      <button className="toggle-button" onClick={useEffect(() => {props.handleOnToggle()} ,[])}>Toggle</button>
    </section>
  )
}
