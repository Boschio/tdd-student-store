import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import { useState, useEffect } from "react"
import axios from "axios";
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import ProductCard from "../ProductCard/ProductCard"
import ProductView from "../ProductView/ProductView"


export default function App() {
  const [test, setTest] = useState("")
  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState() // need to set bool value if app is currently fetching products from API
  const [error, setError] = useState("")
  const [isOpen, setIsOpen] = useState(false) // Boolean value for if Sidebar is open or closed
  const [shoppingCart, setShoppingCart] = useState([]) // state for active user's shopping cart items and quantity of each
  const [isProductAdded, setIsProductAdded] = useState(false)
  const [productCounter, setProductCounter] = useState(1)
  const [checkoutForm, setCheckoutForm] = useState([]) // user's info sent to API when checking out
  const [searchInput, setSearchInput] = useState("")

  function handleOnToggle () {
    if (isOpen === true) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  function handleAddItemToCart (productId) {
    setProductCounter(0)
    if (shoppingCart.length > 0) {
      for (let i=0;i<shoppingCart.length;i++) {
        if (productId === shoppingCart[i].id) {
          shoppingCart[i].quantity += 1
          // setIsProductAdded(true)  
          } else {
          setProductCounter(productCounter + 1)
        }
      }
    }
    if (shoppingCart.length == productCounter) {
      console.log("Counter",productCounter)
      const newCartItem = {
        id: productId,
        quantity: 1,        
      }
      setShoppingCart(current => [...current, newCartItem])
      setProductCounter(0)
    }
  }

  function handleRemoveItemFromCart (productId) {
    //FIXME
  }

  function handleOnCheckoutFormChange (name, value) {
    //FIXME
  }

  function handleOnSubmitCheckoutForm () {
    //FIXME
  }

  useEffect(() => {
    const getProducts = async () => {
      
      try {
        const response = await axios.get(`https://codepath-store-api.herokuapp.com/store?test=${test}`)
        const products = response.data.products
        // console.log(products)
        setProducts(products)
      } catch(error) {
        setError("Unable to retrieve data")
        console.log(error)
      }
    }
    getProducts()   
  }, [test])

  return (
    <div className="app">
      <BrowserRouter>
      <Sidebar isOpen={isOpen} shoppingCart={shoppingCart} products={products} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} handleOnToggle={handleOnToggle} />

        <main>
          {/* YOUR CODE HERE! */}

          {/* <input onChange={(event) => (setTest(event.target.value))} /> */}

          <Navbar />
          <Hero />
          <Routes>
          
            <Route path = "/" element={<Home products={products} 
            handleAddItemToCart={handleAddItemToCart} 
            handleRemoveItemFromCart={handleRemoveItemFromCart}
            searchInput={searchInput} setSearchInput={setSearchInput} />} />

            <Route path = "/products/:productId" element={<ProductDetail
            products={products}
            handleAddItemToCart={handleAddItemToCart} 
            handleRemoveItemFromCart={handleRemoveItemFromCart} />}/>
            
            <Route path="*" element={<NotFound />}></Route>
            
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
