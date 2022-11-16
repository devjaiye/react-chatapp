import React, { useContext } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import "./style.scss"
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import Test from './pages/Test'

const App = () => {

  //const {currentUser} = useContext(AuthContext)
  const currentUser = true
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
  }

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={
          <ProtectedRoute> 
            <Home/>
          </ProtectedRoute>
        }/>
        <Route path="login" element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
  
}

export default App