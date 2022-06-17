import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"
import { useEffect } from "react"

//FIXME buttons or handlers not working

export default function ProductCard(props) {
  const { product } = props
  // console.log("PRODUCT",props.product.name)
  // console.log("PRICE",props.product.product.price)

    return (
    <div className="product-card">
      <div className="media"><Link to={`/products/${product.id}`}><img src={product.image}/></Link></div>
      <div className="product-details">
        <div className="product-name">{product.name}</div>
        <div className="product-price">${product.price}</div> {/*.toFixed(2)*/}
        <div className="product-description" style={{display: props.showDescription===true ? "block" : "none" }} >{product.description}</div>
        <div className="buttons">
          {/* <button className="add" onClick={useEffect(() => {props.handleAddItemToCart(props.productId)},[])}>+</button>
          <button className="remove" onClick={props.handleRemoveItemFromCart(props.productId)}>-</button> */}
        </div>
        <div className="product-quantity">{props.quantity}</div>
      </div>
      

    </div>
  )
}
