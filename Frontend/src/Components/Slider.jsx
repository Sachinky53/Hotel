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
import Hotels from './Pages/Hotels';

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
        <Hotels />
    );
}
