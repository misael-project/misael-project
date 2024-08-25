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


export default function Carousel() {
  const [swiper, setSwiper] = useState(null)
  const [isReadMore, setIsReadMore] = useState(false);
  const items = [
    {
      poster: "poster-cafa.jpg",
      eventTitle: "Creators Anthro Fair",
      eventDescription: `Creators Anthro Fair/CAFA adalah acara pasar seni bagi penggemar dan artist anthro di Indonesia.
      \n\n\nPada 2024, CAFA diselenggarakan di Jakarta Design Center, hari Kamis, 23 Mei 2024 pukul 09.00-17.00 WIB. Dihadiri oleh 31 circle dan lebih dari 360 pengunjung, CAFA terselenggara dengan dukungan penuh dari Indonesia Furs, komunitas furry di Indonesia.`
    },
    {
      poster: '/poster-kaijuverse.png',
      eventTitle: "Kaijuverse Festival",
      eventDescription: `KaijuVerse Festival 2023 adalah pameran dan pertemuan komunitas Godzilla Freaks Indonesia yang mengusung tema "kaijuu" atau monster raksasa. Acara ini menyorot figur kaijuu dari masa ke masa, booth tempat jual beli merchandise dan barang seputar hobi ini, serta menjadi titik kumpul para penggemar kaijuu dari berbagai kota. KaijuVerse Festival 2023 merupakan wadah untuk memperkenalkan makhluk-makhluk ini kepada khalayak umum.`
    },
    {
      poster:  "/poster-afternoon-screentime.png",
      eventTitle: "Afternoon Screentime",
      eventDescription: `Afternoon Screentime adalah salah satu program yang diselenggarakan oleh Misael Project. Sebagai perkenalan Misael Project kepada khalayak umum, Afternoon Screetime menyediakan pemutaran film pop culture Jepang secara gratis tiap bulannya. Program ini dirancang sebagai alternatif kegiatan akhir pekan bagi pengunjung untuk bersantai dan berinteraksi dengan sesama penikmat film dalam ranah minat yang sama.`
    },
  ] 
  const [descText, setDescText] = useState(items[0].eventDescription)

  return (
    <div className="px-6 items-center sm:bigSwiper">
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
              <div>
                <p className="highlight-title font-extrabold text-3xl">{item.eventTitle}</p>
                <img style={{backgroundColor: 'transparent'}} src={item.poster} alt={item.eventTitle}/>
              </div>
            </SwiperSlide>
          )})
        }
      </Swiper>
      {
        swiper && (
        <ReadMore isReadMore={isReadMore} setIsReadMore={setIsReadMore}>
          {descText}
        </ReadMore>
        )
      }
    </div>
  );
}
