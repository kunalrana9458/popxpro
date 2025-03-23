import React from 'react'
import LoginForm from '../components/LoginForm'
import Container from '../components/Container'

const Login = () => {
  return (
    <div>
      <Container
      head='Signin to your PopX account'
      para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' />
    <LoginForm />
    </div>
  )
}

export default Login
