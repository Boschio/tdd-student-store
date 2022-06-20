import * as React from "react"

export default function ShoppingCart(props) {

  // console.log("CART ITEMS",props.shoppingCart)
  // console.log("ALL PRODS", props.products)

  return (
    <div className="shopping-cart">
        <div className="cart-product-name">
          {props.shoppingCart.map((product, index) => (
            //FIXME need to make sure shopping cart is passed as an array with itemId and quantity. Need to convert ID to name of product
            <CartTable key={index} products={props.products} shoppingCart={props.shoppingCart} product={product} />
            
            
            
          
          ))}
        </div>
        <div className="cart-product-quantity">

        </div>
        <div className="subtotal"></div>
        <div className="total-price"></div>
        <div className="notification" display="none">"No items added to cart yet. Start shopping now!"</div>
    </div>
  )
}
 export function CartTable(props) {
  let { product } = props
  let { products } = props
  let { shoppingCart } = props

  return (
    <div className="cart-table">
      <p>Name: {products[product.itemId-1].name}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  )
 }