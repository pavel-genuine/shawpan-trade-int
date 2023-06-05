import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className='py-10 bg-[black] text-[white] px-[5vw] borde border-[grey] border-t'>
            <div className=' mx-auto   '>
                <div className=''>
                    <motion.div
                        initial={{ y: 40 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: .2, delay: .2, }}
                    >
                        <p className='lg:text-3xl text-xl font-semibold mb-5 '>
                            QUICK LINKS
                        </p>
                    </motion.div>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ y: 40 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: .2, delay: .2, }}
                    >
                        <div className='grid lg:grid-cols-3 gap-3  '>
                            <Link href={'/services.'}><p>Services</p> </Link>
                            <Link href={'/products.'}><p className='lg:mr-10'>Products</p> </Link>
                            <Link href={'/gallery.'}><p>Gallery</p> </Link>
                            <Link href={'/about.'}><p>About Us</p> </Link>
                            <Link href={'/contact.'}><p className='mb-10 lg:mb-0'>Contact Us</p> </Link>

                        </div>
                    </motion.div>
                </div>
                <div>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ y: 40 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: .2, delay: .2, }}
                    >
                        <p className='lg:text-3xl text-xl font-semibold lg:mt-10 mt-0 mb-5 '>
                            CONTACT DETAILS
                        </p>

                    </motion.div>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ y: 40 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: .2, delay: .2, }}
                    >

                        <div className='grid lg:grid-cols-4 gap-3  '>
                            <div>
                                <h1>
                                    ADDRESS
                                </h1>
                                <p className='mt-3 font-thin'>
                                    Dhaka Office: House 114, Road 2, Block A, Niketon, Gulshan-1, Dhaka 1212, Bangladesh
                                </p>
                                <p className='mt-3 font-thin'>
                                    Bangkok Office: SSP Tower,
                                    21th foor,
                                    Soi Sukhumvit 63, Ekkamai Road, Bangkok 10110, Thailand.
                                </p>
                            </div>
                            <div>
                                <h1>
                                    EMAIL
                                </h1>
                                <p className='mt-3 font-thin'>
                                    <a className='underline' href="mailto:info@shawpantradeint.com"> info@shawpantradeint.com </a>

                                </p>
                            </div>
                            <div>
                                <h1>
                                    PHONE
                                </h1>
                                <p className='mt-3 font-thin'>
                                    <a className='underline' href="tel:+880"> +88017XXXXXXXX </a>

                                </p>
                            </div>
                            <div>
                                <h1>
                                    SOCIALS
                                </h1>
                                <ul class="flex  md:space-x-12 space-x-8 mt-3">
                                    <a href="https://www.facebook.com/">
                                        <FacebookIcon />

                                    </a>

                                    <a href="https://www.instagram.com/" target={`_blank`}>
                                        <InstagramIcon />
                                    </a>

                                    <a href="https://link" target={`_blank`}>

                                        <LinkedInIcon />
                                    </a>

                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>

            <div className='text-[grey] lg:text-center mt-10 lg:px-4  '>
                <p className='mb-2'>
                    © 2023 Swapan Trade International all rights reserved.
                </p>

                <a href="https://joynulabedin.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <p>
                        {/* Made by GenSoft */}
                    </p>
                </a>




            </div>
        </div>
    )
}

export default Footer