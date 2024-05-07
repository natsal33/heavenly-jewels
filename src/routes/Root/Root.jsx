import React from 'react'
import { Link } from 'react-router-dom'
import "./Root.css"

function Root() {
  return (
    <div>
        <h1>Hello Everyone!</h1>
        <ul>
          <li><Link to="browse">Browse</Link></li>
          <li><Link to="cart">Cart</Link></li>
          <li><Link to="FAQ">FAQs</Link></li>
          <li><Link to="home">Home</Link></li>
          <li><Link to="Listing/1">Listing ID 1</Link></li>
          <li><Link to="login">Login</Link></li>
          <li><Link to="payment-details">Payment Details</Link></li>
          <li><Link to="shipping-details">Shipping Details</Link></li>
          <li><Link to="shipping-policy">Shipping Policy</Link></li>
          <li><Link to="terms-conditions">Terms and Conditions</Link></li>
          <li><Link to="thank-you">Thank You</Link></li>
          <li><Link to="account">User Account </Link></li>
        </ul>
    </div>
  )
}

export default Root