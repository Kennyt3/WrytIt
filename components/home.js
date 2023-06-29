import React, { useEffect } from 'react'
import { useContextValue } from './context/userContext'
const HomePage = () => {
  const { loggedIn, userInfo } = useContextValue()
  // useEffect(() => {
  //   console.log(loggedIn, userInfo)
  // }, [loggedIn, userInfo])
  return (
    <div>
      {loggedIn ? (
        <>
          <h1>Congrats, signed in</h1>
        </>
      ) : (
        <>
          <h1>Go to sign in</h1>
        </>
      )}
    </div>
  )
}

export default HomePage