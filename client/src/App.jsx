import { useState } from 'react'
import Login from './Login.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
    </>
  )
}

export default App
