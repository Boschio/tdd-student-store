import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <Logo />
        <div className="socials">
          Socials PlaceHolder
        </div>
        <div className="nav-links">
          <ul className="links">
            <a href="/" className="list-link">Home</a>
            <a href="/" className="list-link">About Us</a>
            <a href="/" className="list-link">Contact Us</a>
            <a href="/" className="list-link">Buy Now</a>
          </ul>
        </div>

      </div>
    </nav>
  )
}
