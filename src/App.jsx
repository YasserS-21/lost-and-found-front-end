import './App.css'
import {Routes, Route} from "react-router-dom"
import {useState, useEffect} from "react"
import Index from './pages/Index'
import LostAndFound from './pages/LostAndFound'

function App() {
  const [lostAndFoundItems, setLostAndFoundItems] = useState([])  
  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then(response => response.json())
    .then(({data}) => setLostAndFoundItems(data)) //
  },[])
console.log(lostAndFoundItems)
  return (
    <>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/lost-and-found" element={<LostAndFound />} />
    </Routes>
    </>
  )
}

export default App
