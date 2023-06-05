import React from 'react'
import img2 from '../../assets/imgs/granite.jpg'
import img1 from '../../assets/imgs/marble.jpg'
import img3 from '../../assets/imgs/nut.jpg'
import img4 from '../../assets/imgs/ginger.jpg'
import img5 from '../../assets/imgs/mung.jpeg'
import img6 from '../../assets/imgs/tamarind.jpg'
import Image from 'next/image'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Categories() {
    return (
        <div className='bg-bg px-[5vw] py-0 lg:py-14 text-center lg:text-left'>
            <h1 className='py-10 text-[white] lg:text-4xl text-[25px] font-semibold lg:font-bold'>
                Providing a wide selection of <span className='text-accent'>premium</span> products options to suit <span className='text-accent'>diverse</span>  styles and preferences.
            </h1>



            <div className='grid lg:grid-cols-6 grid-cols-2  gap-4 lg:space-x-[30px] text-[white] pb-10 lg:text-xl'>
                <div>

                    <LazyLoadImage

                        className={`lg:h-[40vh] h-[30vh] mb-2`}
                        alt={'cate'}
                        // height={400}
                        // width={300}
                        src={img1.src}
                    >

                    </LazyLoadImage>

                    <h1>
                        Marble
                    </h1>
                </div>
                <div>
                    <LazyLoadImage
                        className={`lg:h-[40vh] h-[30vh] mb-2`}
                        alt={'cate'}
                        // height={400}
                        // width={300}
                        src={img2.src}

                    >

                    </LazyLoadImage>

                    <h1>
                        Granite
                    </h1>
                </div>


               


                <div>
                    <LazyLoadImage
                        className={`lg:h-[40vh] h-[30vh] mb-2`}
                        alt={'cate'}
                        // height={400}
                        // width={300}
                        src={img4.src}

                    >

                    </LazyLoadImage>

                    <h1>
                        Fresh Ginger
                    </h1>
                </div>


                <div>
                    <LazyLoadImage
                        className={`lg:h-[40vh] h-[30vh] mb-2`}
                        alt={'cate'}
                        // height={400}
                        // width={300}
                        src={img3.src}

                    >

                    </LazyLoadImage>

                    <h1>
                        Betel Nut
                    </h1>
                </div>
                
                <div>
                    <LazyLoadImage
                        className={`lg:h-[40vh] h-[30vh] mb-2`}
                        alt={'cate'}
                        // height={400}
                        // width={300}
                        src={img5.src}

                    >

                    </LazyLoadImage>

                    <h1>
                        Mung Bean
                    </h1>
                </div>

               


                <div>
                    <LazyLoadImage
                        className={`lg:h-[40vh] h-[30vh] mb-2`}
                        alt={'cate'}
                        // height={400}
                        // width={300}
                        src={img6.src}

                    >

                    </LazyLoadImage>

                    <h1>
                        Tamarind Seed
                    </h1>
                </div>

            </div>

        </div>
    )
}

export default Categories