import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import marble from '../../assets/imgs/marble.jpg'
import granite from '../../assets/imgs/granite.jpg'
import nut from '../../assets/imgs/nut.jpg'
import ginger from '../../assets/imgs/ginger.jpg'
import mung from '../../assets/Hero/pexels-photo-5843562.jpeg'

import MobileMenu from './MobileMenu';
import { LazyLoadImage } from 'react-lazy-load-image-component';


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

        url: mung.src
    },
    {
        description: 'Tamarind Seed',

        url: 'https://vaya.in/recipes/wp-content/uploads/2018/11/Tamarind-seeds.jpg'
    },
];


const Navbar = () => {

    const [background, setBackground] = useState(false)
    const [toggleOpen, setToggleOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showProducts, setShowProducts] = useState(0);

    const router = useRouter();


    useEffect(() => {

        const changeBackground = () => {

            if (window.scrollY >= 20) {
                setBackground(true)

            } else {
                setBackground(false)

            }
        }

        window.addEventListener('scroll', changeBackground)

    }, [toggleOpen])

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };


    return (
        <div className='w-[100vw] absolute' style={{ zIndex: 100 }}>

            <div id='' style={{ transition: "all .5s", }} className=
                {`${(toggleOpen||showProducts) ? '' : 'overflow-hidden'} nav w-[100vw]  h-[60px] md:h-[80px]  fixed  ${!background ? 'bg-opacity-0 bg-white' : 'bg-opacity-40 bg-[black] backdrop-blur-md'} `}
            >
                <div class="lg:navbar lg:w-[82%] mx-auto lg:flex my-4  ">
                    <div class="lg:navbar-start">


                        <Link href='/' class=" normal-case text-xl ">
                            <p
                                className='text-[white] lg:mx-[-4vw] mx-2 inline lg:block lg:mx-0  grayscale bg-[white] inline px-5 py-2 rounded-full bg-opacity-70'
                            >
                                Swapan Trade International
                            </p>

                        </Link>
                    </div>

                    <div className='lg:hidden'>
                        <MobileMenu setToggleOpen={setToggleOpen}></MobileMenu>

                    </div>

                    <div class="navbar-center hidden lg:block lg:mt-[8px] ">
                        <ul class="menu lg:flex menu-horizontal ml-[25%] justify-between text-[white]">
                            <>
                                <Link className={`md:px-2 hover:text-accent md:mx-5 ${router.pathname == "/" ? "border-b-[2px]" : ""}`} href='/'>HOME</Link>
                                <Link className={`md:px-2 hover:text-accent md:mx-5  ${router.pathname == '/services' ? "border-b-[2px]" : ""}`} href='/services.'>SERVICES</Link>
                                <Link onMouseLeave={() => setShowProducts(false)} onMouseOver={() => setShowProducts(true)} className={`md:px-2 hover:text-accent md:mx-5  ${router.pathname == '/products' ? "border-b-[2px]" : ""}`} href='/products.'>PRODUCTS</Link>
                                <Link className={`md:px-2 hover:text-accent md:mx-5  ${router.pathname == '/testimonials' ? "border-b-[2px]" : ""}`} href='/testimonials.'>TESTIMONIALS</Link>

                                <Link className={`md:px-2 hover:text-accent md:mx-5  ${router.pathname == "/about" ? "border-b-[2px]" : ""}`} href='/about'> ABOUT </Link>
                                <Link className={`md:px-2 hover:text-accent md:mx-5  ${router.pathname == "/contact" ? "border-b-[2px]" : ""}`} href='/contact'>CONTACT </Link>
                                {/* <Link className={`md:px-2 md:ml-5 rounded  ${router.pathname == "/contact" ? " bg-accent" : " bg-[white]"}`} href='/contact.'> <p className='w-[150px] text-[black]  pl-3 '> INTERIOR DESIGN </p>  </Link> */}
                            </>
                        </ul>
                        <div onMouseLeave={() => setShowProducts(false)} onMouseOver={() => setShowProducts(true)} className=' h-[30px] w-[30vw] flex bg-bg bg-opacity-0  rounded absolute top-[45px] left-[30vw]'>

                        </div>
                        {
                            showProducts &&
                            <div onMouseLeave={() => setShowProducts(false)} onMouseOver={() => setShowProducts(true)} className=' px-5 py-2 flex bg-bg bg-opacity-70 backdrop-blur-md rounded absolute top-[75px] left-[30vw]'>

                                {slides.map((slide, slideIndex) => (
                                    <div
                                        key={slideIndex}
                                        onClick={() => goToSlide(slideIndex)}
                                        className='text-2xl cursor-pointer'
                                    >
                                        <div className={`w-[100px] h-[100px] rounded m-2   border p-1  ${currentIndex == slideIndex ? 'bg-[white]' : 'bg-[#80808072]'}`}>
                                            <LazyLoadImage src={slide.url} className='w-[90px] h-[90px] rounded border bg-[white] ' />

                                        </div>
                                        <p className={`${currentIndex == slideIndex ? 'underline' : ''} text-[white] text-sm my-1 text-center`}>{slide.description}</p>

                                    </div>
                                ))}

                            </div>
                        }
                    </div>

                </div>

            </div>



        </div>

    );
};

export default Navbar;