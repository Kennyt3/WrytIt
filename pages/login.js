import Head from 'next/head'
import Header from '@/components/header'
import LoginPage from '@/components/login'

export default function Register() {
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
      <div className=''>
        <Header />
        <main className='main'>
          <LoginPage />
        </main>
      </div>
    </>
  )
}
