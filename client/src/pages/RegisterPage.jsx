import React from 'react'
import RegisterForm from '../components/RegisterForm'
import { NavLink } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <>
    <h3>Register to Ducky Shop now!</h3>
    <RegisterForm />
    <p>Already have account? click <NavLink to={'/login'}>login</NavLink></p>
    </>
  )
}

export default RegisterPage