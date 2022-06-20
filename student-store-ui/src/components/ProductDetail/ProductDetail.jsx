import * as React from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import NotFound from "../NotFound/NotFound"
import ProductView from "../ProductView/ProductView"
import axios from "axios";
import { render } from "react-dom"

//FIXME check props for productView
//FIXME When the initial request is loading, it should render an h1 element with the className of loading and contain the text "Loading..."

export default function ProductDetail(props) {
    const [product, setProduct] = useState([])

    let { productId } = useParams()
    // console.log("PROD ID",productId)
    let prodView
    useEffect(() => {
        const getProduct = async () => {
        
            try {
              console.log('mounted')
              const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
              console.log('responded')
              const productData = response.data
              console.log("PRODDATA",productData)
              setProduct(productData.product)
              console.log("DATA SET")
              // prodView = <ProductView product={product} productId={productId} quantity={props.shoppingCart.quantity} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} />
            } catch(error) {
              console.log("ERROR")
              return <NotFound />
            }
          }
          getProduct()  
    },[])



    console.log("PROD",product)

    return (
      <div className="product-detail">
        {/* {prodView} */}
        <ProductView product={product} shoppingCart={props.shoppingCart} quantity={props.quantity} productId={productId} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} />
      </div>
    )
  }
