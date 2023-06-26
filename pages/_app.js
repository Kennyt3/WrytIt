import '@/styles/globals.css'
import UserProvider from '@/components/context/userContext'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
