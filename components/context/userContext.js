import { useState, useContext, createContext } from 'react'

export const UserContext = createContext({})

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({})
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
export const useContextValue = () => {
  return useContext(UserContext)
}
