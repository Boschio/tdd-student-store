import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

//FIXME might need to remove product card props

export default function ProductGrid(props) {

    // console.log("NAME: ",props.products)
    return (
    <div className="product-grid">
      {/* <div> */}
        {props.products.map((product) => (
        // <p key={index}>{product.name}</p>
        <ProductCard key={product.id} showDescription={false} product={product} productId={product.id} quantity={props.quantity} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} />
        
      ))}
      {/* </div> */}
    </div>
  )
}
