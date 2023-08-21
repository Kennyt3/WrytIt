import Link from 'next/link'
import logo from '../public/img/gack.png'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { useContextValue } from '../context/userContext'
const Header = () => {
  const {
    loggedIn,
    setUserInfo,
    setLoggedIn,
    logout,
    setShowMenu,
    showMenu,
    toggleScroll,
  } = useContextValue()
  const [scrolled, setScrolled] = useState(false)
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
  return (
    <>
      <header
        className={`w-full top-0 z-40 relative id="main" bg-bgHeader text-white ${
          scrolled && 'sticky'
        }`}
      >
        <div className='containerm header'>
          <Link href='/'>
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
                  <Link href='/register'>Sign up</Link>
                </li>
                <li>
                  {' '}
                  <Link href='/login'>Sign in</Link>
                </li>
              </ul>
            )}
          </div>
          <div className='menu'>
            <AiOutlineMenu size={25} onClick={toggleScroll} />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
