import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Waves from './compontents/waves/waves'
import NavMenu from './compontents/Nav/NavMenu'


export default function App({ Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./images/favicon.ico"></link>
        <title>Buerdel Development</title>
      </Head>
      <div className='absolute top-0 left-0 right-0 bottom-0'>
        <header className='fixed z-50'>
          <NavMenu/>
          <Waves/>
        </header>        
        <Component {...pageProps}/>
      </div>
    </>
  )
}
