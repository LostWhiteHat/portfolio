import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../compontents/Modal';
import Image from 'next/image';
import { TbBrandCSharp, TbBrandCpp } from 'react-icons/tb';
import { SiTypescript } from 'react-icons/si';
import { FaJava, FaPython } from 'react-icons/fa';

var setSubject: string = '';

const Projects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = (subject: string) => {
        setSubject = subject;
        setModalOpen(true);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="layout-content">
                <motion.button
                    className="layout_item"
                    onClick={() => (modalOpen ? close() : open('cpp'))}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1 }}
                >
                    <div className="layout-item-image">
                        <TbBrandCpp size={200} color="white" />
                    </div>
                </motion.button>

                <motion.button
                    className="layout_item"
                    onClick={() => (modalOpen ? close() : open('csharp'))}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1 }}
                >
                    <div className="layout-item-image">
                        <TbBrandCSharp size={200} color="white" />
                    </div>
                </motion.button>

                <motion.button
                    className="layout_item"
                    onClick={() => (modalOpen ? close() : open('typescript'))}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1 }}
                >
                    <div className="layout-item-image">
                        <SiTypescript size={130} color="white" />
                    </div>
                </motion.button>

                <motion.button
                    className="layout_item"
                    onClick={() => (modalOpen ? close() : open('python'))}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1 }}
                >
                    <div className="layout-item-image">
                        <FaPython size={160} color="white" />
                    </div>
                </motion.button>

                <motion.button
                    className="layout_item"
                    onClick={() => (modalOpen ? close() : open('java'))}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1 }}
                >
                    <div className="layout-item-image">
                        <FaJava size={140} color="white" />
                    </div>
                </motion.button>

                <AnimatePresence
                    initial={false}
                    mode="wait"
                    onExitComplete={() => null}
                >
                    {modalOpen && (
                        <Modal text={setSubject} handleClose={close} />
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
};

export default Projects;
