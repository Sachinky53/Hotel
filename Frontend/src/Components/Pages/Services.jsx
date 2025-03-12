import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Services.css';
import ServicesRoom from '/servicePicture/ServicesRoom.jpg';
import ResturentCatering from '/servicePicture/ResturentCatering.jpg';

export default function Services() {
    const ServiceContainer = [
        { serviceImage: ServicesRoom, servicesTitle: "Hotel Rooms" },
        { serviceImage: ResturentCatering, servicesTitle: "Resturent/Catering" }


    ];

    return (
        <div className="services-container">
            <div className="services-heading">
                <h4 className='our-services'>---- Our Services ----</h4>
                <div className="explore-service-container">
                    <h3 className='explore-services'>
                        <p> Explore Our <span className='services' style={{ color: 'hsl(26, 90.70%, 53.70%)', fontWeight: 'bold', fontSize: '30px' }} >Services</span></p>
                    </h3>
                </div>
            </div>
        
            <Swiper
            className='services-container-cards'
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                grabCursor={true}
                touchMoveStopPropagation={true}
            >
                {ServiceContainer.map((service, index) => (
                    <SwiperSlide key={index} >
                        
                        <div className="service-booking">
                            <div className="picture-service-container">
                                <img className='image-services' src={service.serviceImage} alt={service.servicesTitle} />
                            </div>
                            <div className="service-title-container">
                                <p className='service-main-title'>{service.servicesTitle}</p>
                            </div>
                        </div>
                

                    </SwiperSlide>
                ))}
        </Swiper>
        </div>
    )
}
