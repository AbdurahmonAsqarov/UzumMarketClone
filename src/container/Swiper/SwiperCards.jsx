import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper.css';

// import required modules
import { Autoplay,Pagination,Navigation } from 'swiper/modules';
const SwiperCards = () => {
  return (
    <>
       <Swiper
        pagination={{
          dynamicBullets: true,
          
        }}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay,Pagination,Navigation]}
        className="swiperCards"
      >
        <SwiperSlide>
          <img src="https://images.uzum.uz/co0mdm72u18gghclhamg/main_page_banner.jpg" alt="" />
            
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.uzum.uz/cn9qq6hs99ouqbfv7o40/main_page_banner.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.uzum.uz/co0iv2dlqsilsr3kpst0/main_page_banner.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://images.uzum.uz/co0isc6pom4ma10qqe9g/main_page_banner.jpg" alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default SwiperCards