import './App.css'
import {Routes, Route} from "react-router-dom"
import {useState, useEffect} from "react"
import Index from './pages/Index'
import LostAndFound from './pages/LostAndFound'
import LostAndFoundItemDetailedView from './pages/LostAndFoundItemDetailedView'
import Nav from './components/Nav'

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
    <Nav/>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/lost-and-found" element={<LostAndFound lostAndFoundItems={lostAndFoundItems}/>} />
      <Route path="/lost-and-found/:id" element={<LostAndFoundItemDetailedView/>} />
    </Routes>
    </>
  )
}

export default App
