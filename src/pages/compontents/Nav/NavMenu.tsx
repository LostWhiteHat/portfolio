import { useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "./useDimensions";
import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { BurgerMenu } from "./BurgerMenu";

const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 52px 52px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 52px 52px)",
      transition: {
        delay: 0.3,
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
        <motion.nav initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef} className="absolute top-0 left-0 bottom-0 w-28">
            <motion.div className="fixed top-0 left-0 bottom-0 w-28 bg-footcolor shadow-2xl shadow-black" variants={sidebar}/>
            <Navigation />
            <BurgerMenu toggle={() => toggleOpen()}/>
        </motion.nav>
    )
}