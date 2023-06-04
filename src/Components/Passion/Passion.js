import React from 'react'
import img from '../../assets/imgs/passion.jpeg'

import { motion } from "framer-motion"
import Link from 'next/link';
import { Button } from '@mui/material';

import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import Image from 'next/image';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Passion = ({ career, csr, passion, passionTag }) => {
    return (
        <div className='bg-bg  lg:h-[75vh] overflow-hidden  px-[5vw]' >

            <div className='flex lg:flex-row flex-col-reverse'>

                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: .5, scale: .5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .7, delay: 0 }}
                >
                    <div className=' text-[white] text-center lg:text-left  mt-[-40px] lg:mt-0 lg:w-[50vw]  lg:h-[70vh] lg:py-20'>
                        <h1 className=' lg:text-5xl text-[25px] font-semibold lg:font-bold mb-5 mt-5 lg:mt-20'>

                            {
                                passion
                            }{' '}
                            <span className='text-accent'>
                                .
                            </span>
                        </h1>
                        <div className='w-[200px] mx-auto lg:mx-0 h-[3px] bg-accent mb-10 lg:mb-10 '>

                        </div>

                        <p className='text-lg lg:text-xl mb-10 '>
                            {
                                passionTag
                            }
                        </p>

                        <Link href='/about.'>
                            <Button style={{ borderRadius: '68px' }} className='border-accent text-accent' variant='outlined'
                                startIcon={<CrisisAlertIcon style={{ color: '#ff5926' }} />}
                            >
                                <p className='text-accent'>
                                    Learn More
                                </p>
                            </Button>
                        </Link>
                    </div>

                </motion.div>

                <motion.div
                    className='relative'
                    viewport={{ once: true }}
                    initial={{ opacity: .5, scale: .7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .5, delay: 0 }}
                >

                    <LazyLoadImage

                        className={`h-[40vh] lg:h-[70vh] mx-auto lg:py-[8%] lg:pl-[8%] py-8 grayscal `}
                        alt={'brand'}

                        src={img.src} />

                   
                </motion.div>

            </div>
        </div>
    )
}

export default Passion