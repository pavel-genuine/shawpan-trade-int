import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import {SunnyMorning } from 'moving-letters'
import ParticlesAnim from './ParticlesAnim'
import { Button } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import Link from 'next/link'

export const Text = ({ text }) => {

  return (
    <div >
      <SunnyMorning text={text} />
    </div>
  )
}




export const Demo = (
  {
    tag1,
    tag2,
    tag3,
    tag4,
    smallTag
  }
) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)


    setTimeout(() => {
      setIsOpen(false)
    }, 2000)

  }, [])


  return (
    <div className='container'>

      <div className='pt-[10%] px-[5vw] h-[100vh] w-[98.8vw] bg-[black] bg-opacity-60'>

        <div className=''>

          <h1 className='text-[60px] font-semibold text-[white]'>
            <span className='text-accent'>{tag1} {' '}</span>{tag2}
            <br />
            <span>{tag3}</span>
            <span className='text-accent'>.</span>
            <br />
            {tag4}<span className='text-accent'>.</span>
          </h1>
          <p className='text-[white] w-[40%] mt-5'>
            {
              smallTag
            }
          </p>

          <div className='flex mt-8 space-x-5'>

            <a href="https://api.whatsapp.com/send/?phone=8801711813933&text=" target="_blank" rel="noopener noreferrer">

              <Button style={{ borderRadius: '68px' }} className='bg-[black]' variant='contained'

                startIcon={<WhatsAppIcon style={{ color: '#4ADE80' }} />}
              >
                Get Started
              </Button>
            </a>

            <Link href='/about'>
              <Button style={{ borderRadius: '68px' }}  variant='outlined'
                startIcon={<CrisisAlertIcon style={{ color: '#fff' }} />}
              >
               <p className='text-[white]'>
               Learn More
               </p>
              </Button>
            </Link>

           
          </div>
          
        </div>

        <div className='mt-[70px] text-[white]'>
            <div className='flex justify-between font-semibold text-md'>
              <p>
                <span className='text-[orange]'>
                  +5000
                </span>  Wholesale Orders Worldwide
              </p>
              <p>
              <span className='text-[orange]'>
                  +20
                </span>  Countries
              </p>
              <p>
             
                Operating Since  <span className='text-[orange]'>
                  2006
                </span> 
              </p>
            </div>
            </div>
      </div>

      <div className='pic' id='pic3' />
      <div className='pic' id='pic2' />
      <div className='pic' id='pic1' />
    </div>
  );
};



const HomePage = ({ setIsHome, brand, tag1, tag2, tag3, tag4, smallTag }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [background, setBackground] = useState(false)


  const handleScroll = () => {
    const element = document.getElementById('section');

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {

    const changeBackground = () => {

      if (window.scrollY >= 200) {
        setBackground(true)
        // handleScroll()

      } else {
        setBackground(false)

      }
    }

    window.addEventListener('scroll', changeBackground)

    setIsHome(true)

    setTimeout(() => {
      setIsOpen(true)
    }, 1300)

  }, [])

  return (
    <div className=' '>
      <div className='w-[100%] mx-auto lg:h-[100vh] h-[93vh]  '>
        {!background &&
          <div className='absolute z-10 h-[100vh] overflow-hidden'>
            {/* <ParticlesAnim></ParticlesAnim> */}
          </div>}
        {
          <div className='relative'>

            <div className='z-0 '>
              <Demo
                tag1={tag1}
                tag2={tag2}
                tag3={tag3}
                tag4={tag4}
                smallTag={smallTag}
              ></Demo>
            </div>

            <div className='cursor-pointer' onClick={() => handleScroll()}>
              <motion.div
                className=' text-[white] absolute  font-bold z-10 lg:top-[92%] top-[87%] lg:left-[47.3%] left-[40%]  '
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: 1, }}
              >
                <p className='  text-lg font-bold text-[white] text-center mb-[-12px]'>
                  scroll
                </p>
                <marquee behavior="scroll" direction='right'>
                  <div className=' bg-[white] h-[2px] w-[75px]'>

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