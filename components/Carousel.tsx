"use client"
import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { EffectCoverflow, Navigation } from "swiper/modules";
import ReadMore from "./readMore";
import ContentTemplate from "./content-template";
import Divider from "./Divider";
import YellowCard from "./YellowCard";


export default function Carousel() {
  const [swiper, setSwiper] = useState(null)
  const [isReadMore, setIsReadMore] = useState(false);
  const items = [
    {
      poster: "cafa-tall.jpg",
      eventTitle: "Creators Anthro Fair",
      eventDescription: `Creators Anthro Fair/CAFA adalah acara pasar seni bagi penggemar dan artist anthro di Indonesia.
      \n\n\nPada 2024, CAFA diselenggarakan di Jakarta Design Center, hari Kamis, 23 Mei 2024 pukul 09.00-17.00 WIB. Dihadiri oleh 31 circle dan lebih dari 360 pengunjung, CAFA terselenggara dengan dukungan penuh dari Indonesia Furs, komunitas furry di Indonesia.`
    },
    {
      poster: "cafa-tall.jpg",
      eventTitle: "Creators Anthro Fair",
      eventDescription: `Creators Anthro Fair/CAFA adalah acara pasar seni bagi penggemar dan artist anthro di Indonesia.
      \n\n\nPada 2024, CAFA diselenggarakan di Jakarta Design Center, hari Kamis, 23 Mei 2024 pukul 09.00-17.00 WIB. Dihadiri oleh 31 circle dan lebih dari 360 pengunjung, CAFA terselenggara dengan dukungan penuh dari Indonesia Furs, komunitas furry di Indonesia.`
    },
  ] 
  const [descText, setDescText] = useState(items[0].eventDescription)

  return (
    <ContentTemplate sectionId="Carousel" title="EVENTS">
      <div className="items-center sm:bigSwiper">
        <Swiper
          effect={'coverflow'}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slideToClickedSlide={true}
          modules={[Navigation, EffectCoverflow]}
          className="mySwiper"
          onSlideChange={() => {setDescText(items[swiper.activeIndex].eventDescription); setIsReadMore(false)}}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {
            items.map(item => {return (
              <SwiperSlide className={"py-2"} style={{backgroundColor: 'transparent'}} key={item.poster}>
                <div className="static h-96 mb-2">
                  {/* <p className="highlight-title font-extrabold text-3xl">{item.eventTitle}</p> */}
                  <img style={{backgroundColor: 'transparent'}} src={item.poster} alt={item.eventTitle} className="swiper-img"/>
                  {/* <div className="absolute bottom-3 left-3 text-white text-left bg-opacity-30 bg-black p-2 rounded-sm">
                    <h1 className="h1 text-2xl">{item.eventTitle}</h1>
                    <p className="text-sm">
                      CAFA adalah acara pasar seni bagi penggemar dan artist anthro di Indonesia. diselenggarakan di Jakarta Design Center, CAFA dihadiri oleh 31 circle dan lebih dari 360 pengunjung
                    </p>
                  </div> */}
                  <img src='corner (1).svg' className="absolute top-0 left-0 w-20"/>
                  <img src='corner (1).svg' className="absolute bottom-20 right-0 w-20 rotate-180"/>
                  <div className="absolute bottom-0 right-0 text-left px-2 text-sm font-bold">
                    <YellowCard>
                      <p>
                        CAFA adalah acara pasar seni bagi penggemar dan artist anthro di Indonesia. diselenggarakan di Jakarta Design Center, CAFA dihadiri oleh 31 circle dan lebih dari 360 pengunjung
                      </p>
                    </YellowCard>
                  </div>
                </div>
              </SwiperSlide>
            )})
          }
        </Swiper>
        {/* {
          swiper && (
          <div className="scroll-mt-24 flex-row items-center gap-4 py-8 px-8 sm:flex font-medium basis-2/3 text-lg">
            <ReadMore isReadMore={isReadMore} setIsReadMore={setIsReadMore}>
              {descText}
            </ReadMore>
          </div>
          )
        } */}
        <div className="mt-4">
          <Divider/>

        </div>
      </div>
    </ContentTemplate>
  );
}
