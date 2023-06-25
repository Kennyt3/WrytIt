import React, { useState } from 'react'
import Link from 'next/link'
const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassWord] = useState('')
  const handleClick = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  return (
    <form className='login px-3'>
      <h1 className='header'>Login To Your Account</h1>
      <p className='text-center text-[18px]'>
        Don't have an account?{' '}
        <Link href='/register'>
          <span className='text-accentPrimary'>Create Account</span>
        </Link>
      </p>
      <label className='label'>username</label>
      <input
        type='email'
        placeholder='Enter email address'
        autoComplete='on'
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='inp'
      />
      <label className='label'>Password</label>
      <input
        type='password'
        placeholder='Enter password'
        autoComplete='on'
        required
        value={password}
        onChange={(e) => setPassWord(e.target.value)}
        className='inp'
      />
      <p className='text-end text-accentPrimary my-3'>
        <Link href='/recovery'>Forgot Password?</Link>
      </p>
      <button onClick={handleClick} className='form-btn'>
        Submit
      </button>
    </form>
  )
}

export default LoginPage
