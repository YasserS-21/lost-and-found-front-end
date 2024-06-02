import {React, useState, useEffect} from 'react'
import LostAndFoundItem from '../components/LostAndFoundItem'
import {Link} from "react-router-dom"
import NewItemButton from '../components/NewItemButton.jsx'

export default function LostAndFound() {
  const [lostAndFoundItems, setLostAndFoundItems] = useState([])  
  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then(response => response.json())
    .then(({data}) => setLostAndFoundItems(data)) //
  },[])

  return (
    <div>
        <NewItemButton/>
        {lostAndFoundItems.map(item =>  { 
            return (
              <Link to={`${item.id}`}>
              <LostAndFoundItem key ={item.id} item = {item}/>
              </Link>
            )
        })}
    </div>
  )
}
