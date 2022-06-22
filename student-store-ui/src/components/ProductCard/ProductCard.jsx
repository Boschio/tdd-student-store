import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard(props) {
  const { product } = props

  let item = props.shoppingCart.find(({ itemId }) => itemId===product.id)
  console.log("ITEM",item)
    return (
    <div className="product-card">
      <div className="media"><Link to={`/products/${product.id}`} className="product-image"><img src={product.image}/></Link></div>
      <div className="details-container">
        <div className="product-details">
          <div className="product-name">{product.name}</div>
          <div className="product-price">${product.price?.toFixed(2)}</div>
          <div className="product-description" style={{display: props.showDescription===true ? "block" : "none" }} >{product.description}</div>        
        </div>
        <div className="buttons-container">
            <div className="buttons">
              <button className="add" onClick={() => {props.handleAddItemToCart(product.id)}}>+</button>
              <button className="remove" onClick={() => {props.handleRemoveItemFromCart(product.id)}}>-</button>
            </div>
            <div className="product-quantity">{item != null ? "In Cart: " + item.quantity : ""}</div>
          </div>
      </div>
    </div>
  )
}
