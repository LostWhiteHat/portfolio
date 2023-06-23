import { motion } from "framer-motion";
import Link from "next/link";
import SI from "react-icons/si"
import React from 'react'
import { Button } from "@/types/button";

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

const NavButton: React.FC<Button> = ({link, icon, text, target}) => {
    return ( 
        <motion.li variants={variants}>
            <Link href={`${link}`} target={target ? target : ''}>
                <div className="sidebar-icon group">
                    <div>
                        {icon}
                    </div>
                    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
                </div>
            </Link>
        </motion.li>
    )
}

export default NavButton