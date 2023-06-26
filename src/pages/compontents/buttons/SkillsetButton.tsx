import { Skillset } from "@/types/types";
import { motion } from "framer-motion";
const variants = {
    open: {
      y: 0,
      display: "block",
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      display: "none",
      transition: {
        y: { stiffness: 1000 }
      }
    }
}

const SkillsetButton: React.FC<Skillset> = ({icon}) => {
    return(
        <motion.div variants={variants} className="skillset-container">
            <div className="skillset-icon-container">
                {icon}
            </div>
        </motion.div>
    )
}

export default SkillsetButton;