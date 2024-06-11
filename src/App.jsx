import {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Inicio from './pages/Inicio'

const App = () => {

  const [color] = useState("#1b85CC")
  document.body.style.backgroundColor = color

  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/inicio" element={<Inicio/>} />
      </Routes>
  )
}

export default App // pega e usa a função inicial, no caso é App
