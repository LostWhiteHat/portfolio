import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import SideBar from './compontents/bars/Sidebar'
import Waves from './compontents/waves/waves'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./images/favicon.ico"></link>
      </Head>
      <div className='w-full h-full'>
        <header className='z-50 fixed'>
          <Waves/>
          <SideBar/>  
         </header>
        <Component {...pageProps} />
      </div>
    </>
  )
}
