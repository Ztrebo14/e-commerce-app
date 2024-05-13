import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null)
    const [ token, setToken ] = useState(localStorage.getItem('token') || '')
    const navigate = useNavigate()
    
    const loginAction = async () => {
        try {
            const response = await axios.get('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: response.data
            })
        const res = await response.data
        if (res.data) {
            setUser(res.data.user)
            setToken(res.token)
            localStorage.getItem('token', res.token)
            navigate('/homepage')
            return
        }
        throw new Error(res.message)
        } catch (error) {
            console.error(error)
        }
    }

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("token");
        navigate("/login");
      };

  return (
    <AuthContext.Provider value={{ user, token, loginAction, logOut }} >{children}</AuthContext.Provider>
  )
}

export default AuthContext

export const useAuth = () => {
    return useContext(AuthContext)
}