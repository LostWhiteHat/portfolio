import { Project } from '@/types/types';
import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si';

const ProjectItem: React.FC<Project> = ({title, description, link}) => {
    return (
        <>
            <motion.li className='mb-3'>
                <div className='flex justify-between items-center flex-row mt-5'>
                    <h1 className='text-lg'><b>{title}</b></h1>
                    <p className='ml-8 mr-4'>{description}</p>
                    <a href={link} target='_blank'>
                        <SiGithub size={35}/>
                    </a>
                </div>
            </motion.li>
            <div className='bg-black relative h-[2px] w-full'/>
        </>
    )
    
}

export default ProjectItem;
