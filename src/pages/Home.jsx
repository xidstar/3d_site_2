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
          
          <div className="row flex flex-col md:flex-row justify-between">
            <motion.div 
              className="relative img-container img-left md:w-[45%]" 
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
                  className='transition-all rounded-md' 
                  src={training} 
                  alt="Training & Events" 
                  // variants={cardVariants("left")}
                />
                <motion.h3 
                  className='absolute -top-2 md:top-[20%] md:-right-[10rem] md:text-5xl text-2xl font-medium drop-shadow-lg text-slate-600'
                  // variants={slideAnimation("left")}
                >
                  Training & Events
                </motion.h3>
              </NavLink>

              < motion.p className='relative z-2 font-black -mt-16 text-6xl inline-block' variants={headContentAnimation}>01</motion.p>
            </motion.div>


            <motion.div 
              className="relative img-container img-right md:w-[45%] md:mt-[40vh]"
              initial="initial" 
              whileHover="animate"
              animate="exit"
            >
              <NavLink to="/storefront" >
              <motion.img
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} 
                  onClick={handleClick}
                  className='transition-all rounded-md' 
                  src={storefront} 
                  alt="Storefront & Acquisition Tools" 
                  // variants={cardVariants("right")}
                />
                <motion.h3 
                  className='absolute top-0 md:top-[50%] md:-left-[30%] text-2xl md:text-5xl font-medium drop-shadow-lg text-slate-600'
                  // variants={slideAnimation("right")}
                >
                  Storefront & <br />  Acquisition Tools
                </motion.h3>
              </NavLink>
              
              <motion.p className='relative z-2 font-black -mt-16 text-6xl inline-block' variants={headContentAnimation}>02</motion.p>
            </motion.div>
          </div>

          <div className="row flex flex-col md:flex-row justify-between">
            <motion.div 
              className="relative img-container img-left md:w-[45%]" 
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
                  className='absolute top-0 md:top-[20%] md:-right-[16rem] text-2xl md:text-5xl font-medium drop-shadow-lg text-slate-600'
                  // variants={slideAnimation("left")}
                >
                  Contract Holders <br /> & Industry Providers
                </motion.h3>
              </NavLink>

              

              <motion.p className='relative z-2 font-black -mt-16 text-6xl inline-block' variants={headContentAnimation}>03</motion.p>
            </motion.div>

            <motion.div 
              className="relative img-container img-right md:w-[45%] md:mt-[40vh]"
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
                  className='absolute top-0 md:top-[50%] md:-left-[20%] text-2xl md:text-5xl font-medium drop-shadow-lg text-slate-600'
                  // variants={slideAnimation("right")}
                >
                  About SEWP
                </motion.h3>
              </NavLink>
              
              <motion.p className='relative z-2 font-black -mt-16 text-6xl inline-block' variants={headContentAnimation}>04</motion.p>
            </motion.div>
          </div>

          <div className="row flex flex-col md:flex-row justify-between">
            <motion.div 
              className="relative img-container img-left md:w-[45%]" 
              initial="initial" 
              whileHover="animate"
              animate="exit"
            >
              <NavLink to="/procurement" >
              <motion.img
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} 
                  onClick={handleClick}
                  className='transition-all rounded-md' 
                  src={industry} 
                  alt="Procurement Policy & Regulation" 
                  // variants={cardVariants("left")}
                />
                <motion.h3 
                  className='absolute top-0 md:top-[35%] md:-right-[16rem] text-2xl md:text-5xl font-medium drop-shadow-lg text-slate-600'
                  // variants={slideAnimation("left")}
                >
                Procurement Policy <br /> & Regulation
                </motion.h3>
              </NavLink>

              

              <motion.p className='relative z-2 font-black -mt-16 text-6xl inline-block' variants={headContentAnimation}>05</motion.p>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
      
    </section>
  )
}

export default Home