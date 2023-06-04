
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic';
import HomePage from '@/Components/HomePage/HomePage'

import Head from 'next/head'
import VideoPromo from '@/Components/VideoPromo/VideoPromo';
import StripeSlider from '@/Components/StoneShowCase/StripeSliderStone';
import StoneShowCase from '@/Components/StoneShowCase/StoneShowCase';
import FoodGradeShowCase from '@/Components/FoodGradeShowCase/FoodGradeShowCase';

const Categories = dynamic(() => import('@/Components/Categories/Categories'), {
  loading: () => <p>Loading...</p>,
});
const Global = dynamic(() => import('@/Components/Global/Global'), {
  loading: () => <p>Loading...</p>,
});
const Passion = dynamic(() => import('@/Components/Passion/Passion'), {
  loading: () => <p>Loading...</p>,
});
const Qualities = dynamic(() => import('@/Components/Qualities/Qualities'), {
  loading: () => <p>Loading...</p>,
});
const Tiles = dynamic(() => import('@/Components/Tiles/Tiles'), {
  loading: () => <p>Loading...</p>,
});




const Home = (props) => {

  console.log(props, 'props');

  useEffect(() => {

    window.scrollTo(0, 0)
  }, [])


  return (
    <main>
      <Head>
        <title>Home | Shawpan Trade International</title>
        <meta property="og:title" content="Shawpan Trade International" />
        <meta
          name="og:description"
          content="Shawpan Trade International"
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
        <Categories></Categories>
        <StoneShowCase></StoneShowCase>
        <FoodGradeShowCase></FoodGradeShowCase>
        <div id='section'>
          <VideoPromo></VideoPromo>
        </div>

        <Passion passion={props?.passion} passionTag={props?.passionTag} setIsHome={props?.setIsHome}></Passion>



        <Global></Global>

        <Qualities></Qualities>


      </div>
    </main>
  )
}

export default Home


export async function getStaticProps() {
  return {
    props: {
      brand: 'Shwapan Trade International',
      tag1: 'High-quality',
      tag2: 'Marble, Granite, Fresh Ginger,',
      tag3: 'Betel nut, Mung bean exports worldwide',
      tag4: 'Best in Quality Intrior Design',
      smallTag: 'Elevate your experience  with our high-quality products. Choose from a wide range of premium collection.',
      passion: 'Our commitment to craftsmanship and quality',
      passionTag: 'Our exports are made with the finest materials and crafted with exceptional attention to detail. Our team of experts works closely with our brand partners to ensure that each products meets our high standards of quality.'
    }
  };
}