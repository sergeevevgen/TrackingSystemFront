import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './index.css';


export const Slider: React.FunctionComponent = () => {
    return (
        <div className="swiper-container">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                centeredSlides={true}
                loop={true}
            >
                <SwiperSlide className="slide-wrapper">
                    <div className="card custom-card">
                        <img src={"https://plus.unsplash.com/premium_photo-1714229505201-072ef1c6edcd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="card-img-top card-image" alt="Slide 1" />
                        <div className="card-body">
                            <h5 className="card-title">Slide 1</h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-wrapper">
                    <div className="card custom-card">
                        <img src={"https://images.unsplash.com/photo-1715645961085-b3c21251a061?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="card-img-top card-image" alt="Slide 2" />
                        <div className="card-body">
                            <h5 className="card-title">Slide 2</h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-wrapper">
                    <div className="card custom-card">
                        <img src={"https://plus.unsplash.com/premium_photo-1708633003240-569a6135deaa?q=80&w=1736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="card-img-top card-image" alt="Slide 3" />
                        <div className="card-body">
                            <h5 className="card-title">Slide 3</h5>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    );
}
