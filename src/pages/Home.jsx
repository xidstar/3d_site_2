/* eslint-disable no-unused-vars */
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import { about, contract, industry, procurement, storefront, training } from '../assets'
import { NavLink } from 'react-router-dom';
import { useSnapshot } from "valtio";
import state from "../store";

import {
  headContentAnimation,
  cardVariants,
  slideAnimation,
  fadeAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);
  

  // Show the follower when mouse enters
  const handleMouseEnter = () => {
    state.isVisible = true;
  };

  // Hide the follower when mouse leaves
  const handleMouseLeave = () => {
    state.isVisible = false;
  };

  // Hide the follower when image is clicked
  const handleClick = () => {
    state.isVisible = false;
  };

  return (
    <section className="full-page flex flex-col">
      <AnimatedText text="Home of the Government&apos;s Premier IT Contracts" />

      <AnimatePresence>
        <div className="images container-fluid">
          <div className="row flex flex-col sm:flex-row justify-between">
            <motion.div 
              className="relative img-container img-left sm:w-[45%]" 
              initial="initial" 
              whileHover="animate"
              animate="exit"
              viewport={{ once: true, amount: 0.8 }}
            >
              <NavLink to="/training">
                <motion.img
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} 
                  onClick={handleClick}
                  className='rounded-md' 
                  src={training} 
                  alt="Training & Events" 
                  variants={cardVariants("left")}
                />
                <motion.h3 
                className='absolute top-[20%] -right-[10rem] text-4xl font-medium drop-shadow-lg text-slate-600'
                variants={slideAnimation("left")}
              >
                Training & Events
              </motion.h3>
              </NavLink>

              <p className='relative z-2 font-black -mt-10 text-6xl'>01</p>
            </motion.div>


            <motion.div 
              className="relative img-container img-right sm:w-[45%] mt-[40vh]"
              initial="initial" 
              whileHover="animate"
              animate="exit"
            >
              <NavLink to="/storefront" >
              <motion.img
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} 
                  onClick={handleClick}
                  className='rounded-md' 
                  src={storefront} 
                  alt="Storefront & Acquisition Tools" 
                  variants={cardVariants("right")}
                />
                <motion.h3 
                  className='absolute top-[50%] -left-[30%] text-4xl font-medium drop-shadow-lg text-slate-600'
                  variants={slideAnimation("right")}
                >
                  Storefront & <br />  Acquisition Tools
                </motion.h3>
              </NavLink>
              
              <p className='relative z-2 font-black -mt-10 text-6xl'>02</p>
            </motion.div>
          </div>

          <div className="row flex flex-col sm:flex-row justify-between">
            <motion.div 
              className="relative img-container img-left sm:w-[45%]" 
              initial="initial" 
              whileHover="animate"
              animate="exit"
            >
              <NavLink to="/contract-holders" >
              <img
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} 
                  onClick={handleClick}
                  className='transition-all rounded-md' 
                  src={contract} 
                  alt="Contract Holders & Industry Providers" 
                />
                <motion.h3 
                  className='absolute top-[20%] -right-[16rem] text-4xl font-medium drop-shadow-lg text-slate-600'
                  variants={slideAnimation("left")}
                >
                  Contract Holders <br /> & Industry Providers
                </motion.h3>
              </NavLink>

              

              <motion.p className='relative z-2 font-black -mt-10 text-6xl'>03</motion.p>
            </motion.div>

            <motion.div 
              className="relative img-container img-right sm:w-[45%] mt-[40vh]"
              initial="initial" 
              whileHover="animate"
              animate="exit"
            >
              <NavLink to="/about-sewp" >
              <motion.img
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} 
                  onClick={handleClick}
                  className='transition-all rounded-md' 
                  src={about} 
                  alt="About SEWP" 
                  variants
                />
                <motion.h3 
                  className='absolute top-[50%] -left-[20%] text-4xl font-medium drop-shadow-lg text-slate-600'
                  variants={slideAnimation("right")}
                >
                  About SEWP
                </motion.h3>
              </NavLink>
              
              <p className='relative z-2 font-black -mt-10 text-6xl'>04</p>
            </motion.div>
          </div>

          <div className="row flex flex-col sm:flex-row justify-between">
          <motion.div 
              className="relative img-container img-left sm:w-[45%]" 
              initial="initial" 
              whileHover="animate"
              animate="exit"
            >
              <NavLink to="/procurement" >
              <motion.img
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} 
                  onClick={handleClick}
                  className='rounded-md' 
                  src={industry} 
                  alt="Procurement Policy & Regulation" 
                  variants={cardVariants("left")}
                />
                <motion.h3 
                  className='absolute top-[35%] -right-[16rem] text-4xl font-medium drop-shadow-lg text-slate-600'
                  variants={slideAnimation("left")}
                >
                Procurement Policy <br /> & Regulation
                </motion.h3>
              </NavLink>

              

              <motion.p className='relative z-2 font-black -mt-10 text-6xl'>05</motion.p>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
      
    </section>
  )
}

export default Home