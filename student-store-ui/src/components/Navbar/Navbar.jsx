import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <Logo />
        <div className="socials"></div>
        <ul className="links"></ul>
      </div>
    </nav>
  )
}
