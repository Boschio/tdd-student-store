import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import Footer from "../Footer/Footer"
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
  const [checkoutForm, setCheckoutForm] = useState([]) // user's info sent to API when checking out

  function handleOnToggle () {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  function handleAddItemToCart (productId) {
    //FIXME
    
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
        <main>
          {/* YOUR CODE HERE! */}

          {/* <input onChange={(event) => (setTest(event.target.value))} /> */}

          <Navbar />
          <Sidebar isOpen={isOpen} shoppingCart={shoppingCart} products={products} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} handleOnToggle={handleOnToggle} />
          <Routes>
          
            <Route path = "/" element={<Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />} >
              <Route path="" element={<Hero />}/>
              <Route path = "" element={<ProductGrid products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />} >  
                <Route path = "" element={<ProductCard />} />
              </Route>
            </Route>

            <Route path = "/products/:productId" element={<ProductDetail handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />}>
              <Route path = "" element={<ProductView />} >
                <Route path = "" element={<ProductCard />} />
              </Route>
            </Route>
            
            <Route path="*" element={<NotFound />}></Route>
            
            {/* <Route path="/" element={<Footer />} /> */}
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  )
}
