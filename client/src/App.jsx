import { useState } from 'react'
import Login from './components/Login.jsx'
import HomeAuthentication from './pages/HomeAuthentication.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <HomeAuthentication/>
    </>
  )
}

export default App
