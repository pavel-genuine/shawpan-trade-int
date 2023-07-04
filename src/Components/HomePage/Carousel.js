import { motion } from "framer-motion"
import { Box, Button, IconButton } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import marble from '../../assets/imgs/marble.jpg'
import marblePortugal3 from '../../assets/imgs/marblePortugal3.jpeg'
import marblePortugal2 from '../../assets/imgs/marblePortugal2.jpeg'
import marbleIran from '../../assets/imgs/marbleIran.jpg'
import marbleIran1 from '../../assets/imgs/marbleIran1.jpeg'
import marbleIran2 from '../../assets/imgs/marbleIran3.jpeg'
// import marbleItaly from '../../assets/imgs/marbleItaly.jpg'
import granite from '../../assets/imgs/granite.jpg'
import marbleItaly from '../../assets/imgs/graniteItaly.jpg'
import marbleItaly2 from '../../assets/imgs/marbleItaly2.jpeg'
import nut from '../../assets/Hero/betelnut.jpg'
import nut2 from '../../assets/imgs/nut.jpeg'
import ginger from '../../assets/imgs/ginger2.jpg'

import mung from '../../assets/Hero/mung.webp'
import tamarind from '../../assets/imgs/Tamarind-seeds.jpg'
// import audio from '../../assets/bg.wav'
import Image from 'next/image'
// import Sound from 'react-sound';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

