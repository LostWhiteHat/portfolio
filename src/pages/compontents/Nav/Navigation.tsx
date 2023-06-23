import React from "react";
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

const items: JSX.Element[] = [
  <HomeButton key={1}/>, 
  <ProjectButton key={2}/>, 
  <AboutmeButton key={3}/>, 
  <GithubButton key={4}/>
];

type RequiredProps = {
 i: number;
}

const MenuItem: React.FC<RequiredProps> = ({i}) => {
  
   return (
    <motion.li variants={liVariants}>
      {items[i]}
    </motion.li>
  );
}

const Navigation: React.FC = () => (
  <motion.ul variants={variants} className="absolute top-48 left-2">
    {itemId.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemId = [0, 1, 2, 3];

export default Navigation;