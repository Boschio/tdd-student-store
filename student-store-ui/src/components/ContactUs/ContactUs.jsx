import * as React from "react"
import "./ContactUs.css"

export default function About() {
  return (
    <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-details">
          <ul className="info">
            <li><span className="label">Email:</span><span>stuff@things.org</span></li>
            <li><span className="label">Phone:</span><span>1-800-BUY-STUF</span></li>
            <li><span className="label">Address:</span><span>69 Things Place, New York, NY</span></li>
            {/* <li><span className="label">Socials</span><span></span></li> */}
          </ul>
        </div>
    </div>
  )
}