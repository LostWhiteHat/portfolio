import { Metadata } from 'next';
import Header from './components/header';
import Footer from './components/footer';
import NextAuthProvider from './components/authprovider';
import '@/app/styles/globals.css';

export const metadata: Metadata = {
    title: 'Bürdel Development',
    description: 'Portfolio Patrick Bürdel',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <NextAuthProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </NextAuthProvider>
            </body>
        </html>
    );
}
