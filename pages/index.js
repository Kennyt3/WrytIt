import Head from 'next/head'
import HomePage from '@/components/home'
import Header from '@/components/header'
import Footer from '@/components/footer'
export default function Home() {
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
          <HomePage />
        </main>
        <Footer />
      </div>
    </>
  )
}
