import { Link } from "gatsby"
import React from "react"

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/about">visit about us</Link>
    </div>
  )
}
