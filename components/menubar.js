import React from 'react'
import { useContextValue } from '../context/userContext'
import Link from 'next/link'
const Menubar = () => {
  const { loggedIn, logout, showMenu, setShowMenu } = useContextValue()
  return (
    <div>
      {showMenu && (
        <div className='menubar'>
          {loggedIn ? (
            <ul className='menu-list'>
              <li>
                <Link onClick={() => setShowMenu(false)} href='/posts'>
                  Create Post
                </Link>
              </li>
              <li>
                <Link onClick={() => setShowMenu(false)} href='#features'>
                  Features
                </Link>
              </li>
              <li>
                <Link onClick={() => setShowMenu(false)} href='/about'>
                  About us
                </Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          ) : (
            <ul className='menu-list'>
              <li>
                <Link onClick={() => setShowMenu(false)} href='/#features'>
                  Features
                </Link>
              </li>
              <li>
                <Link onClick={() => setShowMenu(false)} href='/about'>
                  About us
                </Link>
              </li>
              <li>
                {' '}
                <Link onClick={() => setShowMenu(false)} href='/register'>
                  Sign up
                </Link>
              </li>
              <li>
                {' '}
                <Link onClick={() => setShowMenu(false)} href='/login'>
                  Sign in
                </Link>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default Menubar
