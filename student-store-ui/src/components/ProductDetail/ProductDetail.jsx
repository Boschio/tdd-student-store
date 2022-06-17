import * as React from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import NotFound from "../NotFound/NotFound"
import ProductView from "../ProductView/ProductView"

//FIXME check props for productView
//FIXME When the initial request is loading, it should render an h1 element with the className of loading and contain the text "Loading..."

export default function ProductDetail(props) {
    const [product, setProduct] = useState()

    let { productId } = useParams()

    useEffect(() => {
        const getProduct = async () => {
      
            try {
              console.log('mounted')
              const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
              const product = response.data.products[productId]
              console.log(product)
              setProduct(product)
              return <ProductView product={product} productId={productId} quantity={shoppingCart.quantity} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} />
            } catch(error) {
              return <NotFound />
            }
          }
          getProduct()  
    },[])
    
    return (
      <div className="product-detail">
        <p>Product Detail</p>
      </div>
    )
  }
