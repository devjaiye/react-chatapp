import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import "./style.scss"
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"/>
      <Route index element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route  path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App