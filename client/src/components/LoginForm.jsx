import React from 'react'
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
    <form action="">

    </form>
    </>
  )
}

export default LoginForm