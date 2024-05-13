import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import Homepage from '../pages/Homepage'
import AuthContext, { AuthProvider } from '../contexts/AuthContext'

function App() {
  const isAuthenticated = !!localStorage.getItem('token')
  // const [ isAuthenticated, setIsAuthenticated ] = useState(false)

  // const handleLogin = () => {
  //   !!localStorage.getItem('token')
  //   setIsAuthenticated(true)
  // }

  // const handleLogout = () => {
  //   setIsAuthenticated(false)
  // }

  return (
    <>

      <Router>
        <Routes>
          <Route
            path='/'
            element={
              isAuthenticated ? (
                <Navigate to='/homepage' />
              ) : (
                <Navigate to='/login' />
              )
            }
          />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />}/>
          <Route
            path='/homepage'
            element={
              isAuthenticated ? <Homepage /> : <Navigate to='/login' replace={true} />
            } 
            />
        </Routes>
      </Router>

    </>
  )
}

export default App
