import * as React from "react"

export default function CheckoutForm(props) {

  return (
    <div className="checkout-form">
      <form className="checkout-form" onSubmit={props.handleOnSubmitCheckoutForm}>
        
        <p>Name</p>
        <input className="checkout-form-input"
        type="text" name="name" required
        placeholder="Student Name" value={props.checkoutForm.name}
        onChange={(event) => {props.handleOnCheckoutFormChange(event.target.name,event.target.value)}}>
          
        </input>
        <p>Email</p>
        <input className="checkout-form-input" 
        type="email" name="email" required
        placeholder="student@codepath.org" value={props.checkoutForm.email}
        onChange={(event) => {props.handleOnCheckoutFormChange(event.target.name,event.target.value)}}>
          
        </input>
        <button className="checkout-button" type="submit">Checkout</button> 
        {/* ^^^ If that request fails, the CheckoutForm component should display an error message inside an element with the className of error. 
         If the POST request is successful...
            The CheckoutForm component should display a success message that contains the text "Success!" inside an element with the className of success.
            The shoppingCart should be emptied
            The checkoutForm should be reset to its default state.
        */}
        

      </form>
    </div>
    )
  }
  