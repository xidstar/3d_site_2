/* eslint-disable no-unused-vars */
import React from 'react';

import { useSnapshot } from "valtio";
import state from "../store";
import SideMenu from './SideMenu';
import MenuBtn from './MenuBtn';


const TopNav = () => {
    

    return (
        <div className='relative top-0 left-0 right-0 w-full h-[100px] flex items-center justify-between z-[100] px-5'>
            <MenuBtn />
            <SideMenu />
            <input type="search" placeholder='Search' className='relative h-[2rem] rounded-md p-5' />
        </div>
    )
}

export default TopNav