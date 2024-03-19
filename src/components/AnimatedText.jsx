/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import SplitText from './SplitText';

const AnimatedText = ({text}) => {

  return (
    <h1 className='text-3xl md:text-8xl text-slate-700 md:tracking-tight md:leading-[1.10] font-semibold pt-5 '>
        <AnimatePresence>
            <motion.div
              initial={{ opacity: 1}}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SplitText
                initial={{ y: '100%' }}
                animate="visible"
                variants={{
                  visible: i => ({
                    y: 0,
                    transition: {
                      delay: i * 0.15
                    }
                  })
                }}
              >
                {text}
              </SplitText>
            </motion.div>
        </AnimatePresence>
      </h1>
  )
}

export default AnimatedText