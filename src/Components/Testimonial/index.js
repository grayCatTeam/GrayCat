import './testimonial.css';
import testimonial from '../../Assets/images/testimonialTitle.png';
import earth from '../../Assets/images/earth.svg';
import asgardia from '../../Assets/images/asgardia.svg';
import circle from '../../Assets/images/circle.svg';
import harakiri from '../../Assets/images/harakiri.svg';
import muzica from '../../Assets/images/muzica.svg';
import 'swiper/swiper-bundle.min.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import TestimonialCard from '../TestimonialCard';

function Testimonial() {
  return (
    <div className="container-fluid testimonialContainer">
      <img src={testimonial}/>

      <div className="clientLogo container">
        <div className="clientLogoBox">
          <img src={earth} alt="earth"/>
        </div>
        <div className="clientLogoBox">
          <img src={asgardia} alt="asgardia"/>
        </div>
        <div className="clientLogoBox">
          <img src={circle} alt="logo"/>
        </div>
        <div className="clientLogoBox">
          <img src={harakiri} alt="logo"/>
        </div>
        <div className="clientLogoBox">
          <img src={muzica} alt="logo"/>
        </div>
        <div className="clientLogoBox">
          <img src={earth} alt="logo"/>
        </div>
        <div className="clientLogoBox">
          <img src={asgardia} alt="logo"/>
        </div>
        <div className="clientLogoBox">
          <img src={circle} alt="logo"/>
        </div>
        <div className="clientLogoBox">
          <img src={harakiri} alt="logo"/>
        </div>
        <div className="clientLogoBox">
          <img src={muzica} alt="logo"/>
        </div>
        <div className="clientLogoBox">
          <img src={earth} alt="logo"/>
        </div>
        <div className="clientLogoBox">
          <img src={asgardia} alt="logo"/>
        </div>
        <div className="clientLogoBox">
          <img src={circle} alt="logo"/>
        </div>
        <div className="clientLogoBox">
          <img src={harakiri} alt="logo"/>
        </div>
        <div className="clientLogoBox">
          <img src={muzica} alt="logo"/>
        </div>
      </div>

      <Swiper spaceBetween={300} slidesPerView={2}>
        <SwiperSlide>
          <TestimonialCard/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard/>
        </SwiperSlide>

        {/*

          fourth box doesnt seen.

        */}
      </Swiper>
    </div>
  );
}

export default Testimonial;
