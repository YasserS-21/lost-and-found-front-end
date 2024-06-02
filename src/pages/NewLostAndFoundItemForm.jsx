import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function NewLostAndFoundItemForm() {
    const navigate = useNavigate()
    const [newItem, setNewItem] = useState({
        name: "",
        description: "",
        location: "",
        date_lost: ""
    })

    const handleChange = (event) => {
        setNewItem({
           ...newItem,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:3000/items/", {
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
       .then(response => response.json())
       .then(() => navigate("/lost-and-found"))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>New Lost and Found Item</legend>

                <label>Name</label>
                <input 
                type="text"
                placeholder='Item Name'
                name="name"
                value={newItem.name}
                onChange={handleChange}/>

                <label>Description</label>
                <input 
                type="text"
                placeholder='Item Description'
                name="description"
                value={newItem.description}
                onChange={handleChange}/>

                <label>Location</label>
                <input 
                type="text"
                placeholder='Location Of Item'
                name="location"
                value={newItem.location}
                onChange={handleChange}/>

                <label>Date Lost</label>
                <input 
                type="text"
                placeholder='Date Lost'
                name="date_lost"
                value={newItem.date_lost}
                onChange={handleChange}/>

                <input type="submit" value="Submit" />
            </fieldset>
        </form>
    </div>
  )
}
