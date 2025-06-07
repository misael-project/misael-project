import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { EffectCoverflow, Pagination, Navigation, FreeMode, Thumbs } from "swiper";

export default function CatalogCarousel({itemIds, isLooped=true}) {
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="cafaSwiper rounded-6xl max-w-6xl bg-transparent"
        style={{
          '--swiper-navigation-color': '#ed9189',
          '--swiper-pagination-color': '#ed9189',
        }}
      >
        {
          itemIds.map((itemId, index) => {return (
            <SwiperSlide key={index}>
              <img style={{backgroundColor: 'transparent', height: '60vh'}} src={`https://drive.google.com/thumbnail?id=${itemId}&sz=w10000`} alt={'Catalog Item'}/>
            </SwiperSlide>
          )})
        }
      </Swiper>
    </div>
  );
}
