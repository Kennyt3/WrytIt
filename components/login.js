import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContextValue } from './context/userContext'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')
  const { loggedIn, setUserInfo, setLoggedIn } = useContextValue()
  const router = useRouter()
  const handleClick = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
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

  if (loggedIn) {
    router.push('/')
  }

  return (
    <form className='register' onSubmit={handleClick}>
      <h1 className='header'>Login To Your Account</h1>
      <p className='text-center text-[18px]'>
        Don't have an account? &nbsp;
        <Link href='/register'>
          <span className='text-accentPrimary'>Create Account</span>
        </Link>
      </p>
      <label className='label'>Email</label>
      <input
        type='email'
        placeholder='Enter email address'
        value={email}
        required
        autoComplete='on'
        onChange={(e) => setEmail(e.target.value)}
        className='inp'
      />
      <label className='label'>Password</label>
      <input
        type='password'
        placeholder='Enter password'
        value={password}
        required
        autoComplete='on'
        onChange={(e) => setPassWord(e.target.value)}
        className='inp'
      />
      <p className='text-end text-accentPrimary my-3'>
        <Link href='/recovery'>Forgot Password?</Link>
      </p>
      <button className='form-btn mt-2'>Submit</button>
    </form>
  )
}

export default LoginPage
