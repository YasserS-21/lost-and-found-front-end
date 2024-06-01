import React from 'react'
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

export default function LostAndFoundItemDetailedView() {
    const {id} = useParams()
    const [lostAndFoundItem, setLostAndFoundItem] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/items/${id}`)
        .then(response => response.json())
        .then (({data}) => setLostAndFoundItem(data))
    }, [])
    console.log(lostAndFoundItem)
  return (
    <div>
        <img width="100px" height="150px" overflow="hidden" src={`${lostAndFoundItem.image_url}`}/>
        <h3>{lostAndFoundItem.name}</h3>
        <p>{lostAndFoundItem.description}</p>
        <p>{lostAndFoundItem.location}</p>
        <p>{lostAndFoundItem.date_lost}</p>
    </div>
  )
}
