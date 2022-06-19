import * as React from "react"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import SearchBar from "../SearchBar/SearchBar"
import About from "../About/About"
import ContactUs from "../ContactUs/ContactUs"
import Footer from "../Footer/Footer"
import "./Home.css"
import { useState, useEffect } from "react"

export default function Home(props) {
  const [currentProducts, setCurrentProducts] = useState([])
  const [currentCategory, setCurrentCategory] = useState(false)  
  const { products } = props

  let handleOnSearchChange = (event) => {
    props.setSearchInput(event.target.value)
    setCurrentProducts(products.filter(product => {
    return (product.name.toLowerCase().includes(props.searchInput.toLowerCase()))
    }))
  }

  let handleCategory = (category) => {
    setCurrentCategory(true)
    if (category === "") {
      setCurrentProducts(products)
    } else {
      setCurrentProducts(products.filter(product => {
        console.log(category)
      return (product.category === category)
      }))
  }}

  return (
    <div className="home">
      <SearchBar setSearchInput={props.setSearchInput} handleOnSearchChange={handleOnSearchChange} handleCategory={handleCategory} />
      <ProductGrid products={props.searchInput.length === 0 && currentCategory===false ? products : currentProducts} 
      handleAddItemToCart={props.handleAddItemToCart} 
      handleRemoveItemFromCart={props.handleRemoveItemFromCart}/>
      <About />
      <ContactUs />
      <Footer />
    </div>
  )
}
