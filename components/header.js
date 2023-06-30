import Link from 'next/link'
import logo from '../public/img/gack.png'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useContextValue } from './context/userContext'
const Header = () => {
  const { loggedIn, setUserInfo, setLoggedIn } = useContextValue()
  const [scrolled, setScrolled] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()
  const toggleScroll = () => {
    const overlays = document.querySelectorAll('.overlay')
    if (overlays.length > 0) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }

  const logout = () => {
    setUserInfo(null)
    setLoggedIn(false)
    router.push('/logout')
  }
  useEffect(() => {
    const func = () => setScrolled(window.pageYOffset > 500)
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', func)
    }
    func()

    return () => {
      window.removeEventListener('scroll', func)
    }
  }, [])

  useEffect(() => {
    toggleScroll()

    return () =>
      setTimeout(() => {
        toggleScroll()
      }, 0)
  }, [showMenu])
  return (
    <header
      className={`w-full top-0 z-40 relative id="main" bg-bgHeader text-white ${
        scrolled && 'sticky'
      }`}
    >
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
                <Link href='#features'>Features</Link>
              </li>
              <li>
                <Link href='/about'>About us</Link>
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
                <Link href='/#features'>Features</Link>
              </li>
              <li>
                <Link href='/about'>About us</Link>
              </li>
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
