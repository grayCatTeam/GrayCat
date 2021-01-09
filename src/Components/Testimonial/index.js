import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel } from 'swiper';
import TestimonialCard from '../TestimonialCard';
import Title from '../../Atoms/Title';
import earth from '../../Assets/images/earth.svg';
import asgardia from '../../Assets/images/asgardia.svg';
import circle from '../../Assets/images/circle.svg';
import harakiri from '../../Assets/images/harakiri.svg';
import muzica from '../../Assets/images/muzica.svg';
import classes from './testimonial.module.css';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Mousewheel]);

function Testimonial() {
  return (
    <div className="row g-0 mb-5">
      <div className="col-12 mb-5 padding200">
        <Title backSide="TESTIMONIAL" frontSide="TESTIMONIAL" />
      </div>
      <div className="col-12 mb-5 padding200">
        <div className="row justify-content-center">
          <div className="col-xxl-3 col-md-4 col-sm-6 col-6 pb-5 text-center">
            <img src={earth} alt="earth" />
          </div>
          <div className="col-xxl-3 col-md-4 col-sm-6 col-6 pb-5 text-center">
            <img src={earth} alt="earth" />
          </div>
          <div className="col-xxl-3 col-md-4 col-sm-6 col-6 pb-5 text-center">
            <img src={earth} alt="earth" />
          </div>
          <div className="col-xxl-3 col-md-4 col-sm-6 col-6 pb-5 text-center">
            <img src={earth} alt="earth" />
          </div>
          <div className="col-xxl-3 col-md-4 col-sm-6 col-6 pb-5 text-center">
            <img src={earth} alt="earth" />
          </div>
          <div className="col-xxl-3 col-md-4 col-sm-6 col-6 pb-5 text-center">
            <img src={earth} alt="earth" />
          </div>
          <div className="col-xxl-3 col-md-4 col-sm-6 col-6 pb-5 text-center">
            <img src={earth} alt="earth" />
          </div>
          <div className="col-xxl-3 col-md-4 col-sm-6 col-6 pb-5 text-center">
            <img src={earth} alt="earth" />
          </div>
          <div className="col-xxl-3 col-md-4 col-sm-6 col-6 pb-5 text-center">
            <img src={earth} alt="earth" />
          </div>
          <div className="col-xxl-3 col-md-4 col-sm-6 col-6 pb-5 text-center">
            <img src={earth} alt="earth" />
          </div>
          <div className="col-xxl-3 col-md-4 col-sm-6 col-6 pb-5 text-center">
            <img src={earth} alt="earth" />
          </div>
          <div className="col-xxl-3 col-md-4 col-sm-6 col-6 pb-5 text-center">
            <img src={earth} alt="earth" />
          </div>
          <div className="col-xxl-3 col-md-4 col-sm-6 col-6 pb-5 text-center">
            <img src={earth} alt="earth" />
          </div>
          <div className="col-xxl-3 col-md-4 col-sm-6 col-6 pb-5 text-center">
            <img src={earth} alt="earth" />
          </div>
          <div className="col-xxl-3 col-md-4 col-sm-6 col-6 pb-5 text-center">
            <img src={earth} alt="earth" />
          </div>
          <div className="col-xxl-3 col-md-4 col-sm-6 col-6 pb-5 text-center">
            <img src={earth} alt="earth" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
