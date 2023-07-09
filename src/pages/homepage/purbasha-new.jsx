import React from "react";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import NavbarArch from "../../components/Navbar-arch/navbar-arch";
import Head from "next/head";


import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const Counter = ({ end, decimals }) => {
  return (
    <CountUp
      end={end ? end : 100}
      duration={3}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span className="count" data-from="0" data-to={end} ref={countUpRef}>
            count
          </span>
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

function Arrow({ className, extraClass, onClick, icon }) {
  return (
    <div className={`${className}  ${extraClass}`} onClick={onClick}>
      <i className={icon}></i>
    </div>
  );
}

export const sliderProps = {
  projectsSliderFour: {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  testimonialSliderOne: {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <Arrow icon={"far fa-arrow-left"} extraClass={"prev"} />,
    nextArrow: <Arrow icon={"far fa-arrow-right"} extraClass={"next"} />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  },
  testimonialSliderThree: {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  },
  testimonialSliderTwo: {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  },
  heroOne: {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  },
  heroSliderTwo: {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow icon={"far fa-arrow-left"} extraClass={"prev"} />,
    nextArrow: <Arrow icon={"far fa-arrow-right"} extraClass={"next"} />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  },
  projectsSliderOne: {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  projectsSliderTwo: {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  projectsSliderThree: {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  partnerSliderOne: {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  },
  recentProductSlider: {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
};

const Homepage = () => {
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <section>
      <Head>
        <link rel="stylesheet" defer href="/css/arch-skin-light.css" />
        <link rel="stylesheet" defer href="/css/light.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
              <NavbarArch navbarRef={navbarRef} theme="themeL" />

      {/*====== Start Banner Section ======*/}
      <section className="banner-section">
        {/*====== Hero Wrapper One ======*/}
        <div className="hero-wrapper-two">
          {/*====== Hero Slider ======*/}
          <Slider {...sliderProps.heroOne} className="hero-slider-one">
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/3875430/pexels-photo-3875430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              />
              <div className="bgc-circle" data-animation="fadeInLeft" />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-8">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".34"
                      >
                        Beautiful RMG
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        RMG &amp; More
                      </h1>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/">
                          <a className="main-btn golden-btn mb-10">
                            Explore More
                          </a>
                        </Link>
                        <Link legacyBehavior href="/">
                          <a className="main-btn filled-btn filled-white mb-10">
                            How It Work
                          </a>
                        </Link>
                      </div>
                      <div
                        className="client-avatar-box"
                        data-animation="fadeInUp"
                        data-delay=".7s"
                      >
                        <div className="avatar-thumbs">
                          <ul>
                            <li>
                              <img
                                src="/assets/images/gallery/avatar-1.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/images/gallery/avatar-2.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/images/gallery/avatar-3.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/images/gallery/avatar-4.jpg"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="rating-box">
                          <h2 className="number">
                            <Counter end={1000} />+
                          </h2>
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="text">
                          <span>Clients Worldwide</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                    {/*====== Hero Play ======*/}
                    <div className="hero-play float-lg-right">
                      <a
                        href="https://www.youtube.com/watch?v=6v-ISi-wqJc"
                        className="video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
                }}
              />
              <div className="bgc-circle" data-animation="fadeInLeft" />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-8">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Beautiful RMG
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        RMG &amp; More
                      </h1>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn golden-btn mb-10">
                            Explore More
                          </a>
                        </Link>
                        <Link legacyBehavior href="/index">
                          <a className="main-btn filled-btn filled-white mb-10">
                            How It Work
                          </a>
                        </Link>
                      </div>
                      <div
                        className="client-avatar-box"
                        data-animation="fadeInUp"
                        data-delay=".7s"
                      >
                        <div className="avatar-thumbs">
                          <ul>
                            <li>
                              <img
                                src="/assets/images/gallery/avatar-1.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/images/gallery/avatar-2.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/images/gallery/avatar-3.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/images/gallery/avatar-4.jpg"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="rating-box">
                          <h2 className="number">
                            <Counter end={1000} />+
                          </h2>
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="text">
                          <span>Clients Worldwide</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                    {/*====== Hero Play ======*/}
                    <div className="hero-play float-lg-right">
                      <a
                        href="https://www.youtube.com/watch?v=6v-ISi-wqJc"
                        className="video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              />
              <div className="bgc-circle" data-animation="fadeInLeft" />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-8">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Beautiful RMG
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        RMG &amp; More
                      </h1>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn golden-btn mb-10">
                            Explore More
                          </a>
                        </Link>
                        <Link legacyBehavior href="/index">
                          <a className="main-btn filled-btn filled-white mb-10">
                            How It Work
                          </a>
                        </Link>
                      </div>
                      <div
                        className="client-avatar-box"
                        data-animation="fadeInUp"
                        data-delay=".7s"
                      >
                        <div className="avatar-thumbs">
                          <ul>
                            <li>
                              <img
                                src="/assets/images/gallery/avatar-1.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/images/gallery/avatar-2.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/images/gallery/avatar-3.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/images/gallery/avatar-4.jpg"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="rating-box">
                          <h2 className="number">
                            <Counter end={1000} />+
                          </h2>
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                        <div className="text">
                          <span>Clients Worldwide</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                    {/*====== Hero Play ======*/}
                    <div className="hero-play float-lg-right">
                      <a
                        href="https://www.youtube.com/watch?v=6v-ISi-wqJc"
                        className="video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Banner Section ======*/}







      {/*====== Start About Section  ======*/}
      <section className="about-section pt-50 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-6">
              {/*====== About Image Box  ======*/}
              <div className="about-one_image-box mb-50 p-r z-1 wow fadeInLeft">
                <div className="shape shape-one">
                  <span />
                </div>
                <img
                  src="https://images.pexels.com/photos/3735633/pexels-photo-3735633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="about-img-one" style={{width:'230px',height:'210px'}}
                  alt="About Image"
                />
                <img
                  src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="about-img-two" style={{width:'350px',height:'410px'}}
                  alt="About Image"
                />
                <img
                  src="/assets/images/about/tree.png" style={{width:'170px',height:'250px'}}
                  className="about-img-three"
                  alt="About Image"
                />
                <div className="experience-item">
                  <h2 className="number">
                    <Counter end={25} />+
                  </h2>
                  <h4>Years Of Experience</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              {/*====== About Content Box  ======*/}
              <div className="about-content-box pl-lg-60 mb-50 wow fadeInRight">
                <div className="section-title mb-30">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    About RMG
                  </span>
                  <h2>We Care Your RMG &amp; Landscaping</h2>
                </div>
                <p className="mb-30">
                  Sed ut perspiciatis unde omnis isnatu volunteer accusantium
                  doloremque laudantium totam rem apeira eaque ipsa quae ab
                  eillo inventore veritatis et quasi architecto beatae vitae
                </p>
                <ul className="check-style-one mb-35">
                  <li>
                    <i className="far fa-check" />
                    We’re Experience RMG
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Awards Winning &amp; Professional Team Member
                  </li>
                </ul>
                <Link legacyBehavior href="/">
                  <a className="main-btn primary-btn">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section  ======*/}



      <section className="features-section gray-bg pt-40 pb-40">
        <div className="container-fluid">
          {/*====== Project Slider ======*/}
          <Slider
            {...sliderProps.projectsSliderFour}
            className="projects-slider-four wow fadeInUp"
            data-wow-delay=".2s"
          >
            {/*====== Project Item ======*/}
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Project Image"   style={{height:'520px'}}
                />
                <div className="hover-content">
                  <div className="number">01</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Underwear</a>
                      </Link>
                    </h3>
                    <p>International Standard</p>
                    <Link legacyBehavior href="/">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <p>Underwear</p>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="https://images.pexels.com/photos/1233648/pexels-photo-1233648.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Project Image"   style={{height:'520px'}}
                />
                <div className="hover-content">
                  <div className="number">02</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>T-Shirt</a>
                      </Link>
                    </h3>
                    <p>International Standard</p>
                    <Link legacyBehavior href="/">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>T-Shirt</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Project Image"   style={{height:'520px'}}
                />
                <div className="hover-content">
                  <div className="number">03</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Polo Shirt</a>
                      </Link>
                    </h3>
                    <p>International Standard</p>
                    <Link legacyBehavior href="/">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Polo Shirt</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="https://images.pexels.com/photos/3735633/pexels-photo-3735633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Project Image"
                  style={{height:'520px'}}
                />
                <div className="hover-content">
                  <div className="number">04</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Sweat Shirt</a>
                      </Link>
                    </h3>
                    <p>International Standard</p>
                    <Link legacyBehavior href="/">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Sweat Shirt</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>



            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="https://images.pexels.com/photos/1233648/pexels-photo-1233648.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Project Image"   style={{height:'520px'}}
                />
                <div className="hover-content">
                  <div className="number">05</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Hoodie</a>
                      </Link>
                    </h3>
                    <p>International Standard</p>
                    <Link legacyBehavior href="/">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Hoodie</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
         
          </Slider>
        </div>
      </section>




      {/*====== Start Choose Section  ======*/}
      <section
        className="choose-bg-section bg_cover p-r z-1 pt-100 pb-100"
        style={{ backgroundImage: "url(https://images.pexels.com/photos/7147454/pexels-photo-7147454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12">
              {/*====== Section Title  ======*/}
              <div className="section-title text-black text-center mb-50 wow fadeInDown">
                <span className="sub-title text text-white">
                  <i className="flaticon-Fashion" />
                  Why Choose Us
                </span>
                <h2 className='text text-white'>We’re Awards Winning RMG</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/*====== Choose Wrapper  ======*/}
              <div className="choose-wrapper wow fadeInUp">
                <div className="row">
                  <div className="col-lg-7">
                    {/*====== Choose Tab Pane  ======*/}
                    <Tab.Container defaultActiveKey={"tab1"}>
                      <div className="choose-tab-pane">
                        {/*====== Choose Tab  ======*/}
                        <div className="choose-nav-tab">
                          <Nav as={"ul"} className="nav">
                            <li className="nav-item">
                              <Nav.Link
                                as="button"
                                className="nav-link"
                                data-toggle="tab"
                                eventKey="tab1"
                              >
                                We’re Since 1987!
                              </Nav.Link>
                            </li>
                            <li className="nav-item">
                              <Nav.Link
                                as="button"
                                className="nav-link"
                                data-toggle="tab"
                                eventKey="tab2"
                              >
                                Philosophy
                              </Nav.Link>
                            </li>
                          </Nav>
                        </div>
                        {/*====== Tab Content  ======*/}
                        <Tab.Content className="tab-content">
                          <Tab.Pane className="tab-pane" eventKey="tab1">
                            <div className="choose-content-box">
                              <p>
                                Sed ut perspiciatis unde omnis natus error
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperia eaque quae abillo inventore
                                veritatis architecto beatae vitae dicta sunt
                                explicabo.
                              </p>
                              <div className="thumb-content">
                                <img
                                  src="https://images.pexels.com/photos/4622215/pexels-photo-4622215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                  alt="Image"
                                  style={{width:'170px',height:'200px'}}
                                />
                                <ul className="check-style-one">
                                  <li>
                                    <i className="far fa-check" />
                                    Trusted RMG Partners
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Shipping Cost Low
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Professional Team Member
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Awards Winning Company
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane className="tab-pane" eventKey="tab2">
                            <div className="choose-content-box">
                              <p>
                                Sed ut perspiciatis unde omnis natus error
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperia eaque quae abillo inventore
                                veritatis architecto beatae vitae dicta sunt
                                explicabo.
                              </p>
                              <div className="thumb-content">
                                <img
                                  src="https://i0.wp.com/textiletutorials.com/wp-content/uploads/2018/06/Printing-factory-in-Bangladesh.jpg?resize=650%2C400&ssl=1"
                                  alt="Image"
                                  style={{width:'170px',height:'200px'}}
                                />
                                <ul className="check-style-one">
                                  <li>
                                    <i className="far fa-check" />
                                    Trusted RMG Partners
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Shipping Cost Low
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Professional Team Member
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Awards Winning Company
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </div>
                    </Tab.Container>
                  </div>
                  <div className="col-lg-5">
                    {/*====== Choose Image Box  ======*/}
                    <div className="choose-image-box">
                      <img
                        src="https://images.pexels.com/photos/4614227/pexels-photo-4614227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Choose Image"
                        style={{width:'300px',height:'500px'}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      <section className="gallery-section-minus p-r z-2 pt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title mb-50 pr-lg-70 wow fadeInLeft">
                <span className="sub-title">
                  <i className="flaticon-Fashion" />
                  Photo Gallery
                </span>
                <h2>Look Our RMG Insides</h2>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== Project Content Box ======*/}
              <div className="project-content-box mb-50 pl-lg-100 wow fadeInRight">
                <p className="mb-35">
                  Sed perspiciatis unde omnis isnatu volunteer accusantium
                  doloremque laudantium totam rem apeira eaque ipsa quae ab
                  eillo inventore veritatis et quasi architecto beatae vitae
                </p>
                <Link legacyBehavior href="/project-grid">
                  <a className="main-btn golden-btn">View More Projects</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Slider
          {...sliderProps.projectsSliderOne}
          className="projects-slider-one wow fadeInDown"
        >
      
          <div className="single-project-item">
            <div className="project-img">
              <img style={{height:'380px'}} src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-black">
                  <h3 className="title">
                    <Link legacyBehavior href="/">
                      <a>Take Care What We Love</a>
                    </Link>
                  </h3>
                  <a href="#">KNIT</a>
                </div>
                <Link legacyBehavior href="/">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
  
          <div className="single-project-item">
            <div className="project-img">
              <img style={{height:'380px'}} src="https://images.pexels.com/photos/4614227/pexels-photo-4614227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-black">
                  <h3 className="title">
                    <Link legacyBehavior href="/">
                      <a>Take Care What We Love</a>
                    </Link>
                  </h3>
                  <a href="#">ACCESSORIES</a>
                </div>
                <Link legacyBehavior href="/">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
            <img style={{height:'380px'}} src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-black">
                  <h3 className="title">
                    <Link legacyBehavior href="/">
                      <a>Take Care What We Love</a>
                    </Link>
                  </h3>
                  <a href="#">PRINTING</a>
                </div>
                <Link legacyBehavior href="/">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
            <img style={{height:'380px'}} src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-black">
                  <h3 className="title">
                    <Link legacyBehavior href="/">
                      <a>Take Care What We Love</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; More</a>
                </div>
                <Link legacyBehavior href="/">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
            <img style={{height:'380px'}} src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-black">
                  <h3 className="title">
                    <Link legacyBehavior href="/">
                      <a>Take Care What We Love</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; More</a>
                </div>
                <Link legacyBehavior href="/">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
            <img style={{height:'380px'}} src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-black">
                  <h3 className="title">
                    <Link legacyBehavior href="/">
                      <a>Take Care What We Love</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; More</a>
                </div>
                <Link legacyBehavior href="/">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img  style={{height:'380px'}} src="/assets/images/gallery/gl-3.jpg" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-black">
                  <h3 className="title">
                    <Link legacyBehavior href="/">
                      <a>Take Care What We Love</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; More</a>
                </div>
                <Link legacyBehavior href="/">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
            <img style={{height:'380px'}} src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-black">
                  <h3 className="title">
                    <Link legacyBehavior href="/">
                      <a>Take Care What We Love</a>
                    </Link>
                  </h3>
                  <a href="#">RMG &amp; More</a>
                </div>
                <Link legacyBehavior href="/">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/*====== End Gallery Section ======*/}
      {/*====== Start Counter Section  ======*/}


   
    </section>
  );
};
export default Homepage;

