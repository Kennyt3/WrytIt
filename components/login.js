import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContextValue } from './context/userContext'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')
  const [redirect, setRedirect] = useState(false)
  const { userInfo, setUserInfo } = useContextValue()
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
        setRedirect(true)
      })
    } else {
      alert('wrong credentials')
    }
  }

  if (redirect) {
    router.push('/')
  }

  return (
    <form className='register'>
      <h1 className='header'>Login To Your Account</h1>
      <p className='text-center text-[18px]'>
        Don't have an account?{' '}
        <Link href='/register'>
          <span className='text-accentPrimary'>Create Account</span>
        </Link>
      </p>
      <label className='label'>Email</label>
      <input
        type='email'
        placeholder='Enter email address'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='inp'
      />
      <label className='label'>Password</label>
      <input
        type='password'
        placeholder='Enter password'
        value={password}
        onChange={(e) => setPassWord(e.target.value)}
        className='inp'
      />
      <p className='text-end text-accentPrimary my-3'>
        <Link href='/recovery'>Forgot Password?</Link>
      </p>
      <button onClick={handleClick} className='form-btn mt-2'>
        Submit
      </button>
    </form>
  )
}

export default LoginPage
