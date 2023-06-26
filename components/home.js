import React from 'react'
import { useContextValue } from './context/userContext'
const HomePage = () => {
  const { userInfo } = useContextValue()
  return (
    <div>
      {userInfo ? (
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
