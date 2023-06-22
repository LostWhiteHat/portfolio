import '@/styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <link rel="shortcut icon" href="./images/favicon.ico"></link>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
