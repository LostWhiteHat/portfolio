import { motion } from "framer-motion";

const Backdrop = ({ children, onClick}: {children: any, onClick: any}) => {
    return (
        <motion.div className="absolute top-0 left-0 h-full w-full backdrop-blur-lg flex items-center justify-center" 
        onClick={onClick} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
            {children}
        </motion.div>
    )
}

export default Backdrop;