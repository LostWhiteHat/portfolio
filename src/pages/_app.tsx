import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import SideBar from './compontents/bars/Sidebar'
import Waves from './compontents/waves/waves'
import { motion } from 'framer-motion'
import { NavMenu } from './compontents/Nav/NavMenu'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./images/favicon.ico"></link>
      </Head>
      <div className='fixed top-0 left-0 right-0 bottom-0'>
        <header className='fixed z-50'>
          <Waves/>
          <NavMenu />
        </header>        
        <Component {...pageProps} />
      </div>
    </>
  )
}


// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <Head>
//         <link rel="shortcut icon" href="./images/favicon.ico"></link>
//       </Head>
//       <div className='w-full h-full'>
//         <header className='fixed z-50'>
//           <Waves/>
//           <SideBar/>
//         </header>        
//         <Component {...pageProps} />
//       </div>
//     </>
//   )
// }
