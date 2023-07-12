import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade ,Pagination} from "swiper";



  
const SliderOneData = [
    {
      image:"https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  
      subTitle: "WELCOME TO Purbasha",
      title: "RMG Leader 1.",
      button: {
        label: "DISCOVER MORE",
        url: "/about"
      }
    },
    {
      image:  "https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ,
      subTitle: "WELCOME TO Purbasha2",
      title: "RMG Leader 2.",
      button: {
        label: "DISCOVER MORE",
        url: "/about"
      }
    },
    {
      image: "https://images.pexels.com/photos/3875430/pexels-photo-3875430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ,
      subTitle: "WELCOME TO Purbasha3",
      title: "RMG Leader 3.",
      button: {
        label: "DISCOVER MORE",
        url: "/about"
      }
    }
  ];
  
SwiperCore.use([Autoplay, Navigation, EffectFade]);

const SliderNew = () => {

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
    },
    
  };


  
  return (
    <section className="main-slider">
      <Swiper 

      // direction={'vertical'}
      spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: "#main-slider-next",
          prevEl: "#main-slider-prev"
        }}
        modules={[Autoplay, Navigation,Pagination]}
        effect={'fade'}
      
      
      >
        {SliderOneData.map(({ image, subTitle, title, button }, index) => (
          <SwiperSlide key={index}>
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div>
              <div>
                <div  className="text-center">
                  <p className="main-slider__subtext">{subTitle}</p>
                  <h3 className="main-slider__title">{title}</h3>
                  {/* <Link href={button.url}>
                    <p className={`common_btn`}>
                      <span>{button.label}</span>
                    </p>
                  </Link> */}
                </div>
              </div>
            </div>
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

export default SliderNew
