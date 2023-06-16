import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';

import logo from '../../assets/logos/logo.jpg'




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
                {`${(toggleOpen||showProducts) ? '' : 'overflow-hidden'} nav w-[100vw]  h-[150px]  fixed  ${!background ? 'bg-opacity-0 bg-white' : 'bg-opacity-40 bg-[black] backdrop-blur-md'} `}
            >
                <div class="lg:navbar lg:w-[88%] mx-auto lg:flex my-4  ">
                    <div class="lg:navbar-start">


                        <Link href='/' class="  ">
                            <img src={logo.src}
                                className='md:w-[100px] w-[70px] h-[70px] md:h-[100px] rounded-full   inline lg:block lg:mx-0 mx-[5vw] bg-[white] inline rounded-full bg-opacity-70'
                            />
                               
                        </Link>
                    </div>

                    <div className='lg:hidden'>
                        {/* <MobileMenu setToggleOpen={setToggleOpen}></MobileMenu> */}

                    </div>

                    <div class="navbar-center hidden lg:block lg:mt-[8px] ">
                        <ul class="menu lg:flex menu-horizontal ml-[25%] justify-between text-[white]">
                            {/* <>
                                <Link className={`md:px-2 hover:text-accent md:mx-5 ${router.pathname == "/" ? "border-b-[2px]" : ""}`} href='/'>HOME</Link>
                                <Link className={`md:px-2 hover:text-accent md:mx-5  ${router.pathname == '/services' ? "border-b-[2px]" : ""}`} href='/services.'>SERVICES</Link>
                                <p onMouseLeave={() => setShowProducts(false)} onMouseOver={() => setShowProducts(true)} className={`md:px-2 hover:text-accent md:mx-5 cursor-pointer`} href='/products.'>PRODUCTS</p>
                                <Link className={`md:px-2 hover:text-accent md:mx-5  ${router.pathname == '/testimonials' ? "border-b-[2px]" : ""}`} href='/testimonials.'>TESTIMONIALS</Link>

                                <Link className={`md:px-2 hover:text-accent md:mx-5  ${router.pathname == "/about" ? "border-b-[2px]" : ""}`} href='/about'> ABOUT </Link>
                                <Link className={`md:px-2 hover:text-accent md:mx-5  ${router.pathname == "/contact" ? "border-b-[2px]" : ""}`} href='/contact'>CONTACT </Link>
                            </> */}
                        </ul>
                        <div onMouseLeave={() => setShowProducts(false)} onMouseOver={() => setShowProducts(true)} className=' h-[30px] w-[30vw] flex bg-bg bg-opacity-0  rounded absolute top-[45px] left-[30vw]'>

                        </div>
                        {
                            // showProducts &&
                            // <div onMouseLeave={() => setShowProducts(false)} onMouseOver={() => setShowProducts(true)} className=' px-5 py-2 flex bg-bg bg-opacity-70 backdrop-blur-md rounded absolute top-[75px] left-[30vw]'>

                            //     {slides.map((slide, slideIndex) => (
                            //         <div
                            //             key={slideIndex}
                            //             onClick={() => goToSlide(slideIndex)}
                            //             className='text-2xl cursor-pointer'
                            //         >
                            //             <div className={`w-[100px] h-[100px] rounded m-2   border p-1  ${currentIndex == slideIndex ? 'bg-[white]' : 'bg-[#80808072]'}`}>
                            //                 <LazyLoadImage src={slide.url} className='w-[90px] h-[90px] rounded border bg-[white] ' />

                            //             </div>
                            //             <p className={`${currentIndex == slideIndex ? 'underline' : ''} text-[white] text-sm my-1 text-center`}>{slide.description}</p>

                            //         </div>
                            //     ))}

                            // </div>
                        }
                    </div>

                </div>

            </div>



        </div>

    );
};

export default Navbar;