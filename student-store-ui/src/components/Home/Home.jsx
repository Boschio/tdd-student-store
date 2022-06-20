import * as React from "react"
import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"
import SearchBar from "../SearchBar/SearchBar"
import About from "../About/About"
import ContactUs from "../ContactUs/ContactUs"
import Footer from "../Footer/Footer"
import "./Home.css"
import { useState, useEffect } from "react"

export default function Home(props) {
  const [currentCategory, setCurrentCategory] = useState("")
  const [searchInput, setSearchInput] = useState("")
  const { products } = props

  
  const currentProducts = products.filter(product => {
    return (product.name.toLowerCase().includes(searchInput.toLowerCase()))
  }).filter(product => {
    if(currentCategory === "") {
      return true
    }
    return (product.category === currentCategory)
  })

  // console.log("RENDER: ", searchInput, currentProducts)
  let handleOnSearchChange = (event) => {
    // console.log("EVENT WITHIN SEARCH CHANGE: ",event.target.value)
    setSearchInput(event.target.value)
  }

  let handleCategory = (category) => {
    setCurrentCategory(category)
  }

  return (
    <div className="home">
      <Hero />
      <SearchBar setSearchInput={props.setSearchInput} 
      handleOnSearchChange={handleOnSearchChange} handleCategory={handleCategory} />
      <ProductGrid products={currentProducts}
      shoppingCart={props.shoppingCart} 
      handleAddItemToCart={props.handleAddItemToCart} 
      handleRemoveItemFromCart={props.handleRemoveItemFromCart}/>
      <About />
      <ContactUs />
      <Footer />
    </div>
  )
}
