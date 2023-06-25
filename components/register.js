import React, { useState } from 'react'
import Link from 'next/link'
const RegisterPage = () => {
  const [username, setUserName] = useState('')
  const [password, setPassWord] = useState('')
  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <form className='register'>
      <h1 className='header'>Create New Account</h1>
      <p className='text-center text-[18px]'>
        Already have an account?{' '}
        <Link href='/login'>
          <span className='text-[#FF6B6B]'>Login</span>
        </Link>
      </p>
      <label className='label'>Name</label>
      <input
        type='text'
        placeholder='username'
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        className='inp'
      />
      <label className='label'>Password</label>
      <input
        type='password'
        placeholder='password'
        value={password}
        onChange={(e) => setPassWord(e.target.value)}
        className='inp'
      />
      <button onClick={handleClick} className='form-btn mt-3'>
        Submit
      </button>
    </form>
  )
}

export default RegisterPage
