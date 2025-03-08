import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
    return (
        <div className="container-slide">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div className="slide slide1"></div></SwiperSlide>
                <SwiperSlide><div className="slide slide2"></div></SwiperSlide>
                <SwiperSlide><div className="slide slide3"></div></SwiperSlide>
                <SwiperSlide><div className="slide slide4"></div></SwiperSlide>
            </Swiper>
        </div>
    );
}
