import { useState } from 'react'
import './App.css'

function App() {
  
const [counter, setCounter]= useState(15)

  const addValue = () => {
    setCounter((help) => help + 1 )
    setCounter((help) => help + 1 )
    setCounter((help) => help + 1 )
    setCounter((help) => help + 1 )
    
  }
  const removeValue = () => {
    setCounter((help) => help - 1 )
    setCounter((help) => help - 1 )
    setCounter((help) => help - 1 )
    setCounter((help) => help - 1 )
  }
  return (
    <>
      <h1>ReactJs Bismit {counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button
        onClick={addValue}>
        Add Value</button> {" "}
      <button
      onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
