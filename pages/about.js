import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
// import AboutPage from '@/components/about'
import Menubar from '@/components/menubar'
import { useContextValue } from '@/context/userContext'

export default function Register() {
  const { showMenu, setShowMenu } = useContextValue()
  // useEffect(() => {
  //   const func = () => setShowMenu(false)
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('resize', func)
  //   }
  //   func()

  //   return () => {
  //     window.removeEventListener('resize', func)
  //   }
  // })
  return (
    <>
      <Head>
        <title>Wrytit</title>
        <meta httpEquiv='Content-Type' content='text/html charset=UTF-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          property='og:title'
          key='title'
          name='description'
          content='Blog app to help take your blog writing skills to a whole new level'
        />
      </Head>
      {showMenu ? (
        <div>
          <Header />
          <main className='main'>
            <Menubar />
          </main>
        </div>
      ) : (
        <div>
          <Header />
          <main className='main'>{/* <AboutPage />{' '} */}</main>
          <Footer />
        </div>
      )}
    </>
  )
}
