import { useState } from 'react'
import { motion, AnimatePresence} from 'framer-motion'
import Modal from '../compontents/Modal'
import Image from 'next/image'


export default function Projects() {
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10 layout-table">
            <div className='layout-content'>
                <motion.button 
                id='content1' 
                className='layout_item col-span-2' 
                onClick={() => (modalOpen ? close() : open())} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 1 }}>
                    <div className='relative w-full h-full justify-stretch items-center flex flex-nowrap'>
                        <div className='ml-10'>
                            <Image src={"./images/cpp.svg"} width={200} height={200} alt='"cpp-project'/>
                        </div>                        
                        <div className='absolute top-10 left-72 right-10 bottom-10 w-auto h-auto'>
                            <h1 className='text-xl'>C++ Tasker</h1>
                            <br/>
                            <p>
                            The Tasker is my first project in C++. 
                            <br/>
                            Through this project I could get a first impression how complex the language is.
                            </p>
                        </div>
                    </div>
                </motion.button>  

                <motion.button 
                id='content2' 
                className='layout_item' 
                onClick={() => (modalOpen ? close() : open())} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}>
                    <div className='absolute top-16 bottom-10 left-10 right-10'>                        
                        <h1 className='text-xl'>Platzhalter</h1>
                        <br/>
                        <p>
                        Just a random Text
                        </p>
                    </div>
                </motion.button>

                <motion.button 
                id='content3' 
                className='layout_item' 
                onClick={() => (modalOpen ? close() : open())} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 1 }}>
                    <div className='absolute top-16 bottom-10 left-10 right-10'>                        
                        <h1 className='text-xl'>Platzhalter</h1>
                        <br/>
                        <p>
                        Just a random Text
                        </p>
                    </div>
                </motion.button>

                <motion.button 
                id='content4' 
                className='layout_item col-span-2' 
                onClick={() => (modalOpen ? close() : open())} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 1 }}>
                    <div className='relative w-full h-full justify-stretch items-center flex flex-nowrap'>                      
                        <div className='w-[60%] h-52 ml-10 mt-10'>
                            <h1 className='text-xl'>Platzhalter</h1>
                            <br/>
                            <p>
                            Just a random Text
                            </p>
                        </div>
                        <div className='absolute right-5'>
                            <Image src={"./images/placeholder.svg"} width={200} height={200} alt='"cpp-project'/>
                        </div>  
                    </div>
                </motion.button>

                <AnimatePresence
                initial={false}
                mode='wait'
                onExitComplete={() => null}>
                    {modalOpen && <Modal text={"Hello World!"} handleClose={close}/>}
                </AnimatePresence>
            </div>      
        </main>
    )           
}