import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import "swiper/css";


  
const SliderOneData = [
    {
      image:"https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  
      subTitle: "WELCOME TO MEIPALY AGENCY1",
      title: "SMART WEB \n DESIGN AGENCY1.",
      button: {
        label: "DISCOVER MORE",
        url: "/about"
      }
    },
    {
      image:  "https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ,
      subTitle: "WELCOME TO MEIPALY AGENCY2",
      title: "SMART WEB \n DESIGN AGENCY2.",
      button: {
        label: "DISCOVER MORE",
        url: "/about"
      }
    },
    {
      image: "https://images.pexels.com/photos/3875430/pexels-photo-3875430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ,
      subTitle: "WELCOME TO MEIPALY AGENCY3",
      title: "SMART WEB \n DESIGN AGENCY3.",
      button: {
        label: "DISCOVER MORE",
        url: "/about"
      }
    }
  ];
  
SwiperCore.use([Autoplay, Navigation, EffectFade]);

const SliderOne = () => {

  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev"
    },
    autoplay: {
      delay: 5000
    }
  };
  
  return (
    <section className="main-slider">
      <Swiper {...mainSlideOptions}>
        {SliderOneData.map(({ image, subTitle, title, button }, index) => (
          <SwiperSlide key={index}>
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <Container>
              <Row>
                <Col lg={12} className="text-center">
                  <p className="main-slider__subtext">{subTitle}</p>
                  <h3 className="main-slider__title">{title}</h3>
                  {/* <Link href={button.url}>
                    <p className={`common_btn`}>
                      <span>{button.label}</span>
                    </p>
                  </Link> */}
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev" id="main-slider-prev">
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="swiper-button-next" id="main-slider-next">
          <i className="fa fa-angle-right"></i>
        </div>
      </Swiper>
    </section>
  );
};

export default SliderOne;
