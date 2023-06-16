import '@/styles/globals.css'
import '@/styles/homePage.css'
import '@/styles/mobileNav.css'
import '@/styles/testimony.css'
import '@/styles/slider.scss'
import '@/styles/landing.scss'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import { motion } from "framer-motion"

import { createTheme, ThemeProvider } from '@mui/material';
import Navbar from '@/Components/Navbar/Navbar';
import WhatsApp from '@/Components/WhatsApp/WhatsApp';
import { SunnyMorning } from 'moving-letters'
import logo from '../assets/logos/logo.jpg'


const Footer = dynamic(() => import('@/Components/Footer/Footer'), {
  loading: () => <p>Loading...</p>,
});



export default function App({ Component, pageProps }) {

  const [isHome, setIsHome] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const theme = createTheme({
    typography: {
      // fontFamily: 'Artifika',
      button: {
        textTransform: 'none'
      }
    },
    palette: {
      primary: {
        main: "#ff5926",//lgt2
        // main: "#80a10a",//lgt2
        light: "#ff5926",
        dark: "#ff5926",
        mainGradient: "linear-gradient(to right , #480626, #7e2651)",
      },
    },
  });

  useEffect(() => {

    setTimeout(() => {
      setIsOpen(true)
    }, 1500)

  }, [])


  return (
    <ThemeProvider theme={theme}>

      <div className=''>
        {
          !isOpen ?
            // <div className=' h-[100vh] w-[99] flex justify-center items-center'>
            //   <div className='scale-[.8] lg:scale-[1.5]  lg:flex justify-center items-center lg:space-x-5'>

            //   <SunnyMorning text={'Shwapan'} />
            //   <SunnyMorning text={'Trade'} />
            //   <SunnyMorning text={'International'} />
            //   </div>
            // </div>

            <div>
              <div
                className='h-[100vh] flex justify-center items-center bg-bg w-[100vw] overflow-hidden'

              >
                <motion.div
                  className='absolute top-50 z-10'
                  initial={{ opacity: 0, scale: .5 }}
                  whileInView={{ opacity: 1, scale: 2 }}
                  transition={{ duration: 1.5, delay: 0 }}

                >
                  <img src={logo.src}
                    className='w-[100px] h-[100px] rounded-full   inline lg:block lg:mx-0  bg-[white] inline rounded-full bg-opacity-70'
                  />
                </motion.div>


                <motion.div className='bg-[white] h-[50px] w-[50px] rounded-full z-0'

                  viewport={{ once: true }}
                  initial={{ opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 100 }}
                  transition={{ duration: 3, delay: 0 }}

                >

                </motion.div>
              </div>
            </div>

            :
            <div>
              <Navbar></Navbar>
              {/* <WhatsApp></WhatsApp> */}
              <Component  {...pageProps} />
              {/* <Footer></Footer> */}
            </div>

        }
      </div>


    </ThemeProvider>
  )
}
