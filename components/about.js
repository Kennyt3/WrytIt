import React, { useEffect } from 'react'
import { useContextValue } from '../context/userContext'
// import Image from 'next/image'
// import heroImage from '../public/img/hero.jpg'
const AboutPage = () => {
  const { loggedIn, userInfo } = useContextValue()
  // useEffect(() => {
  //   console.log(loggedIn, userInfo)
  // }, [loggedIn, userInfo])
  return <div></div>
}

export default AboutPage
