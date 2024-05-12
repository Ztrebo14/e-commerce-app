import React, { useState } from 'react'
import axios from 'axios'

const RegisterForm = () => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3000/register', { username, password })
            alert('User registered successfully');
        } catch (error) {
            alert('Failed to register user');
        }
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
    </>
  )
}

export default RegisterForm