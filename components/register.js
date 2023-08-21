import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContextValue } from '../context/userContext'
const RegisterPage = () => {
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')
  const { loggedIn, setUserInfo, setLoggedIn } = useContextValue()
  const router = useRouter()
  const handleClick = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, password, email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo)
        setLoggedIn(true)
      })
    } else {
      alert('wrong credentials')
    }
  }

  return (
    <form className='login px-3' onSubmit={handleClick}>
      <h1 className='header'>Create New Account</h1>
      <p className='text-center text-[18px]'>
        Already have an account?{' '}
        <Link href='/login'>
          <span className='text-[#FF6B6B]'>Login</span>
        </Link>
      </p>
      <label className='label'>First name</label>
      <input
        type='text'
        placeholder='Enter username'
        autoComplete='on'
        value={firstName}
        required
        onChange={(e) => setFirstName(e.target.value)}
        className='inp'
      />
      <label className='label'>Last name</label>
      <input
        type='text'
        placeholder='Enter username'
        autoComplete='on'
        value={lastName}
        required
        onChange={(e) => setLastName(e.target.value)}
        className='inp'
      />
      <label className='label'> Email</label>
      <input
        type='email'
        placeholder='Enter email address'
        autoComplete='on'
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        className='inp'
      />
      <label className='label'>Password</label>
      <input
        type='password'
        placeholder='Enter password'
        autoComplete='on'
        value={password}
        required
        onChange={(e) => setPassWord(e.target.value)}
        className='inp'
      />
      <button className='form-btn mt-3'>Submit</button>
    </form>
  )
}

export default RegisterPage
