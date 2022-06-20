import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

//FIXME might need to remove product card props

export default function ProductGrid(props) {
  const { products } = props
  const { shoppingCart } = props
    // console.log("NAME: ",props.products)
    console.log("STUFF",props)
    
    return (
      
      
    <div className="product-grid">
      <div className="grid-header"><h2>Best Selling Products</h2></div>
      <div className="grid-container"> 
        {products.map((product, index) => (
          
        // <p key={index}>{product.name}</p>
        <ProductCard key={index} 
        showDescription={false} 
        product={product} productId={product.id} 
        shoppingCart={shoppingCart}
        quantity={props.quantity} 
        handleAddItemToCart={props.handleAddItemToCart} 
        handleRemoveItemFromCart={props.handleRemoveItemFromCart} />
        
      ))}
      </div>
    </div>
  )
}
