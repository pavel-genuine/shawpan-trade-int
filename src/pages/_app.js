import '@/styles/globals.css'
import '@/styles/homePage.css'
import '@/styles/mobileNav.css'
import '@/styles/footer.css'
import { useEffect, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material';
import Navbar from '@/Components/Navbar/Navbar';
import WhatsApp from '@/Components/WhatsApp/WhatsApp';
import Footer from '@/Components/Footer/Footer';
import {SunnyMorning } from 'moving-letters'



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
        main: "#000",//lgt2
        // main: "#80a10a",//lgt2
        light: "#000",
        dark: "#000",
        mainGradient: "linear-gradient(to right , #480626, #7e2651)",
      },
    },
  });

  useEffect(() => {

    setTimeout(() => {
      setIsOpen(true)
    }, 1300)

  }, [])


  return (
    <ThemeProvider theme={theme}>

      <div className='flex justify-center items-center'>
        {
          !isOpen ?
            <div className=' h-[100vh] w-[99] flex justify-center items-center'>
              <div className='scale-[.8] lg:scale-[1.5]  flex justify-center items-center space-x-5'>

              <SunnyMorning text={'Rainbow'} />
              <SunnyMorning text={'Tex'} />
              </div>
            </div>

            :
            <div>
              <Navbar isHome={isHome}></Navbar>
              <WhatsApp></WhatsApp>
              <Component setIsHome={setIsHome} {...pageProps} />
              <Footer></Footer>
            </div>

        }
      </div>


    </ThemeProvider>
  )
}
