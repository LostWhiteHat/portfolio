import Image from 'next/image'

export default function Home() {
    return ( 
      <main className="flex h-full flex-col items-center justify-between">         
          <Image src={"./images/logo-no-background.svg"} alt='Buerdel development' width={900} height={900}/>
      </main>
    )
}
