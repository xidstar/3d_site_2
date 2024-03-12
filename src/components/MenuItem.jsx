/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { NavLink } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF", "#00ff2f"];
const pages = ["Home", "Training & Events", "Storefront & Aquisition Tools", "Contract Holders & Industry Providers", "About SEWP", "Procurement Policy & Regulation"]
const links = ["", "training", "storefront", "contract-holders", "about-sewp", "procurement"]

const MenuItem = ({i}) => {
  const snap = useSnapshot(state);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const style = { color:` ${colors[i]}` };
  const text = pages[i];
  const link = links[i];

  const closeMenu = () => {
    state.isMenuOpen = false;
    console.log(snap.isMenuOpen);
  }


  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={`text-placeholder font-semibold mb-10 hover:text-[${style}]`}>
      
        <NavLink to={`/${link}`} className={({ isActive }) => isActive ? "text-blue-500" : "text-black"} onClick={closeMenu}>
          {text}
        </NavLink>
        
      </div>
    </motion.li>
  );
};

export default MenuItem;