import { useState, useContext, createContext } from 'react'

export const UserContext = createContext({})

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [content, setContent] = useState('')
  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        loggedIn,
        setLoggedIn,
        content,
        setContent,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
export const useContextValue = () => {
  return useContext(UserContext)
}
