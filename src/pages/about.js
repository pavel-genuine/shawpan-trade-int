import React, { useEffect } from 'react'

import { motion } from "framer-motion"
import { Button } from '@mui/material'
import MissionVision from '@/Components/MissionVission/MissionVission'
import Head from 'next/head'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Head>
                <title>About | Swapan Trade International</title>
                <meta property="og:title" content="Swapan Trade International" />
                <meta
                    name="og:description"
                    content="Swapan Trade International"
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
                        <div className='flex justify-center items-center h-[100vh] w-[100vw] bg-[black] bg-opacity-40'>
                            <div>
                                <h1 className='text-5xl  text-center mb-4'>
                                    About Us

                                </h1>

                                <p className='text-xl lg:text-2xl text-center px-7'>
                                    Swapan Trade International established in 1996 a rapidly growing conglomerate, engage with export, import & trading business beside comission agent. We are associate partner ThaiLand based agro products like fresh ginger, betel nut, mung bean, refined sugar and associate partner Portugal, Italy, Iran & Turkey based products of natural marble block and granite block. We never compromise quality , quantity & deadline.
                                </p>
                            </div>
                        </div>

                    </motion.div>
                    <LazyLoadImage className='w-[100vw] h-[100vh]' src="https://i.ibb.co/LQdTQhG/Fiduciary-Responsibility-Board-of-Directors-ESG-1.jpg" alt="" />
                </motion.div>
                <MissionVision></MissionVision>

            </div>
        </div>

    )
}

export default About