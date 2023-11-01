import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';
import { Project } from '@/types/types';
import projectsList from '@/utils/project_array';
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
    language: '',
    title: '',
    description: '',
    link: '',
    key: 0,
};

const Modal = ({ handleClose, text }: { handleClose: any; text: string }) => {
    const [data, setData] = useState([defaultModel]);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch('http://localhost:3000/api/projects', {
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
                            key={i.key}
                        />
                    ))}
                </motion.ul>
            </motion.div>
        </Backdrop>
    );
};

export default Modal;
