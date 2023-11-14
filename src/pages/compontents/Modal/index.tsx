import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';
import ProjectItem from './ProjectItem';
import { useEffect, useState } from 'react';

const animation = {
    hidden: {
        opacity: 0,
        transitionEnd: {
            display: 'none',
        },
    },
    visible: {
        opacity: 1,
        display: 'block',
    },
    exit: {
        opacity: 0,
        transitionEnd: {
            display: 'none',
        },
    },
};

const defaultModel = {
    pid: 0,
    language: '',
    title: '',
    description: '',
    link: '',
};

const Modal = ({ handleClose, text }: { handleClose: any; text: string }) => {
    const [data, setData] = useState([defaultModel]);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://buerdel.dev/api/projects', {
                method: 'GET',
            });
            const response = await res.json();
            setData(response.filter((i: any) => i.language === text));
        };
        getData();
    }, [text]);

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                className="modal bg-blue-500"
                onClick={(e) => e.stopPropagation()}
                variants={animation}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <motion.ul>
                    {data.map((i) => (
                        <ProjectItem
                            title={i.title}
                            description={i.description}
                            link={i.link}
                            key={i.pid}
                        />
                    ))}
                </motion.ul>
            </motion.div>
        </Backdrop>
    );
};

export default Modal;
