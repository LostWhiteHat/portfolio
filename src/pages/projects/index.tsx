import { useEffect, useState } from 'react';
import { motion, AnimatePresence, color, useCycle } from 'framer-motion';
import Modal from '../compontents/Modal';
import { TbBrandCSharp, TbBrandCpp } from 'react-icons/tb';
import { SiTypescript } from 'react-icons/si';
import { FaJava, FaPython } from 'react-icons/fa';
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { log } from 'console';

var setSubject: string = '';

const Projects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = (subject: string) => {
        setSubject = subject;
        setModalOpen(true);
    };

    const buttonList = [
        {
            button: (
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
            ),
        },
        {
            button: (
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
            ),
        },
        {
            button: (
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
            ),
        },
        {
            button: (
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
            ),
        },
        {
            button: (
                <div className="slider-item">
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
                </div>
            ),
        },
    ];
    const [buttons, setButtons] = useState(buttonList);
    function turnLeft() {
        var buffer = buttons;
        setButtons([buffer.pop()!, ...buffer]);
    }

    function turnRight() {
        var buffer = buttons;
        buffer.push(buffer.shift()!);
        setButtons([...buffer]);
    }

    useEffect(() => {
        setInterval(() => {
            turnRight();
            if (buttons.length !== buttonList.length) {
                setButtons([...buttonList]);
            }
        }, 5000);
    }, []);
    return (
        <div className="slider-wrapper h-screen w-screen justify-center align-middle">
            <motion.button
                className="slider-button"
                onClick={() => turnLeft()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
            >
                <BsFillArrowLeftCircleFill size={50} />
            </motion.button>
            <div className="slider">
                {buttons.map((b, idx) => (
                    <div className="slider-item" key={idx}>
                        {b.button}
                    </div>
                ))}
            </div>

            <motion.button
                className="slider-button"
                onClick={turnRight}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
            >
                <BsFillArrowRightCircleFill size={50} />
            </motion.button>

            <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
            >
                {modalOpen && <Modal text={setSubject} handleClose={close} />}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
