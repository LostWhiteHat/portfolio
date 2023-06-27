import { motion} from "framer-motion";
import Backdrop from "../Backdrop";
import { Project } from "@/types/types";
import projectsList from '@/utils/project_array';
import ProjectItem from "./ProjectItem";


const animation = {
    hidden: {
        opacity: 0,
        transitionEnd: {
            display: "none",
        }
    },
    visible: {
        opacity: 1,
        display: "block",
    },
    exit: {
        opacity: 0,
        transitionEnd: {
            display: "none",
        }
    }
}

const Modal = ({handleClose, text}: {handleClose: any, text: string}) => {
    console.log(text);
    const projects: Project[] = projectsList.filter(i => i.language === text);
    console.log(projects);
    return (
        <Backdrop onClick={handleClose}>
            <motion.div className="modal bg-blue-500" 
            onClick={(e) => e.stopPropagation()} 
            variants={animation}
            initial="hidden"
            animate="visible"
            exit="exit">
                <motion.ul>
                    {projects.map(i => (
                        <ProjectItem title={i.title} description={i.description} link={i.link} key={i.key}/>
                    ))}
                </motion.ul>
                {/* <p>{text}</p> */}
            </motion.div>
        </Backdrop>
    )
}

export default Modal;