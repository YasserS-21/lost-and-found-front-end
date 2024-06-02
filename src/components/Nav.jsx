import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div className = "nav-bar">
        <h1>Lost and Found</h1>
        <nav>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/lost-and-found">Lost and Found</Link>
        </nav>
    </div>
  )
}
