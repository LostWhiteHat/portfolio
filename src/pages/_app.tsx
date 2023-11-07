import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Waves from './compontents/waves/waves';
import NavMenu from './compontents/Nav/NavMenu';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import Link from 'next/link';
import { SessionProvider } from 'next-auth/react';
import LoginButton from './compontents/buttons/LoginButton';

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    return (
        <SessionProvider session={session}>
            <Head>
                <link rel="shortcut icon" href="./images/favicon.ico"></link>
                <title>Buerdel Development</title>
            </Head>
            <div className="absolute top-0 left-0 right-0 bottom-0">
                <header className="fixed z-50">
                    <LoginButton />
                    <NavMenu />
                    <Waves />
                </header>

                <Component {...pageProps} />
            </div>
            <footer className="fixed w-screen bottom-3 left-2 text-sm text-white z-[51]">
                <p>
                    Copyright <span>&copy;</span> 2023 Patrick Bürdel
                </p>

                <Link
                    href={
                        'https://www.linkedin.com/in/patrick-b%C3%BCrdel-872647255/'
                    }
                    target="_blank"
                >
                    <div className="social-button fixed right-8 bottom-3 group">
                        <SiLinkedin size={26} color="white" />
                        <span className="social-tooltip group-hover:scale-100">
                            LinkedIn
                        </span>
                    </div>
                </Link>

                <Link href={'https://github.com/LostWhiteHat'} target="_blank">
                    <div className="social-button fixed right-24 bottom-3 group">
                        <SiGithub size={26} color="white" />
                        <span className="social-tooltip group-hover:scale-100">
                            Github
                        </span>
                    </div>
                </Link>
            </footer>
        </SessionProvider>
    );
}
