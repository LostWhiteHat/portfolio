import * as React from "react";
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
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const MenuItem = ({i}) => {
    const items: JSX.Element[] = [<HomeButton/>, <ProjectButton/>, <AboutmeButton/>, <GithubButton/>];
    return (items[i]);
}

export const Navigation = () => (
  <motion.ul variants={variants} className="absolute m-0 p-6 top-24 w-24">
    {itemId.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemId = [0, 1, 2, 3, 4];