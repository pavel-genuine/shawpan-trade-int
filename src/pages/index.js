import Categories from '@/Components/Categories/Categories'
import Commitments from '@/Components/Commitments/Commitments'
import FeaturedBrands from '@/Components/FeaturedBrands/FeaturedBrands'
import Global from '@/Components/Global/Global'
import HomePage from '@/Components/HomePage/HomePage'
import MissionVision from '@/Components/MissionVission/MissionVission'
import Passion from '@/Components/Passion/Passion'
import Qualities from '@/Components/Qualities/Qualities'
import Tiles from '@/Components/Tiles/Tiles'
import Head from 'next/head'
import React, { useEffect } from 'react'



const Home = (props) => {

  console.log(props, 'props');

  useEffect(() => {

    window.scrollTo(0, 0)
  }, [])


  return (
    <div>
      <Head>
        <title>Home | Rainbow Tex</title>
        <meta property="og:title" content="Rainbow Tex" />
        <meta
          name="og:description"
          content="Bangladeshi Ready Made Garments Sourcing Company. High-quality clothing exports from Bangladesh. Best in Fashion."
        />
        {/* <meta property="og:type" content="video.movie" /> */}
        {/* <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" /> */}
        {/* <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" /> */}

      </Head>
      <div className=' overflow-hidden ' style={{ zIndex: -1 }}>

        <HomePage setIsHome={props?.setIsHome} brand={props?.brand}
          tag1={props?.tag1}
          tag2={props?.tag2}
          tag3={props?.tag3}
          tag4={props?.tag4}
          smallTag={props?.smallTag}
        ></HomePage>
        <div id='section'>
          <Tiles setIsHome={props?.setIsHome}></Tiles>
        </div>
        <Passion passion={props?.passion} passionTag={props?.passionTag} setIsHome={props?.setIsHome}></Passion>

        <Categories></Categories>


        <Global></Global>

        {/* <FeaturedBrands></FeaturedBrands> */}

        {/* <Commitments></Commitments> */}
        <Qualities></Qualities>


      </div>
    </div>
  )
}

export default Home


export async function getStaticProps() {
  return {
    props: {
      brand: 'Rainbow Tex',
      tag1: 'High-quality',
      tag2: 'clothing',
      tag3: 'exports from Bangladesh',
      tag4: 'Best in Fashion',
      smallTag: 'Elevate your style with our high-quality garments. Choose from a wide range of premium clothing.',
      passion: 'Our commitment to craftsmanship and quality',
      passionTag: 'Our clothing exports are made with the finest materials and crafted with exceptional attention to detail. Our team of experts works closely with our brand partners to ensure that each garment meets our high standards of quality.'
    }
  };
}