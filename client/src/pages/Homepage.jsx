import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Homepage = () => {
  const token = localStorage.getItem('token');
  const [ username, setUsername ] = useState('')

  useEffect(() => {
    const userFetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/register', { headers: {
          Authorization: `Bearer ${token}`
        }})
        // const { token } = response.data
        // const decodedToken = parseToken(token)
        // const { username } = decodedToken

        const { username } = response.data
        setUsername(username)
        
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    userFetchData()
  }, [])
  
  const parseToken = (token) => {
    const tokenData = token.split(',')[1]
    const decodedToken = JSON.parse(atob(tokenData))
    return decodedToken
  }

  return (
    <>
    <h3>Welcome to Homepage</h3>
    <p>Mr. {username}</p>
    </>
  )
}

export default Homepage