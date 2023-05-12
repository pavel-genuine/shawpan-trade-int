import Image from 'next/image'
import React from 'react'

const Qualities = () => {
    return (
        <div className='lg:flex lg:h-[90vh] bg-bg lg:p-[7vh] p-5 text-[white] overflow-hidden px-[5vw]'>

            <div className='lg:pr-10 '>

                <div className='flex mb-[5vh] '>

                    <div className=' bg-navBg mr-5 lg:mr-[5vh] p-5 lg:h-[36vh] h-[40vh] overflow-hidden'>
                        <Image
                            className={`h-[100px]`}
                            alt={'cate'}
                            height={500}
                            width={900}
                            src="https://i.ibb.co/8cdj540/Screenshot-2023-04-14-115857.png"                 // width={}

                        >

                        </Image>
                        <h1 className='text-xl my-4'>
                            Excellence
                        </h1>
                        <p className='font-thin'>
                            Committed to excellence and tackling challenges with a can-do Attitude at Rainbow Tex.
                        </p>
                    </div>

                    <div className=' bg-[black] p-5 lg:h-[36vh] h-[40vh] overflow-hidden'>
                        <Image
                            className={`h-[100px]`}
                            alt={'cate'}
                            height={500}
                            width={900}
                            src="https://i.ibb.co/8cdj540/Screenshot-2023-04-14-115857.png"                 // width={}

                        >

                        </Image>
                        <h1 className='text-xl my-4'>
                            Quality
                        </h1>
                        <p className='font-thin'>
                            Our fabrics are carefully selected for their durability, comfort, and excellent drape.                    </p>
                    </div>

                </div>

                <div className='flex'>

                    <div className='bg-[black] mr-5 lg:mr-[5vh] p-5 lg:h-[36vh] h-[40vh] overflow-hidden'>
                        <Image
                            className={`h-[100px]`}
                            alt={'cate'}
                            height={500}
                            width={900}
                            src="https://i.ibb.co/8cdj540/Screenshot-2023-04-14-115857.png"                 // width={}

                        >

                        </Image>
                        <h1 className='text-xl my-4'>
                            1% Better Everyday
                        </h1>
                        <p className='font-thin'>
                            Committed to excellence and tackling challenges with a can-do attitude here.
                        </p>
                    </div>

                    <div className='bg-navBg p-5 lg:h-[36vh] h-[40vh] overflow-hidden'>
                        <Image
                            className={`h-[100px]`}
                            alt={'cate'}
                            height={500}
                            width={900}
                            src="https://i.ibb.co/8cdj540/Screenshot-2023-04-14-115857.png"                 // width={}

                        >

                        </Image>
                        <h1 className='text-xl my-4'>
                            Recognition
                        </h1>
                        <p className='font-thin'>
                            At Rainbow tex, we move quickly, operate with urgency, and embrace daily progress.                    </p>
                    </div>

                </div>

            </div>

            <Image
                className={`lg:h-[77vh] lg:w-[50%] mt-5 lg:mt-0`}
                alt={'cate'}
                height={700}
                width={900}
                src="https://i.ibb.co/8cdj540/Screenshot-2023-04-14-115857.png"                 // width={}

            >

            </Image>

        </div>
    )
}

export default Qualities