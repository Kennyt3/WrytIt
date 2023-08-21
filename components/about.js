import React, { useEffect } from 'react'
import { useContextValue } from '../context/userContext'
import Image from 'next/image'
import heroImage from '../public/img/hero.jpg'
const AboutPage = () => {
  const { loggedIn, userInfo } = useContextValue()
  // useEffect(() => {
  //   console.log(loggedIn, userInfo)
  // }, [loggedIn, userInfo])
  return (
    <div>
      {/* {loggedIn ? (
        <>
          <h1>Congrats, signed in</h1>
        </>
      ) : (
        <>
          <h1>Go to sign in</h1>
        </>
      )} */}
      <div className='about'>
        <h4>About Us</h4>{' '}
        <p>
          WrytIt is more than just a blogging platform; it's a community of
          passionate writers and readers who believe in the power of
          storytelling. Our mission is to provide a space where individuals can
          freely express themselves, share their stories, and connect with
          others who share their love for the written word.
        </p>
      </div>
    </div>
  )
}

export default AboutPage
