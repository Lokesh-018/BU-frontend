import React from 'react';
import Slider from 'react-slick';
import { assets } from '../assets/HomePage/homePage.js';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full">
      <section className="relative">
      <Slider {...settings}>
          <div>
            <img
              src={assets.coverimage}
              alt="Slide 1"
              className="w-full h-[32rem] object-cover" // Increased height to 32rem
            />
          </div>
          <div>
            <img
              src={assets.coverimage4}
              alt="Slide 2" 
              className="w-full h-[32rem] object-cover" // Increased height to 32rem
            />
          </div>
          <div>
            <img
              src={assets.coverimage3}
              alt="Slide 3"
              className="w-full h-[32rem] object-cover" // Increased height to 32rem
            />
          </div>
        </Slider>
      </section>
    </div>
  );
};

export default Hero;