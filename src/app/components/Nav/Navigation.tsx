import React from 'react';
import { motion } from 'framer-motion';
import NavButton from '../buttons/NavButton';
import {
    SiGithub,
    SiGithubactions,
    SiBookalope,
    SiAboutdotme,
    SiMinutemailer,
} from 'react-icons/si';
import { Button } from '@/app/types/types';

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.07, staggerDirection: -0.1 },
    },
};

const Buttons: Button[] = [
    {
        link: '/',
        icon: <SiBookalope size={32} />,
        text: 'Home',
        key: 1,
    },
    {
        link: '/projects',
        icon: <SiGithubactions size={32} />,
        text: 'Projects',
        key: 2,
    },
    {
        link: '/aboutme',
        icon: <SiAboutdotme size={32} />,
        text: 'About me',
        key: 3,
    },
    {
        link: 'https://github.com/LostWhiteHat',
        icon: <SiGithub size={32} />,
        text: 'Github',
        target: '_blank',
        key: 4,
    },
    {
        link: '/contact',
        icon: <SiMinutemailer size={32} />,
        text: 'Contact',
        key: 5,
    },
];

const Navigation = ({ toggle }: any) => (
    <motion.ul variants={variants} className="absolute top-48 left-2">
        {Buttons.map((i) => (
            <NavButton
                link={i.link}
                icon={i.icon}
                text={i.text}
                target={i.target}
                key={i.key}
                toggle={toggle}
            />
        ))}
    </motion.ul>
);

export default Navigation;
