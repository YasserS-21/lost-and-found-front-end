import './App.css'
import {Routes, Route} from "react-router-dom"
import {useState, useEffect} from "react"
import Index from './pages/Index'
import LostAndFound from './pages/LostAndFound'
import LostAndFoundItemDetailedView from './pages/LostAndFoundItemDetailedView'
import NewLostAndFoundItemForm from './pages/NewLostAndFoundItemForm'
import EditLostAndFoundItem from './pages/EditLostAndFoundItem'
import Nav from './components/Nav'

function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/lost-and-found" element={<LostAndFound/>} />
      <Route path="/lost-and-found/:id" element={<LostAndFoundItemDetailedView/>} />
      <Route path="/lost-and-found/new" element={<NewLostAndFoundItemForm/>} />
      <Route path="/lost-and-found/:id/edit" element={<EditLostAndFoundItem/>} />
    </Routes>
    </>
  )
}

export default App
