import Image from 'next/image'
import React from 'react'

function Categories() {
    return (
        <div className='bg-bg px-[5vw] py-0 lg:py-14 text-center lg:text-left'>
            <h1 className='py-10 text-[white] lg:text-4xl text-[25px] font-semibold lg:font-bold'>
                Providing a wide selection of <span className='text-accent'>premium</span> clothing options to suit <span className='text-accent'>diverse</span>  styles and preferences.
            </h1>



            <div className='grid lg:grid-cols-6 grid-cols-2  gap-4 lg:space-x-[30px] text-[white] pb-10 text-xl'>
                <div>
                    <Image
                        className={`h-[40vh] mb-2`}
                        alt={'cate'}
                        height={500}
                        width={900}
                        src="https://i.ibb.co/8cdj540/Screenshot-2023-04-14-115857.png"                 // width={}

                    >

                    </Image>

                    <h1>
                        Denims
                    </h1>
                </div>
                <div>
                    <Image
                        className={`h-[40vh] mb-2`}
                        alt={'cate'}
                        height={500}
                        width={900}
                        src="https://i.ibb.co/8cdj540/Screenshot-2023-04-14-115857.png"                 // width={}

                    >

                    </Image>

                    <h1>
                        Sweaters
                    </h1>
                </div>
                <div>
                    <Image
                        className={`h-[40vh] mb-2`}
                        alt={'cate'}
                        height={500}
                        width={900}
                        src="https://i.ibb.co/8cdj540/Screenshot-2023-04-14-115857.png"                 // width={}

                    >

                    </Image>

                    <h1>
                        Activewears
                    </h1>
                </div>
                <div>
                    <Image
                        className={`h-[40vh] mb-2`}
                        alt={'cate'}
                        height={500}
                        width={900}
                        src="https://i.ibb.co/8cdj540/Screenshot-2023-04-14-115857.png"                 // width={}

                    >

                    </Image>

                    <h1>
                        Formals
                    </h1>
                </div>
                <div>
                    <Image
                        className={`h-[40vh] mb-2`}
                        alt={'cate'}
                        height={500}
                        width={900}
                        src="https://i.ibb.co/8cdj540/Screenshot-2023-04-14-115857.png"                 // width={}

                    >

                    </Image>

                    <h1>
                        Winter
                    </h1>
                </div>
                <div>
                    <Image
                        className={`h-[40vh] mb-2`}
                        alt={'cate'}
                        height={500}
                        width={900}
                        src="https://i.ibb.co/8cdj540/Screenshot-2023-04-14-115857.png"                 // width={}

                    >

                    </Image>

                    <h1>
                        Kids
                    </h1>
                </div>

            </div>

        </div>
    )
}

export default Categories