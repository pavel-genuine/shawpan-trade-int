import Image from 'next/image'
import React from 'react'
import img1 from '../../assets/imgs/img1.png'
import img2 from '../../assets/imgs/img2.png'
import img3 from '../../assets/imgs/img3.png'
import img4 from '../../assets/imgs/img4.png'
import quality from '../../assets/imgs/quality.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion } from "framer-motion"


const Qualities = () => {
    return (
        <div className='lg:flex lg:h-[90vh] bg-bg lg:py-[7vh] py-5 text-[white] overflow-hidden  lg:ml-0 px-[5vw]'>

            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: .5, scale: .8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: .8, delay: 0 }}
            >
                <div className='lg:pr-10 '>

                    <div className='flex lg:mb-[5vh] mb-5 '>

                        <div className=' bg-[#1F2937]  mr-5 lg:mr-[5vh] p-5 lg:h-[36vh] h-[40vh] overflow-hidden lg:w-[25vw] w-[42vw]'>
                            <LazyLoadImage
                                className={`w-[100px]`}
                                alt={'cate'}
                                // height={500}
                                // width={900}
                                src={img1?.src}

                            >

                            </LazyLoadImage>
                            <h1 className='text-xl my-4'>
                                Excellence
                            </h1>
                            <p className='font-thin text-sm lg:text-md'>
                                Committed to excellence and tackling challenges with a can-do Attitude at Shawpan Trade International.
                            </p>
                        </div>

                        <div className=' bg-bg2 p-5 lg:h-[36vh] h-[40vh] overflow-hidden lg:w-[25vw] w-[42vw]'>
                            <LazyLoadImage
                                className={`w-[120px]`}
                                alt={'cate'}
                                height={500}
                                width={900}
                                src={img2.src}

                            >

                            </LazyLoadImage>
                            <h1 className='text-xl my-4'>
                                Quality
                            </h1>
                            <p className='font-thin text-sm lg:text-md'>
                                Our fabrics are carefully selected for their durability, comfort, and excellent drape.                    </p>
                        </div>

                    </div>

                    <div className='flex'>

                        <div className='bg-bg2 mr-5 lg:mr-[5vh] p-5 lg:h-[36vh] h-[40vh] overflow-hidden lg:w-[25vw] w-[42vw]'>
                            <LazyLoadImage
                                className={`w-[100px]`}
                                alt={'cate'}
                                // height={500}
                                // width={900}
                                src={img3.src}

                            >

                            </LazyLoadImage>
                            <h1 className='text-xl my-4'>
                                1% Better Everyday
                            </h1>
                            <p className='font-thin text-sm lg:text-md'>
                                Committed to excellence and tackling challenges with a can-do attitude here.
                            </p>
                        </div>

                        <div className='bg-[#1F2937] p-5 lg:h-[36vh] h-[40vh] overflow-hidden lg:w-[25vw] w-[42vw]'>
                            <LazyLoadImage
                                className={`w-[100px]`}
                                alt={'cate'}
                                // height={500}
                                // width={900}
                                src={img4.src}
                            >

                            </LazyLoadImage>
                            <h1 className='text-xl my-4'>
                                Recognition
                            </h1>
                            <p className='font-thin text-sm lg:text-md'>
                                At  Shawpan Trade International, we move quickly, operate with urgency, and embrace daily progress.                    </p>
                        </div>

                    </div>

                </div>
            </motion.div>


            <motion.div
                className={`lg:h-[77vh] lg:w-[50%] mt-5 overflow-hidden  lg:mt-0 grayscale`}
                viewport={{ once: true }}
                initial={{ opacity: .5, scale: .8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: .8, delay: 0 }}
            >
                <LazyLoadImage
                    className={` grayscale`}
                    alt={'cate'}
                    // height={200}
                    // width={300}
                    src={quality.src}
                >

                </LazyLoadImage>
            </motion.div>
        </div>
    )
}

export default Qualities