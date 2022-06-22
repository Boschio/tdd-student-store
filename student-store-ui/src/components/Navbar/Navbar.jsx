import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Logo />
        <div className="socials">
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-linkedin"></a>
          <a href="#" class="fa fa-youtube"></a>
          <a href="#" class="fa fa-instagram"></a>
        </div>
        <div className="nav-links">
          <ul className="links">
            <a href="#" className="list-link">Home</a>
            <a href="#" className="list-link">About Us</a>
            <a href="#" className="list-link">Contact Us</a>
            <a href="#" className="list-link">Buy Now</a>
          </ul>
        </div>
      </div>
    </nav>
  )
}
