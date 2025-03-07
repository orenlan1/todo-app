import { useState } from 'react'
import Login from './components/Login.jsx'
import HomeAuthentication from './pages/HomeAuthentication.jsx'
import TodosPage from './pages/TodosPage.jsx'


function App() {
  const [userId, setUserId] = useState('')


  return (
    <>
        {userId === ""? <HomeAuthentication setUserId= {(id) => setUserId(id)}/> : <TodosPage userId={userId}/>} 
    </>
  )
}

export default App
