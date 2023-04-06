import { useState } from 'react'
import './App.css'
import Card from "../components/Card";

function App() {
  const ratingSubmitted = useState(false)

  return (
  <div className='app'>
    <Card />
  </div>
  )
}

export default App
