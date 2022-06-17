import * as React from "react"
import "./About.css"

export default function About() {
  return (
    <div className="about-container" id="about">
        <div className="about-info">
            <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
            <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
            <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
        </div>
        <div className="about-image">
            <img src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg"/>
        </div>

    </div>
  )
}