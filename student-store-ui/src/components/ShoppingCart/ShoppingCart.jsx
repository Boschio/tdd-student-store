import * as React from "react"

export default function ShoppingCart(props) {

  console.log("TEST",props.shoppingCart)

  return (
    <div className="shopping-cart">
        <div className="cart-product-name">
          {props.shoppingCart.map((product) => (
            //FIXME need to make sure shopping cart is passed as an array with itemId and quantity. Need to convert ID to name of product
            product.id
          
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
