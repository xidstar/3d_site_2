/* eslint-disable no-unused-vars */
import React from 'react';
import { useSnapshot } from "valtio";
import state from "../store";
import { SlMenu } from "react-icons/sl";
import { GrClose } from "react-icons/gr";

const MenuBtn = () => {
    const snap = useSnapshot(state);

    const toggleMenu = () => {
        state.isMenuOpen = !snap.isMenuOpen;
    }

    return (
        <div className={`circle top-3 z-20 bg-white rounded-full flex md:hidden items-center justify-center ${snap.isMenuOpen ? "w-14 h-14" : "w-14 h-14" }`}>
            <button className='text-2xl' onClick={toggleMenu}>
                {snap.isMenuOpen ? <GrClose /> : <SlMenu /> }
            </button>
        </div>
    )
}

export default MenuBtn