import Link from 'next/link'
import logo from '../public/img/gack.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContextValue } from './context/userContext'
const Header = () => {
  const { loggedIn, setUserInfo, setLoggedIn } = useContextValue()
  const router = useRouter()
  const logout = () => {
    setUserInfo(null)
    setLoggedIn(false)
    router.push('/logout')
  }
  return (
    <header className='bg-bgHeader text-white'>
      <div className='containerm header'>
        <Link href='/' className='logo'>
          <Image alt='cart' src={logo} width={70} height={70} />
        </Link>
        <div className='navbar'>
          {loggedIn ? (
            <ul className='nav-list'>
              <li>
                <Link href='/posts'>Create Post</Link>
              </li>
              <li>
                {' '}
                <button onClick={logout}>Logout</button>
              </li>
              <li></li>
            </ul>
          ) : (
            <ul className='nav-list'>
              <li>
                {' '}
                <Link href='/register' className='logo'>
                  Sign up
                </Link>
              </li>
              <li>
                {' '}
                <Link href='/login' className='logo'>
                  Sign in
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
