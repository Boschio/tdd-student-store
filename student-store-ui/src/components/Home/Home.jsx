import * as React from "react"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import "./Home.css"

export default function Home(props) {
  
  return (
    <div className="home">
      <p>Home</p>
      <Hero />
      <ProductGrid products={props.products} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}/>
    </div>
  )
}
