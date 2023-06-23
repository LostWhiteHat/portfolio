import { useState } from 'react'
import { motion, AnimatePresence} from 'framer-motion'
import Modal from '../compontents/Modal'
import Image from 'next/image'


export default function Projects() {
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className='layout-content'>
                <motion.button className='layout_item' onClick={() => (modalOpen ? close() : open())}  whileHover={{ scale: 1.05 }}  whileTap={{ scale: 1 }}>
                    <div className='layout-item-image'>
                        <Image src={"./images/cpp.svg"} width={200} height={200} alt='"cpp-project'/>
                    </div>
                </motion.button>  

                <motion.button className='layout_item' onClick={() => (modalOpen ? close() : open())} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                    <div className='layout-item-image'>
                        <Image src={"./images/csharp.svg"} width={200} height={200} alt='"cpp-project'/>
                    </div>
                </motion.button>

                <motion.button className='layout_item' onClick={() => (modalOpen ? close() : open())} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                    <div className='layout-item-image'>                        
                        <Image src={"./images/typescript.svg"} width={200} height={200} alt='"cpp-project'/>
                    </div>
                </motion.button>

                <motion.button className='layout_item' onClick={() => (modalOpen ? close() : open())} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                    <div className='layout-item-image'>
                        <Image src={"./images/python.svg"} width={200} height={200} alt='"cpp-project'/>
                    </div>
                </motion.button>

                <motion.button className='layout_item' onClick={() => (modalOpen ? close() : open())} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                    <div className='layout-item-image'>
                        <Image src={"./images/java.svg"} width={130} height={130} alt='"cpp-project'/>
                    </div>
                </motion.button>

                <motion.button className='layout_item' onClick={() => (modalOpen ? close() : open())} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                    <div className='layout-item-image'>
                        <Image src={"./images/placeholder.svg"} width={200} height={200} alt='"cpp-project'/>
                    </div>
                </motion.button>

                <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
                    {modalOpen && <Modal text={"Hello World!"} handleClose={close}/>}
                </AnimatePresence>
            </div>      
        </main>
    )           
}