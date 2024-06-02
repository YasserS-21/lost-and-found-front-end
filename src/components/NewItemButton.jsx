import React from 'react'
import {Link} from "react-router-dom"

export default function NewItemButton() {
  return (
    <div>
        <Link to="/lost-and-found/new">
        <button>New Item</button>
        </Link>
    </div>
  )
}
