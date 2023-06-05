import { motion } from "framer-motion"
import { Button } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import marble from '../../assets/imgs/marble.jpg'
import granite from '../../assets/imgs/granite.jpg'
import nut from '../../assets/imgs/nut.jpg'
import ginger from '../../assets/imgs/ginger.jpg'
import mung from '../../assets/imgs/mung.jpeg'
import tamarind from '../../assets/imgs/tamarind.jpg'
import Image from 'next/image'
import { LazyLoadImage } from 'react-lazy-load-image-component'


function Carousel() {
    const slides = [
        {
            description: 'Marble',
            url: marble.src
        },
        {
            description: 'Granite',

            url: granite.src
        },
        {
            description: 'Fresh Ginger',

            url: 'https://a-z-animals.com/media/2023/03/shutterstock_1577589430-1024x683.jpg'
        },

        {
            description: 'Betel Nut',

            url: 'https://rehmonnya.org/wp-content/uploads/2022/12/betel-nut.jpg'
        },
        {
            description: 'Mung Bean',

            url: 'http://www.seedarea.com/4676-thickbox_default/mung-beans-seeds.jpg'
        },
        {
            description: 'Tamarind Seed',

            url: 'https://vaya.in/recipes/wp-content/uploads/2018/11/Tamarind-seeds.jpg'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

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


    }, [])

    return (
        <div className='c group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className=' h-[100vh] w-[100vw]  bg-center bg-cover duration-500'
            >

                <div className='h-[100vh] w-[100vw] px-[5vw] flex items-center bg-bg bg-opacity-40'>

                    <div>
                        <h1 className='lg:text-[60px] text-[20px] font-semibold text-[white]'>
                            <span className='text-accent'>{'High-quality'} {' '}</span>{slides[currentIndex].description}


                        </h1>
                        <p className='text-[white] lg:w-[40%] w-[80%] mt-5 text-sm lg:text-md'>
                            Elevate your experience  with our high-quality products. Choose from a wide range of premium collection.
                        </p>

                        <div className='md:flex lg:mt-8 mt-6 md:space-x-[6px] lg:space-x-5 space-y-5 md:space-y-0'>

                            <a href="https://api.whatsapp.com/send/?phone=8801711813933&text=" target="_blank" rel="noopener noreferrer">

                                <Button style={{ borderRadius: '68px', backgroundColor: '#1F2937' }} className='bg-bgNav' variant='contained'

                                    startIcon={<WhatsAppIcon style={{ color: '#4ADE80' }} />}
                                >
                                    Get Started
                                </Button>
                            </a>

                            <Link href='/about'>
                                <Button className="mt-5 md:mt-0" style={{ borderRadius: '68px', borderColor: 'white' }} variant='outlined'
                                    startIcon={<CrisisAlertIcon style={{ color: '#fff' }} />}
                                >
                                    <p className='text-[white]'>
                                        Learn More
                                    </p>
                                </Button>
                            </Link>


                        </div>
                    </div>

                </div>

            </div>
            <div className='hidden group-hover:block absolute bottom-28 -translate-x-0 translate-y-[-50%]  left-[33vw] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className='hidden group-hover:block absolute bottom-28 -translate-x-0 translate-y-[-50%]  right-[33vw] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='absolute right-[10vw] top-[35vh] py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <div className={`w-[35px] h-[35px] rounded-full my-2   border p-1  ${currentIndex == slideIndex ? 'bg-[white]' : 'bg-[#80808072]'}`}>
                            <img src={slide.url} className='w-[25px] h-[25px] rounded-full border bg-[white] '>

                            </img>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;