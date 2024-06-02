import {React, useState, useEffect} from 'react'
import NewItemButton from '../components/NewItemButton.jsx'
import LostAndFoundList from '../components/LostAndFoundList.jsx'

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
        <LostAndFoundList lostAndFoundItems={lostAndFoundItems}/>

    </div>
  )
}
