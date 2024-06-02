import React from 'react'

export default function LostAndFoundItem({item}) {
  return (
    <div className="lost-and-found__item">
    <h3>Name: {item.name}</h3>
    <p>Description: {item.description}</p>
    <p>Location: {item.location}</p>
    <p>Date Lost: {item.date_lost}</p>
    </div>
  )
}
