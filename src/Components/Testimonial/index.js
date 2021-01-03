import './testimonial.css';
import testimonial from '../../Assets/images/testimonialTitle.png';
import earth from '../../Assets/images/earth.svg';
import asgardia from '../../Assets/images/asgardia.svg';
import circle from '../../Assets/images/circle.svg';
import harakiri from '../../Assets/images/harakiri.svg';
import muzica from '../../Assets/images/muzica.svg';
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from '../TestimonialCard';

function Testimonial() {
  return (
    <div className="container-fluid testimonialContainer">
      <img src={testimonial} />

      <div className="clientLogo container">
        <div className="clientLogoBox">
          <img src={earth} />
        </div>
        <div className="clientLogoBox">
          <img src={asgardia} />
        </div>
        <div className="clientLogoBox">
          <img src={circle} />
        </div>
        <div className="clientLogoBox">
          <img src={harakiri} />
        </div>
        <div className="clientLogoBox">
          <img src={muzica} />
        </div>
        <div className="clientLogoBox">
          <img src={earth} />
        </div>
        <div className="clientLogoBox">
          <img src={asgardia} />
        </div>
        <div className="clientLogoBox">
          <img src={circle} />
        </div>
        <div className="clientLogoBox">
          <img src={harakiri} />
        </div>
        <div className="clientLogoBox">
          <img src={muzica} />
        </div>
        <div className="clientLogoBox">
          <img src={earth} />
        </div>
        <div className="clientLogoBox">
          <img src={asgardia} />
        </div>
        <div className="clientLogoBox">
          <img src={circle} />
        </div>
        <div className="clientLogoBox">
          <img src={harakiri} />
        </div>
        <div className="clientLogoBox">
          <img src={muzica} />
        </div>
      </div>

      <Swiper spaceBetween={300} slidesPerView={2}>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>

        {/*

          fourth box doesnt seen.

        */}
      </Swiper>
    </div>
  );
}

export default Testimonial;
