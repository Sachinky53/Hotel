import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect } from 'react';

export default function Slider() {
    const [carousel, setCrousel] = React.useState([]);
    const fetchCrousel = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/crousel/getCrousel");
            const crouselData = response.data.crousel;
            setCrousel(crouselData);
            // console.log(crouselData);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchCrousel();
    },[])
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
                {carousel.length > 0 ? (
                    carousel.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide">
                                <img src={`http://localhost:4000/uploads/${item.image}`} alt={item.title || "Slide"} />
                                {/* <h3>{item.title}</h3> */}
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <p>Loading slides...</p>
                )}
            </Swiper>
        </div> 
    );
}
