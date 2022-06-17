import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

//FIXME fix price to format with 2 decimals
//FIXME buttons or handlers not working

export default function ProductCard(props) {

    return (
    <div className="product-card">
      <div className="product-name">{props.product.name}</div>
      <div className="product-price">${props.product.price.toFixed(2)}</div>
      <div className="product-description" style={{display: props.showDescription===true ? "block" : "none" }} >{props.product.description}</div>
      <div className="media"><Link to={`/products/${props.product.id}`}><img src={props.product.image}/></Link></div>
      <div className="buttons">
        <button className="add" onClick={props.handleAddItemToCart(props.product.id)}>Add</button>
        <button className="remove" onClick={props.handleRemoveItemFromCart(props.product.id)}>Remove</button>
      </div>
      <div className="product-quantity">{props.quantity}</div>

    </div>
  )
}
