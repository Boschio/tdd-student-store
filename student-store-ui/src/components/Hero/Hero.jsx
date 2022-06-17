import * as React from "react"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="hero">
      <div className="intro">
        <h1>Welcome!</h1>
        <p>Some stuff for a description</p>
      </div>
      <div>
        <img className="hero-img" src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg" />
      </div>
    </div>
  )
}