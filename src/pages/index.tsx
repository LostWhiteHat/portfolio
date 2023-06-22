import { Inter } from 'next/font/google'
import SideBar from './compontents/bars/Sidebar'
import Waves from './compontents/waves/waves'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return ( 
      <main className="flex min-h-screen flex-col items-center justify-between p-10">         
          <div className='mt-[-5rem] ml-12'>
            <Image src={"./images/logo-no-background.svg"} alt='Buerdel development' width={900} height={900}/>
          </div>
      </main>
    )
}
