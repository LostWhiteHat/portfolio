import { motion } from 'framer-motion';
import { Skillset } from '@/types/types';
import { TbBrandCSharp, TbBrandCpp } from 'react-icons/tb';
import {
    SiTailwindcss,
    SiNextdotjs,
    SiFramer,
    SiVisualstudiocode,
    SiVisualstudio,
    SiIntellijidea,
    SiWindows11,
    SiGithub,
    SiTypescript,
} from 'react-icons/si';
import { FaJava, FaPython, FaNode, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import SkillsetButton from '../buttons/SkillsetButton';

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.07, staggerDirection: -0.1 },
    },
};

const skillset: Skillset[] = [
    {
        icon: <TbBrandCSharp size={80} strokeWidth={1} />,
        key: 3,
    },
    {
        icon: <SiJavascript size={80} strokeWidth={1} />,
        key: 4,
    },
    {
        icon: <SiNextdotjs size={80} />,
        key: 11,
    },
];

const learning: Skillset[] = [
    {
        icon: <TbBrandCpp size={80} strokeWidth={1} />,
        key: 1,
    },
    {
        icon: <FaPython size={80} />,
        key: 5,
    },
    {
        icon: <FaJava size={80} />,
        key: 4,
    },
    {
        icon: <SiTypescript size={80} strokeWidth={1} />,
        key: 2,
    },
    {
        icon: <FaReact size={80} />,
        key: 10,
    },

    {
        icon: <FaNode size={80} />,
        key: 9,
    },
    {
        icon: <SiFramer size={80} />,
        key: 12,
    },
    {
        icon: <SiTailwindcss size={80} />,
        key: 7,
    },
];

const tools: Skillset[] = [
    {
        icon: <SiVisualstudiocode size={80} />,
        key: 20,
    },
    {
        icon: <SiVisualstudio size={80} />,
        key: 21,
    },
    {
        icon: <SiIntellijidea size={80} />,
        key: 23,
    },
    {
        icon: <SiWindows11 size={80} />,
        key: 24,
    },
    {
        icon: <SiGithub size={80} />,
        key: 26,
    },
];

const SkillsetTable = ({ option }: { option: string }) => {
    if (option == 'skillset') {
        return (
            <motion.div variants={variants} className="skillset-table-layout">
                {skillset.map((i) => (
                    <SkillsetButton icon={i.icon} key={i.key} />
                ))}
            </motion.div>
        );
    } else if (option == 'learning') {
        return (
            <motion.div variants={variants} className="learning-table-layout">
                {learning.map((i) => (
                    <SkillsetButton icon={i.icon} key={i.key} />
                ))}
            </motion.div>
        );
    } else {
        return (
            <motion.div variants={variants} className="tools-table-layout">
                {tools.map((i) => (
                    <SkillsetButton icon={i.icon} key={i.key} />
                ))}
            </motion.div>
        );
    }
};

export default SkillsetTable;
