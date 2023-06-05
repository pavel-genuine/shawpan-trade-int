import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

import Link from 'next/link'

import Carousel from './Carousel';




const HomePage = ({ brand, tag1, tag2, tag3, tag4, smallTag }) => {

  const handleScroll = () => {
    const element = document.getElementById('section');

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div className=' '>
      <div className='w-[100%] mx-auto h-[100vh] '>

        {
          <div className='relative'>
            <div>
              <Carousel></Carousel>
            </div>

            <div className='cursor-pointer hidden lg:block lg:rotate-90 absolute text-[white] lg:text-lg font-bold text-[white] text-center  font-bold z-10 lg:top-[48vh]  right-[40%] lg:right-[5vw]' onClick={() => handleScroll()}>
              <motion.div
                className='   '
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: 1, }}
              >
                <p className='   mb-[-12px]'>
                  scroll
                </p>
                <marquee behavior="scroll" direction='right'>
                  <div className=' bg-[white] h-[2px] w-[60px] lg:w-[75px]'>

                  </div>
                </marquee>


              </motion.div>

            </div>

          </div>
        }

      </div>

    </div>
  )
}

export default HomePage