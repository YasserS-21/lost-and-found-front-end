import {React, useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from "react-router-dom"

export default function EditLostAndFoundItem() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [item, setItem] = useState({
        name: "",
        description: "",
        location: "",
        date_lost: ""
    })
    useEffect(() => {
        fetch(`http://localhost:3000/items/${id}`)
       .then(response => response.json())
       .then(({data}) => setItem(data))
    }, [id])

    console.log(item)

    const handleChange = (event) => {
        setItem({
           ...item,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const itemFilteredKeys = (({ name, description,location, date_lost}) => ({ name, description, location, date_lost }))(item);
        fetch(`http://localhost:3000/items/${id}`,{
            method: "PUT",
            body: JSON.stringify(itemFilteredKeys),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
        .then(() => navigate(`/lost-and-found/${id}`))
        .catch(err => console.log(err))
    }

    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Edit Lost and Found Item</legend>

                <label htmlFor="name">Name</label>
                <input 
                type="text"
                name="name" 
                id="name"
                value={item.name}
                onChange={handleChange}/>

                <label htmlFor="description">Description</label>
                <input 
                type="text" 
                name="description" 
                id="description"
                value={item.description}
                onChange={handleChange}/>

                <label htmlFor="location">Location</label>
                <input 
                type="text" 
                name="location" 
                id="location"
                value={item.location}
                onChange={handleChange}/>

                <label htmlFor="date_lost">Date Lost</label>
                <input 
                type="text" 
                name="date_lost" 
                id="date_lost"
                value={item.data_lost}
                onChange={handleChange}/>
                
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    </div>
  )
}
