import React, { useEffect } from 'react'

import { motion } from "framer-motion"
import { Button } from '@mui/material'
import Head from 'next/head'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Contact = () => {

    const [address, setAddress] = React.useState('Dhaka');

    const handleChange = (event) => {
        setAddress(event.target.value);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (

        <div>
            <Head>
                <title>Contact | Swapan Trade International</title>
                <meta property="og:title" content="Swapan Trade International" />
                <meta
                    name="og:description"
                    content="Phone:+880 1711813933, Email:info@swapantradeint.com"
                />
                {/* <meta property="og:type" content="video.movie" /> */}
                {/* <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" /> */}
                {/* <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" /> */}

            </Head>

            <div className='w-[100%]'>

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
                        <div className='flex justify-center items-center h-[100vh] w-[100vw] bg-[black] bg-opacity-40 overflow-hidden'>
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
                                            <Button style={{ borderRadius: '68px', backgroundColor: 'black' }} className='lg:w-[200px] w-[50vw] h-[50px] bg-[black]  '
                                                startIcon={<EmailIcon></EmailIcon>}
                                                variant="contained">
                                                <a href="mailto:info@Swapantradeint.com" className='text-xl font-bold text-[white]' type="submit" >Email Us</a>
                                            </Button>

                                        </div>
                                        <div>

                                            <Button style={{ borderRadius: '68px', backgroundColor: 'black' }} className='lg:w-[200px] w-[50vw] bg-[black]  h-[50px] '

                                                startIcon={<CallIcon></CallIcon>}

                                                variant="contained">

                                                <a href="tel:+880 1711813933" className='text-xl font-bold text-[white]'>Call Now </a> </Button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                    <LazyLoadImage className='h-[100vh] w-[100%]' src="https://i.ibb.co/PxHYmK2/Screenshot-2023-04-14-162210.png" alt="" />
                </motion.div>


                <div className='w-[100%] relative bg-bg h-[60px]'>
               <div className='w-[200px] absolute right-0 bg-accent'>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <Select
                            defaultValue='Dhaka'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={address}
                                label="Address"
                                onChange={handleChange}
                            >
                                <MenuItem value={'Dhaka'}>Dhaka</MenuItem>
                                <MenuItem value={'Bangkok'}>Bangkok</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
               </div>

                {
                    address =='Bangkok'
                    ?
                    <div>
                    <motion.div
                        className='relative'
                        viewport={{ once: true }}
                        initial={{ y: 400 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: .7, delay: 0, }}
                    >
                        <p className='text-[grey]  lg:w-[300px] w-[60vw] bg-primary p-4 text-sm md:text-md text-[white] absolute top-0  right-0'>
                            <span className='font-bold underline'>
                                Thai Agre Products Company Ltd.
                            </span>
                            <br />
                            <span className='font-bold underline'>
                                Swapan Trade International.
                            </span>
                            <br />
                            SSP Tower,
                            21th foor,
                            Soi Sukhumvit 63, Ekkamai Road, Bangkok 10110, Thailand
                            <br />

                            <a className='underline' href="tel:+880 1711813933">   +880xxxxxxx </a>,
                            <br />
                            <a className='underline' href="mailto:info@swapantradeint.com"> info@swapantradeint.com </a>

                        </p>
                    </motion.div>


                    <iframe
                        className='h-[90vh] w-[100%]'
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15502.648760121112!2d100.588773!3d13.7388905!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e4e8979781d%3A0x6358ed7372c73793!2sS.%20S.%20P.%20Tower%201%20Building!5e0!3m2!1sen!2sbd!4v1685940799609!5m2!1sen!2sbd"
                        width="600"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
:
                <div>
                    <motion.div
                        className='relative'
                        viewport={{ once: true }}
                        initial={{ y: 400 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: .7, delay: 0, }}
                    >
                        <p className='text-[grey]  lg:w-[300px] w-[60vw] bg-primary p-4 text-sm md:text-md text-[white] absolute top-0  right-0'>

                            <span className='font-bold underline'>
                                Swapan Trade International.
                            </span>
                            <br />
                            House 114, Road 2, Block A, Niketon, Gulshan-1, Dhaka 1212, Bangladesh

                            <br />

                            <a className='underline' href="tel:+880 1711813933">   +880xxxxxxx </a>,
                            <br />
                            <a className='underline' href="mailto:info@swapantradeint.com"> info@swapantradeint.com </a>

                        </p>
                    </motion.div>
                    <iframe
                        className='h-[90vh] w-[100%]'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d826.538945471007!2d90.41119738051628!3d23.774951804870295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c777f5bdf6bb%3A0xbaa43dcae03ebcaf!2sNiketan%20Society!5e0!3m2!1sen!2sbd!4v1685943189671!5m2!1sen!2sbd" width="600"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
                }
            </div>
        </div>


    )
}

export default Contact