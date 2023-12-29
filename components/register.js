import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContextValue } from '../context/userContext'
const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')
  const [userDeets, setUserDeets] = useState({})
  const [errMsg, setErrMsg] = useState('')
  const { loggedIn, setUserInfo, setLoggedIn } = useContextValue()
  const router = useRouter()
  const handleClick = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ name, password, email }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })

      if (response.ok) {
        const userInfo = await response.json()
        setUserInfo(userInfo)
        setLoggedIn(true)
        setErrMsg('No error message')

        // Redirect after successful registration
        // if (registered) {
        //   router.push('/post');
        // }
      } else {
        setErrMsg('User Already exists')
      }

      console.log(response)
      console.log(loggedIn)
    } catch (error) {
      console.error('Error:', error.message)
      setErrMsg('Network error occurred')
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
      <label className='label'>Name</label>
      <input
        type='text'
        placeholder='Enter username'
        autoComplete='on'
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
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
