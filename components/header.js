import Link from 'next/link'
import logo from '../public/img/gack.png'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='bg-bgHeader text-white'>
      <div className='containerm header'>
        <Link href='/' className='logo'>
          <Image alt='cart' src={logo} width={70} height={70} />
        </Link>
        <div className='navbar'>
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
        </div>
      </div>
    </header>
  )
}

export default Header
