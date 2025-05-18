import { useState } from 'react'
import Carros from '../src/components/Carros'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Challenge CSS</h1>
      <Carros />
      <h1>Fim Challege CSS</h1>
    </>
  )
}

export default App
