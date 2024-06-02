import React from 'react'
import {Link} from "react-router-dom"

export default function LostAndFoundItem({item}) {
  return (
    <>
    <Link to={`${item.id}`}>
    <div className="lost-and-found__item">
    <h3>Name: {item.name}</h3>
    <p>Description: {item.description}</p>
    <p>Location: {item.location}</p>
    <p>Date Lost: {item.date_lost}</p>
    </div>
    </Link>
    
    <Link to={`/lost-and-found/${item.id}/edit/`}>Edit This Item</Link>
    </>
  )
}
