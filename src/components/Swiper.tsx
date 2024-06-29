import React, { FC, memo } from 'react'
import Slider from "react-slick";
import { SwiperProps } from '@/types';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Swiper: FC<SwiperProps> = ({
    children,
    dots = true,
    infinite = true,
    slidesToShow = 3,
    slidesToShowSm = 1,
    autoplay = false,
}) => {

    const settings = {
        dots,
        infinite,
        slidesToShow,
        autoplay,
        speed: 3000,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        nextArrow: <></>,
        prevArrow: <></>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: slidesToShowSm,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    speed: 3000,
                    autoplaySpeed: 3000,
                }
            },
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    )
}

export default memo(Swiper)