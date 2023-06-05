import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { Button } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import Link from 'next/link'
import Slider from '../Slider/Slider';
import { Landing } from './Landing';
import Carousel from './Carousel';
// import Slider from 'react-slick';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  speed: 3000,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


const list = [
  {
    species: 'Amur Leopard',
    age: 2,
    bio: 'Love snacks',
    url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/leopard2.jpg'
  },
  {
    species: 'Asiatic Lion',
    age: 8,
    bio: 'Love shrimps',
    url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/lion2.jpg'
  },
  {
    species: 'Siberian Tiger',
    age: 9,
    bio: 'Hate Elefants',
    url: 'https://i.ibb.co/k1gCrtx/Screenshot-2023-04-15-133548.png'
  },
  {
    species: 'Brown Bear',
    age: 12,
    bio: 'Love salmon',
    url: 'https://i.ibb.co/DwkKXH4/Marble-quarry-Carrara-Italy.webp'
  },
]


export const Demo = (
  {
    tag1,
    tag2,
    tag3,
    tag4,
    smallTag
  }
) => {




  return (

    // <Slider {...settings}>
    <div className='h-[100vh] w-[100vw] overflow-hidden bg-bg bg-opacity-20'>


      <div id='pic5' style={{ zIndex: 1 }} className='pic flex lg:items-start items-center px-[5vw] h-[100vh]  w-[100%] '>

        <div className=' flex lg:justify-between  flex-col lg:h-[94vh]'>

          <div className='lg:h-[50px] hidden lg:block '>

          </div>

          <div className='' >
            <div className=''>

              <h1 className='lg:text-[60px] text-[20px] font-semibold text-[white]'>
                <span className='text-accent'>{tag1} {' '}</span>{tag2}
                <br className='hidden lg:block' />
                <span>{tag3}</span>
                <span className='text-accent'>.</span>
                <br />
                {tag4}<span className='text-accent'>.</span>
              </h1>
              <p className='text-[white] lg:w-[40%] w-[100%] mt-5 text-sm lg:text-md'>
                {
                  smallTag
                }
              </p>

              <div className='flex lg:mt-8 mt-10 space-x-[6px] lg:space-x-5'>

                <a href="https://api.whatsapp.com/send/?phone=8801711813933&text=" target="_blank" rel="noopener noreferrer">

                  <Button style={{ borderRadius: '68px', backgroundColor: '#1F2937' }} className='bg-bgNav' variant='contained'

                    startIcon={<WhatsAppIcon style={{ color: '#4ADE80' }} />}
                  >
                    Get Started
                  </Button>
                </a>

                <Link href='/about'>
                  <Button style={{ borderRadius: '68px', borderColor: 'white' }} variant='outlined'
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

          <div className=' text-[white] text-sm lg:text-md pt-10 lg:pt-0 '>
            <div className='lg:flex justify-between lg:w-[87vw] lg:font-semibold lg:text-md '>

              <p className=''>
                <span className='text-[orange]'>
                  +5000
                </span>  Wholesale Orders Worldwide
              </p>

              <p className=''>
                <span className='text-[orange]'>
                  +20
                </span>  Countries
              </p>

              <p className=''>

                Operating Since  <span className='text-[orange]'>
                  1996
                </span>
              </p>

            </div>
          </div>
        </div>
      </div>

      <div className='pic h-[100vh]  w-[100vw]' id={`pic5`} />
      <div className='pic h-[100vh]  w-[100vw]' id='pic4' />
      <div className='pic h-[100vh]  w-[100vw]' id='pic3' />
      <div className='pic h-[100vh]  w-[100vw] ' id='pic2' />
      <div className='pic h-[100vh]  w-[100vw]  ' id='pic1' />
    </div>


    // </Slider>


  );
};



const HomePage = ({ brand, tag1, tag2, tag3, tag4, smallTag }) => {
  const [item, setItem] = useState(0);

  const [isOpen, setIsOpen] = useState(false)
  const [background, setBackground] = useState(false)


  const handleScroll = () => {
    const element = document.getElementById('section');

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div className=' '>
      <div className='w-[100%] mx-auto h-[100vh] '>

        {
          <div className='relative'>

            {/* <div >
              <div className='z-2'>
                <Landing animals={list} item={item}></Landing>

              </div>

              <div className='z-10'>
                <Slider onItem={(index) => setItem(index)} size={list.length}></Slider>

              </div>
            </div> */}

            <div>
              <Carousel></Carousel>
            </div>

            <div className='cursor-pointer hidden lg:block lg:rotate-90 absolute text-[white] lg:text-lg font-bold text-[white] text-center  font-bold z-10 lg:top-[48vh]  right-[40%] lg:right-[5vw]' onClick={() => handleScroll()}>
              <motion.div
                className='   '
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: 1, }}
              >
                <p className='   mb-[-12px]'>
                  scroll
                </p>
                <marquee behavior="scroll" direction='right'>
                  <div className=' bg-[white] h-[2px] w-[60px] lg:w-[75px]'>

                  </div>
                </marquee>


              </motion.div>

            </div>

          </div>
        }

      </div>

    </div>
  )
}

export default HomePage