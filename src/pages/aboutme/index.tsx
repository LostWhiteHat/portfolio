import { Inter } from 'next/font/google'
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion'
import { useRef } from 'react'
import SideBar from "../compontents/bars/Sidebar"
import Waves from "../compontents/waves/waves"

const inter = Inter({ subsets: ['latin'] })

export default function Aboutme() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
            <div>
                <header className='z-40 fixed'>
                    <SideBar/>
                    <Waves/>
                </header>        
            </div>
            <div className='absolute left-24 top-0 right-0 bottom-0'>
                <div className='absolute bg-slate-300 top-20 left-48 bottom-24 right-72'>
                    Test
                </div>
            </div>
        </main>
    )    
}