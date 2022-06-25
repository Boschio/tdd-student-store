import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Logo />
        <div className="socials">
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-linkedin"></a>
          <a href="#" className="fa fa-youtube"></a>
          <a href="#" className="fa fa-instagram"></a>
        </div>
        <div className="nav-links">
          <ul className="links">
            <a href="#" className="list-link">Home</a>
            <a href="#" className="list-link">About Us</a>
            <a href="#" className="list-link">Contact Us</a>
            <a href="#" className="list-link">Buy Now</a>
            <a href='#' className="list-link">Order History</a>
          </ul>
        </div>
      </div>
    </nav>
  )
}
