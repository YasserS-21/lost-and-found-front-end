import React from 'react'
import LostAndFoundItem from '../components/LostAndFoundItem'
import {Link} from "react-router-dom"

export default function LostAndFoundList({lostAndFoundItems}) {
  return (
    <div>
                
        {lostAndFoundItems.map(item =>  { 
            return (
              <LostAndFoundItem key ={item.id} item = {item}/>
            )
        })}
    </div>
  )
}
