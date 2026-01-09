import { useState } from 'react'
import './App.css'
import Help from './comp/Help'
import Header from './comp/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Help />
      <Header />
    </>
  );
}

export default App
