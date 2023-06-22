import { Inter } from 'next/font/google'
import HomeButton from '../buttons/HomeButton'
import ProjectsButton from '../buttons/ProjectButton'
import AboutmeButton from '../buttons/AboutmeButton'
import GithubButton from '../buttons/GithubButton'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const variants = {
  open: { display: "none"},
  closed: { display: "block" },
}

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
    initial={false}
    animate={isOpen ? "open" : "closed"}
    variants={variants}>
      <div className='fixed top-0 left-0 h-screen w-24 flex flex-col bg-primary text-white pt-2 shadow-xl shadow-black'>
        <div className='m-[-1.5rem] pb-[12.5em]'>
          <Image src="./images/logo-no-background.svg" width={300} height={300} alt='Buerdel development'/>
        </div>      
        <HomeButton/>
        <ProjectsButton/>
        <AboutmeButton/>
        
        <div className='fixed bottom-3'>
          <GithubButton/>
        </div>
      </div>
    </motion.nav>
    
  )
}
