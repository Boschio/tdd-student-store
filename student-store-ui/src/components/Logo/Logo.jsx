import * as React from "react"
import { Link } from "react-router-dom"


//FIXME Should use the Link component from react-router-dom to link to the home route (/) when clicked
export default function Logo() {
  return (
    <div className="logo"><Link to="/"><img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" alt="codepath logo"/></Link></div>
  )
}
