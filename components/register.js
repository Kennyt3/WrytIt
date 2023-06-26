import React, { useState } from 'react'
import Link from 'next/link'
const RegisterPage = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')
  const handleClick = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ username, password, email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
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
      <label className='label'>Username</label>
      <input
        type='text'
        placeholder='Enter username'
        autoComplete='on'
        value={username}
        required
        onChange={(e) => setUsername(e.target.value)}
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
