import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'
import Allstudents from './Pages/Allstudents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
     <Routes> 
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/allstudents' element={<Allstudents/>}/>
     </Routes>
    </>
  )
}

export default App
