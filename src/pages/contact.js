import React, { useEffect } from 'react'

import { motion } from "framer-motion"
import { Button } from '@mui/material'
import Head from 'next/head'

const Contact = ({ setIsHome }) => {

    useEffect(() => {
        setIsHome(false)
        window.scrollTo(0, 0)
    }, [])

    return (

        <div>
            <Head>
                <title>Contact | Rainbow Tex</title>
                <meta property="og:title" content="Contact" />
                <meta
                    name="og:description"
                    content="Phone:+880 1711813933, Email:info@rainbowtexbd.com"
                />
                {/* <meta property="og:type" content="video.movie" /> */}
                {/* <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" /> */}
                {/* <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" /> */}

            </Head>

            <div>

                <motion.div
                    viewport={{ once: true }}
                    initial={{ y: 300, opacity: .5 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: .2, }}
                >
                    <motion.div
                        className=' text-[white] absolute  font-bold'
                        viewport={{ once: true }}
                        initial={{ y: 300, opacity: .5 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0, }}
                    >
                        <div className='flex justify-center items-center h-[100vh] w-[98.8vw] bg-[black] bg-opacity-40 overflow-hidden'>
                            <div>
                                <h1 className='text-4xl text-center mb-4'>
                                    Contact Us
                                </h1>

                                <p className='px-7 text-xl lg:text-2xl text-center'>
                                    We would like to hear from you.
                                </p>
                                <div className='flex justify-center items-center mt-7'>
                                    <div className='lg:flex space-y-7 lg:space-y-0 lg:space-x-7  '>
                                        <div className=''>
                                            <Button className='lg:w-[200px] w-[50vw] h-[50px] bg-[black]  ' variant="contained">
                                                <a href="mailto:info@rainbowtexbd.com" className='text-xl font-bold text-[white]' type="submit" >Email Us</a>
                                            </Button>

                                        </div>
                                        <div>

                                            <Button className='lg:w-[200px] w-[50vw] bg-[black]  h-[50px]' variant="contained">
                                                <a href="tel:+880 1711813933" className='text-xl font-bold text-[white]'>Call Now </a> </Button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                    <img className='h-[100vh] w-[100vw]' src="https://i.ibb.co/PxHYmK2/Screenshot-2023-04-14-162210.png" alt="" />
                </motion.div>


                <div className='h-[20px] w-[98.8vw] bg-black'>

                </div>

                <motion.div
                    className='relative'
                    viewport={{ once: true }}
                    initial={{ y: 400 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: .7, delay: 0, }}
                >
                    <p className='text-[grey]  lg:w-[300px] w-[60vw] bg-primary p-4 text-sm md:text-md text-[white] absolute top-0  right-[2.5px]'>
                        <span className='font-bold underline'>
                            Rainbow Tex
                        </span>
                        <br />

                        House 02 (1st Floor),

                        Road 04,

                        Sector 09, Uttara,

                        Dhaka-1230, Bangladesh,
                        <br />

                        <a className='underline' href="tel:+880 1711813933">   +880 1711813933 </a>,
                        <br />
                        <a className='underline' href="mailto:info@rainbowtexbd.com"> info@rainbowtexbd.com </a>

                    </p>
                </motion.div>

                <iframe
                    className='h-[90vh] w-[98.8vw]'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.44960270445!2d90.39534759612782!3d23.875892169183025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c512c5f6dfa9%3A0xb0e6bea5839417e2!2sRainbow%20Tex!5e0!3m2!1sen!2sbd!4v1682220675459!5m2!1sen!2sbd"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>


    )
}

export default Contact