import React from 'react'
import LostAndFoundItem from '../components/LostAndFoundItem'
import {Link} from "react-router-dom"

export default function LostAndFound({lostAndFoundItems}) {
  return (
    <div>
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
