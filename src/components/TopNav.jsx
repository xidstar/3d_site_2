/* eslint-disable no-unused-vars */
import React from 'react';

import { useSnapshot } from "valtio";
import state from "../store";
import SideMenu from './SideMenu';
import MenuBtn from './MenuBtn';
import PageLinks from './PageLinks';
import Logo from './Logo';


const TopNav = () => {
    

    return (
        <div className='fixed top-0 left-0 right-0 w-full bg-[#fff] flex flex-col z-[100] p-5 shadow-xl'>
            <div className="top w-full flex items-center justify-between">
                <MenuBtn />
                <SideMenu />
                <Logo className="hidden sm:flex" />
                <input type="search" placeholder='Search' className='relative h-[2rem] rounded-md p-5 bg-slate-100' />
            </div>
            <PageLinks />
            
           
        </div>
    )
}

export default TopNav