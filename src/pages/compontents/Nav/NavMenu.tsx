import { useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "./useDimensions";
import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { BurgerMenu } from "./BurgerMenu";

const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

export const NavMenu = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef} className="absolute top-0 left-0 bottom-0 w-24">
            <motion.div className="absolute top-0 left-0 right-0 w-24" variants={sidebar}>
                <Navigation />
                <BurgerMenu toggle={() => toggleOpen()}/>
            </motion.div>
        </motion.nav>
    )
}