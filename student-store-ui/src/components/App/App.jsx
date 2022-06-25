import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"

export default function App() {
  const [test, setTest] = useState("")
  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState() // need to set bool value if app is currently fetching products from API
  const [error, setError] = useState("")
  const [isOpen, setIsOpen] = useState(false) // Boolean value for if Sidebar is open or closed
  const [shoppingCart, setShoppingCart] = useState([]) // state for active user's shopping cart items and quantity of each
  const [checkoutForm, setCheckoutForm] = useState({name: undefined,email: undefined,}) // user's info sent to API when checking out
  const [purchases, setPurchases] = useState([])

  function handleOnToggle () {
    if (isOpen === true) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  function handleAddItemToCart (productId) {
    let productAdded = false
    if (shoppingCart.length > 0) {
      for (let i=0;i<shoppingCart.length;i++) {
        if (productId === shoppingCart[i].itemId) {
          let copyCart = [...shoppingCart]
          copyCart[i]= {
            ...copyCart[i],
            quantity: copyCart[i].quantity+1
          }
          setShoppingCart(copyCart)
          productAdded = true
        }
      }
    } 
    if (productAdded === false) {
      const newCartItem = {
        itemId: productId,
        quantity: 1,        
      }
      setShoppingCart(current => [...current, newCartItem])
    }
  }

  function handleRemoveItemFromCart (productId) {
    if (shoppingCart.length > 0) {
      for (let i=0;i<shoppingCart.length;i++) {
        if (productId === shoppingCart[i].itemId && shoppingCart[i].quantity > 1) {
          let copyCart = [...shoppingCart]
          copyCart[i]= {
            ...copyCart[i],
            quantity: copyCart[i].quantity-1
          }
          setShoppingCart(copyCart)
        } else if (productId === shoppingCart[i].itemId && shoppingCart[i].quantity === 1) {
          let copyCart = [...shoppingCart]
          copyCart[i]= {
            ...copyCart[i],
            quantity: copyCart[i].quantity-1
          }
          let itemToRemove = copyCart.find(({ itemId }) => itemId === productId)
          const newCart = copyCart.filter(item => {
            return item !== itemToRemove
          })
          setShoppingCart(newCart)
        }
      }
    } 
  }

  function handleOnCheckoutFormChange (name, value) {
    setCheckoutForm(current => ({...current,[name]:value}))  
  }

  const handleOnSubmitCheckoutForm = async () => {
    try {
      // const res = await axios.post('http://localhost:3001/store', {purchases: {user :checkoutForm, shoppingCart: shoppingCart}})
      const res = await axios.post('http://localhost:3001/store', {user :checkoutForm, shoppingCart: shoppingCart})
      if(res.data.purchase) {
        setPurchases(current => [...current,res.data.purchase])
        setShoppingCart([])
      }      
    }catch(err) {
        console.log({err})
    }
    setShoppingCart([])
    alert("\nSuccess! Order confirmed!\n\nPlease check the sidebar or your email for details of this order.")
  }

  useEffect(() => {
    const getProducts = async () => {
      
      try {
        const response = await axios.get('http://localhost:3001/store')
        // const response = await axios.get(`https://codepath-store-api.herokuapp.com/store`)
        const products = response?.data?.products
        setProducts(products)
      } catch(error) {
        setError("Unable to retrieve data")
        console.log({error})
      }
    }
    getProducts()   
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
      <Sidebar isOpen={isOpen} shoppingCart={shoppingCart} products={products}
       checkoutForm={checkoutForm} setCheckoutForm={setCheckoutForm}
        handleOnCheckoutFormChange={handleOnCheckoutFormChange}
        handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} handleOnToggle={handleOnToggle} />

        <main>

          <Navbar />
          <Routes>
          
            <Route path = "/" element={<Home products={products} 
            shoppingCart={shoppingCart}
            handleAddItemToCart={handleAddItemToCart} 
            handleRemoveItemFromCart={handleRemoveItemFromCart} />} />

              
            <Route path = "/products/:productId" element={<ProductDetail
            shoppingCart={shoppingCart}
            handleAddItemToCart={handleAddItemToCart} 
            handleRemoveItemFromCart={handleRemoveItemFromCart} />}/>
            
            <Route path="*" element={<NotFound />}></Route>
            
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
