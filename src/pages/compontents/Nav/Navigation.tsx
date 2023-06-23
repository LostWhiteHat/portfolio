import { motion } from "framer-motion";
import HomeButton from "../buttons/HomeButton";
import ProjectButton from "../buttons/ProjectButton";
import AboutmeButton from "../buttons/AboutmeButton";
import GithubButton from "../buttons/GithubButton";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.07, staggerDirection: -0.1 }
  }
};

const liVariants = {
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

const MenuItem = ({i}) => {
  const items: JSX.Element[] = [<HomeButton />, <ProjectButton/>, <AboutmeButton/>, <GithubButton/>];
   return (
    <motion.li variants={liVariants}>
      {items[i]}
    </motion.li>
  );
}

export const Navigation = () => (
  <motion.ul variants={variants} className="absolute top-48 left-2">
    {itemId.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemId = [0, 1, 2, 3];