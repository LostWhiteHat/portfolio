import { motion} from "framer-motion";
import Backdrop from "../Backdrop";

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

const Modal = ({handleClose, text}: {handleClose: any, text: String}) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div className="modal bg-blue-500" 
            onClick={(e) => e.stopPropagation()} 
            variants={animation}
            initial="hidden"
            animate="visible"
            exit="exit">
                <p>{text}</p>
            </motion.div>
        </Backdrop>
    )
}

export default Modal;