import { LazyLoadImage } from 'react-lazy-load-image-component'

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const slides = [


    {
        description: 'Fresh Ginger From Thailand.',
        des: 'Fresh Ginger ',
        url: ginger.src

    },

    {
        description: 'Betel Nut (whole) From Thailand.',
        des: 'Betel Nut (whole)',
        url: nut2.src
    },
    {
        description: 'Betel Nut (split) From Thailand.',
        des: 'Betel Nut (split)',

        url: nut.src
    },
    {
        description: 'Mung Bean From Thailand.',
        des: 'Mung Bean',

        url: mung.src
    },
    {
        description: 'Tamarind Seed From Thailand.',
        des: 'Tamarind Seed',

        url: tamarind.src
    },

    {
        description: 'Best Marble Block From Portugal.',
        des: 'Marble Portugal',

        url: marble.src
    },
    {
        description: 'Best Marble Block From Portugal.',
        des: 'Marble Portugal',

        url: marblePortugal2.src
    },
    {
        description: 'Best Marble Block From Portugal.',
        des: 'Marble Portugal',

        url: marblePortugal3.src
    },

    {
        description: 'Best Marble Block From Iran.',
        des: 'Marble Iran',

        url: marbleIran.src
    },

    {
        description: 'Best Marble Block From Iran.',
        des: 'Marble Iran',

        url: marbleIran2.src
    },
    {
        description: 'Best Marble Block From Italy.',
        url: marbleItaly2.src
    },
    {
        description: 'Best Marble Block From Italy.',
        des: 'Marble Italy',
        url: marbleItaly.src
    },

    {
        description: 'Introduction',
        des: 'Introduction',

        url: 'https://images.unsplash.com/photo-1523215713844-973398580b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
        description: 'Contact',
        des: 'Contact',

        url: 'https://images.unsplash.com/photo-1523215713844-973398580b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
];

export const OpenMap = ({ setOpenMap }) => {

    const [address, setAddress] = React.useState('Bangkok');

    const handleChange = (event) => {
        setAddress(event.target.value);
    };

    return (
        <div className="bg-bg bg-opacity-50">
            <div className='w-[100%] relative bg-bg h-[56px]'>
                <div className='absolute left-5 '>
                    <IconButton
                        onClick={() => setOpenMap(false)}
                        color="default"
                        className="absolute right-3 top-3 bg-gray-400"
                        aria-label="delete"
                    >
                        <ArrowBackIcon color="primary" />
                    </IconButton>
                </div>
                <div className='w-[200px] absolute right-0 bg-accent  bg-opacity-50'>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <Select
                                style={{ color: 'white' }}
                                defaultValue='Dhaka'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={address}
                                label="Address"
                                onChange={handleChange}
                            >
                                <MenuItem value={'Dhaka'}>Dhaka Office</MenuItem>
                                <MenuItem value={'Bangkok'}>Bangkok Office</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
            {
                address == 'Bangkok'
                    ?
                    <div className='relative'>
                        <motion.div

                            viewport={{ once: true }}
                            initial={{ y: 400 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: .3, delay: 0, }}
                        >
                            <p className=' p-4 text-[grey]  lg:w-[300px] w-[100%] bg-primary  text-sm md:text-md text-[white] absolute bottom-0  right-0'>
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

                                <a className='underline' href="tel:+8801819231662"> +8801819231662</a>,
                                <br />
                                <a className='underline' href="mailto:royalorchid2011@yahoo.com"> royalorchid2011@yahoo.com </a>

                            </p>
                        </motion.div>


                        <iframe
                            className='md:h-[70vh] h-[80vh] w-[100%]'
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15502.648760121112!2d100.588773!3d13.7388905!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e4e8979781d%3A0x6358ed7372c73793!2sS.%20S.%20P.%20Tower%201%20Building!5e0!3m2!1sen!2sbd!4v1685940799609!5m2!1sen!2sbd"
                            width="600"
                            height="450"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    :
                    <div className='relative' >
                        <motion.div

                            viewport={{ once: true }}
                            initial={{ y: 400 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: .3, delay: 0, }}
                        >
                            <p className=' p-4 text-[grey]  lg:w-[300px] w-[100%] bg-primary  text-sm md:text-md text-[white] absolute bottom-0  right-0'>

                                <span className='font-bold underline'>
                                    Swapan Trade International.
                                </span>
                                <br />
                                House 114, Road 2, Block A, Niketon, Gulshan-1, Dhaka 1212, Bangladesh

                                <br />

                                <a className='underline' href="tel:+8801819231662"> +8801819231662 </a>,
                                <br />
                                <a className='underline' href="mailto:royalorchid2011@yahoo.com"> royalorchid2011@yahoo.com </a>

                            </p>
                        </motion.div>
                        <iframe
                            className='md:h-[70vh] h-[80vh]  w-[100%]'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d826.538945471007!2d90.41119738051628!3d23.774951804870295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c777f5bdf6bb%3A0xbaa43dcae03ebcaf!2sNiketan%20Society!5e0!3m2!1sen!2sbd!4v1685943189671!5m2!1sen!2sbd" width="600"
                            height="450"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
            }
        </div>
    )
}


export const ContactUS = ({ setOpenMap }) => {

    return (
        <div className="flex justify-center items-center text-white md:p-[2vw] p-[5vw] h-[100%] w-[100%] relative bg-bg bg-opacity-50 ">
            <div className="relative">
                <h1 className='text-2xl font-semibold md:text-4xl text-center mb-3 md:mb-5'>
                    Contact Us
                </h1>

                <p className='px-7 text-xl lg:text-2xl text-center'>
                    We would like to hear from you.
                </p>
                <div className='flex justify-center items-center mt-3 md:mt-5'>
                    <div className='lg:flex space-y-3 lg:space-y-0 lg:space-x-7  '>
                        <div className=''>
                            <Button size="small" style={{ borderRadius: '68px', backgroundColor: 'black', }} className='lg:w-[200px] w-[150px] h-[40px] md:h-[50px] '
                                startIcon={<EmailIcon></EmailIcon>}
                                variant="outlined">
                                <a href="mailto:royalorchid2011@yahoo.com" className='md:text-xl  font-semibold text-[white]' type="submit" >Email Us</a>
                            </Button>

                        </div>
                        <div>

                            <Button style={{ borderRadius: '68px', backgroundColor: 'black' }} className='lg:w-[200px] w-[150px] h-[40px]  md:h-[50px]'

                                startIcon={<CallIcon></CallIcon>}

                                variant="contained">

                                <a href="tel:+8801819231662" className='md:text-xl  font-semibold text-[white]'>Call Now </a> </Button>

                        </div>

                    </div>

                </div>

                <p className={`${setOpenMap ? '' : 'px-10'} text-[grey] text-center   my-5 text-md md:text-lg text-[white]`}>
                    <span className='font-bold md:text-2xl underline'>
                        Leading exporters :


                    </span>
                    <br />
                    <br />
                    <span className='font-semibold md:text-2xl'>

                        Thai Agri Products company Limited

                    </span>
                    <br />
                    <span className=''>

                        No. 555   S S P TOWER 21st floor
                        soi-63 EkamI  Sukhumvit Road Bangkok 10010 - Thailand🇹🇭


                    </span>

                    <br />
                    <br />
                    <span className='font-semibold md:text-2xl '>
                        Asistance:  Swapan Trade International.
                    </span>
                    <br />
                    <span className=''>

                        Liaison office :
                        Road - 2
                        House -114
                        Block - A
                        Niketan Gulshan
                        Dhaka-1212
                        Bangladesh



                    </span>
                    <br />


                    <a href="tel:+880 1711813933"><span>Call or WhatsApp :</span> <span className='underline'>+8801819231662</span></a>,
                    <br />  <a href="mailto:info@swapantradeint.com"><span>Mail :</span> <span className='underline'>royalorchid2011@yahoo.com</span></a>,
           

                </p>

                {
                    setOpenMap &&
                    <div className="flex justify-center items-center">

                        <Button onClick={() => setOpenMap(true)} size="small" style={{ borderRadius: '68px', backgroundColor: 'grey', }} className='lg:w-[200px] w-[150px] h-[40px] md:h-[50px] '
                            startIcon={<LocationOnIcon></LocationOnIcon>}
                            variant="contained">
                            View On Map
                        </Button>
                    </div>
                }

            </div>
        </div>
    )
}

export const AboutUS = ({ setOpenAbout }) => {

    return (
        <div className="flex justify-center items-center text-white px-[5vw] py-[5vh] h-[100%] w-[100%] bg-bg bg-opacity-50  ">
            <div className="">
                <h1 className='text-5xl  text-center mb-6'>
                    Introduction

                </h1>

                <p className={`text-xl lg:text-2xl text-center ${setOpenAbout ? '' : 'px-[10vw]'}`}>
                    Swapan Trade International (STI) was established in 1996 as a rapidly growing organization, engaging with export, import & trading businesses besides commission agents. We are an associate partner for Thailand-based agro products like fresh ginger, betel nut, and mung bean, and an associate partner for Portugal, Italy  & Iran-based products of the natural marble block. We never compromise quality, quantity & deadline.                </p>
            </div>
        </div>
    )
}



function Carousel() {


    const [currentIndex, setCurrentIndex] = useState(0);

    const [audioStatus, setAudioStatus] = useState(false);
    const [mouseHover, setMouseHover] = useState('not');

    const slideCount = 12;

    const prevSlide = () => {

        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };


    useEffect(() => {


        function cycle(index) {

            setMouseHover('not')
            setTimeout(function () {

                index++;

                goToSlide(index)

                if (index >= slides.length - 1) {
                    index = -1;
                }

                cycle(index);

            }, 4000);
        }

        cycle(-1);


    }, [slides.length])

    return (

        <div>
            <motion.div

                initial={{ opacity: 1, scale: 1.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 4, delay: 0, repeat: Infinity, repeatDelay: 0 }}

                style={{ backgroundImage: `url(${currentIndex < slideCount && slides[currentIndex].url})` }}
                className=' h-[100vh] w-[100vw] z-1 bg-center bg-cover duration-500 flex   items-center '
            >


            </motion.div>



            <div style={{ zIndex: currentIndex < slideCount ? 2 : -2 }} className={`absolute ${currentIndex < slideCount ? ' md:top-[33vh] top-[30vh] left-[2vw]' : 'top-0 right-0'}`}>
                {
                    (currentIndex < slideCount) ?
                        <motion.div
                            initial={{ y: 200, opacity: .5 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: 0, repeat: Infinity, repeatDelay: 3.5 }}
                        >

                            <div className=' px-[5vw] mx-[5vw]  py-[2vh] w-[75vw] md:w-[60vw] flex items-center bg-bg bg-opacity-50 z-10'>

                                <div>
                                    <h1 className='lg:text-[60px] text-[30px] font-semibold text-[white]'>
                                        <p className="">
                                            <span className='text-accent'></span>{slides[currentIndex].description}
                                        </p>
                                    </h1>
                                    <p className='text-[white]  w-[80%] mt-3 text-md lg:text-lg'>
                                        Elevate your experience  with our high-quality products. Choose from a wide range of premium collection.
                                    </p>

                                    <div className='md:flex lg:mt-8 mt-6 md:space-x-[6px] lg:space-x-5 space-y-5 md:space-y-0'>

                                        {/* <a href="https://api.whatsapp.com/send/?phone=8801711813933&text=" target="_blank" rel="noopener noreferrer">

                                    <Button style={{ borderRadius: '68px', backgroundColor: '#1F2937' }} className='bg-bgNav' variant='contained'

                                        startIcon={<WhatsAppIcon style={{ color: '#4ADE80' }} />}
                                    >
                                        Get Started
                                    </Button>
                                </a> */}

                                        {/* <Link href='/about'> */}
                                        {/* <Button className="mt-5 md:mt-0" style={{ borderRadius: '68px', borderColor: 'white' }} variant='outlined'
                                    startIcon={<CrisisAlertIcon style={{ color: '#fff' }} />}
                                >
                                    <p className='text-[white]'>
                                        Learn More
                                    </p>
                                </Button> */}
                                        {/* </Link> */}


                                    </div>
                                </div>

                            </div>


                        </motion.div>
                        :
                        <div className="w-[100vw] ">
                            {
                                currentIndex == slideCount ?
                                    <div className=" flex  relative  ">

                                        <motion.div
                                            className="w-[50vw] bg-accent h-[100vh]"
                                            initial={{ x: -200, opacity: .5 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: .5, delay: 0, }}
                                        >

                                        </motion.div>

                                        <motion.div
                                            className="w-[50vw] bg-[black] h-[100vh]"
                                            initial={{ x: 200, opacity: .5 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: .5, delay: 0, }}
                                        ></motion.div>

                                        <motion.div
                                            className=' flex  items-center justify-center absolute top-0 left-0 w-[100vw] h-[100vh]'
                                            initial={{ y: - 200, opacity: .5 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: .5, delay: 0 }}
                                        >
                                            <AboutUS></AboutUS>
                                        </motion.div>


                                    </div>
                                    :
                                    <div className=" flex flex-row-reverse relative  ">

                                        <motion.div
                                            className="w-[50vw] bg-accent h-[100vh]"
                                            initial={{ x: -200, opacity: .5 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: .5, delay: .1 }}
                                        >

                                        </motion.div>

                                        <motion.div
                                            className="w-[50vw] bg-[black] h-[100vh]"
                                            initial={{ x: 200, opacity: .5 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: .5, delay: .1 }}
                                        ></motion.div>

                                        <motion.div
                                            className=' flex  items-center justify-center absolute top-0 left-0 w-[100vw] h-[100vh]'
                                            initial={{ y: 200, opacity: .5 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: .5, delay: 0, }}
                                        >
                                            <ContactUS></ContactUS>
                                        </motion.div>


                                    </div>
                            }

                        </div>

                }
            </div>


            <div className=' group-hover:block absolute bottom-16 md:bottom-28 -translate-x-0 translate-y-[-50%]  left-[30vw] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className=' group-hover:block absolute bottom-16 md:bottom-28 -translate-x-0 translate-y-[-50%]  right-[30vw] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>



            <div className='absolute right-1 md:right-[10vw] top-[12.5vh] md:top-[15vh] py-2 z-0'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer relative w-[50px]'
                    >
                        {(currentIndex == slideIndex || mouseHover == slideIndex) ?
                            <div style={{ zIndex: -1 }} className=" tooltip absolute left-[-110px] text-sm top-[0px] flex justify-center items-center">

                                <p className="text-sm w-[100px] text-center bg-accent bg-opacity-70 px-2 py-1 rounded text-[white]">{currentIndex == slideIndex ? slides[currentIndex].description : mouseHover == slideIndex && slides[slideIndex].description}</p>

                            </div>
                            : ''}


                        <div onMouseOver={() => setMouseHover(slideIndex)} onMouseLeave={() => setMouseHover('not')} className={`w-[35px] h-[35px] rounded-full my-2  p-[5px]  ${currentIndex == slideIndex ? 'bg-accent bg-opacity-70 ' : 'bg-[#8080809e]'}`}>
                            <LazyLoadImage src={slide.url} className='w-[25px] h-[25px] rounded-full border bg-[white] ' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;