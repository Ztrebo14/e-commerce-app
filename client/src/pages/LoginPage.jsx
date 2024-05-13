import React from 'react'
import LoginForm from '../components/LoginForm'
import { Link, NavLink } from 'react-router-dom'

const LoginPage = ({onLogin}) => {

  return (
    <>
    <h3>Ducky Shop Login</h3>
    <LoginForm />
    <p>Don't have account? <NavLink to={'/register'}>register</NavLink> here first.</p>
    </>
  )
}

export default LoginPage