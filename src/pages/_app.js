import '@/styles/globals.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {

  const [isHome,setIsHome]=useState(false)

  return <Component setIsHome={setIsHome} {...pageProps} />
}
