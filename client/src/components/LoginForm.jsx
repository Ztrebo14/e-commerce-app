import React, { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const response = await axios.post('http://localhost:3000/login', { username, password })
        localStorage.setItem('token', response.data.token)
        alert('Login successful')
    } catch (error) {
        alert('Login failed')
    }
}

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
    </>
  )
}

export default LoginForm