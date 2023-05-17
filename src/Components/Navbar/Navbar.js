import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';

import MobileMenu from './MobileMenu';


const Navbar = ({ isHome }) => {

    const [background, setBackground] = useState(false)

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

    }, [])



    return (
        <div className='w-[100vw] absolute' style={{ zIndex: 100 }}>

            <div id='' style={{ transition: "all .5s", }} className=
                {`nav w-[100vw] h-[60px] md:h-[80px]  fixed  ${!background ? 'bg-opacity-0 bg-white' : 'bg-opacity-90 bg-[black]'} `}
            >
                <div class="lg:navbar lg:w-[82%] mx-auto lg:flex my-4  ">
                    <div class="lg:navbar-start">


                        <Link href='/' class=" normal-case text-xl ">
                            <p
                                className='text-[white] lg:mx-[-4vw] mx-2 inline lg:block lg:mx-0  grayscale bg-[white] inline px-5 py-2 rounded-full bg-opacity-70'
                            >
                                Shawpan Trade International
                            </p>

                        </Link>
                    </div>

                    <div className='lg:hidden'>
                        <MobileMenu></MobileMenu>

                    </div>

                    <div class="navbar-center hidden lg:block lg:mt-[8px] ">
                        <ul class="menu lg:flex menu-horizontal ml-[25%] justify-between text-[white]">
                            <>
                                <Link className={`md:px-2 md:mx-5 ${router.pathname == "/" ? "border-b-[2px]" : ""}`} href='/'>HOME</Link>
                                <Link className={`md:px-2 md:mx-5  ${router.pathname == '/services' ? "border-b-[2px]" : ""}`} href='/services.'>SERVICES</Link>
                                <Link className={`md:px-2 md:mx-5  ${router.pathname == '/products' ? "border-b-[2px]" : ""}`} href='/products.'>PRODUCTS</Link>
                                {/* <Link className={`md:px-3 md:m-0 ${router.pathname == '/gallary' ? "border-b-[2px]" : ""}`} href='/gallary'>GALLERY</Link> */}
                                <Link className={`md:px-2 md:mx-5  ${router.pathname == '/testimonials' ? "border-b-[2px]" : ""}`} href='/testimonials.'>TESTIMONIALS</Link>

                                <Link className={`md:px-2 md:mx-5  ${router.pathname == "/about" ? "border-b-[2px]" : ""}`} href='/about.'> ABOUT </Link>
                                <Link className={`md:px-2 md:mx-5  ${router.pathname == "/contact" ? "border-b-[2px]" : ""}`} href='/contact.'>CONTACT </Link>
                                <Link className={`md:px-2 md:ml-5 rounded  ${router.pathname == "/contact" ? " bg-accent" : " bg-[white]"}`} href='/contact.'> <p className='w-[150px] text-[black]  pl-3 '> INTERIOR DESIGN </p>  </Link>
                            </>
                        </ul>
                    </div>

                </div>

            </div>



        </div>

    );
};

export default Navbar;