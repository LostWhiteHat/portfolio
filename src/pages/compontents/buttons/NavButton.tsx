import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Button } from "@/types/types";

const variants = {
  open: {
    y: 0,
    display: "block",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    display: "none",
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const NavButton: React.FC<Button> = ({ link, icon, text, target, toggle }) => {
  return (
    <motion.li variants={variants} onClick={toggle}>
      <Link href={`${link}`} target={target ? target : ""}>
        <div className="sidebar-icon group">
          <div>{icon}</div>
          <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
        </div>
      </Link>
    </motion.li>
  );
};

export default NavButton;
