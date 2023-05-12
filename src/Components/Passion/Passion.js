import React from 'react'

import { motion } from "framer-motion"
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';


const Passion = ({ career, csr, passion, passionTag }) => {
    return (
        <div className='bg-navBg py-5 h-[75vh] overflow-hidden  px-[5vw]' >

            <div className='flex lg:flex-row flex-col-reverse'>

                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: .5, scale: .9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .7, delay: 0 }}
                >
                    <div className='bg-navBg text-[white] w-[80%]  mt-[-40px] lg:mt-0 lg:w-[50vw]  lg:h-[70vh]'>
                        <h1 className=' lg:text-5xl text-2xl font-bold mb-5 mt-5 lg:mt-20'>

                            {
                                passion
                            }{' '}
                            <span className='text-accent'>
                                .
                            </span>
                        </h1>
                        <div className='w-[100px] h-[3px] bg-accent mb-10 lg:mb-10 '>

                        </div>

                        <p className='text-lg lg:text-xl mb-10 '>
                            {
                                passionTag
                            }
                        </p>

                        <Link href='/about'>
                            <Button style={{ borderRadius: '68px' }} className='border-accent text-accent' variant='outlined'
                                startIcon={<CrisisAlertIcon style={{ color: '#4ADE80' }} />}
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
                    initial={{ opacity: .5, scale: .9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .5, delay: 0 }}
                >

                    <Image
                        className={`h-[50vh] lg:h-[70vh] mx-auto p-[8%] `}
                        alt={'brand'}
                        height={500}
                        width={900}
                        // fill
                        src={career ?
                            "https://i.ibb.co/1ZhSdV0/Screenshot-2023-04-14-191645.png"
                            : csr ? "https://i.ibb.co/ss39dQX/Screenshot-2023-04-15-000831.png"
                                :
                                "https://i.ibb.co/8cdj540/Screenshot-2023-04-14-115857.png"}                    // width={}
                    />

                    {/* <img loading='lazy' className={`h-[50vh] lg:h-[70vh] mx-auto `}
                        src={career ?
                            "https://i.ibb.co/1ZhSdV0/Screenshot-2023-04-14-191645.png"
                            : csr ? "https://i.ibb.co/ss39dQX/Screenshot-2023-04-15-000831.png"
                                :
                                "https://i.ibb.co/8cdj540/Screenshot-2023-04-14-115857.png"} alt="" /> */}

                </motion.div>

            </div>
        </div>
    )
}

export default Passion