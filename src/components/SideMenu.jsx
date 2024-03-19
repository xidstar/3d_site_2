/* eslint-disable no-unused-vars */
import React from 'react'
import { useSnapshot } from "valtio";
import state from "../store";
import Navigation from './Navigation';
import { motion, useCycle } from "framer-motion";


const SideMenu = () => {
    const snap = useSnapshot(state);

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

      const [isOpen] = useCycle(true);

    return (
        <>
            {snap.isMenuOpen && (
                <div className='fixed w-[500px] h-full top-0 left-0 z-10 overflow-hidden'>
                    <motion.nav
                        animate={isOpen ? "open" : "closed"}
                    >
                        <motion.div className="background" variants={sidebar} />
                        <Navigation />
                    </motion.nav>
                    {/* <Navigation /> */}
                </div>
            )}
        </>
    )
}

export default SideMenu;