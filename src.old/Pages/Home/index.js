import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel } from 'swiper';
import Header from '../../../src/Components/Header';
import Content from '../../../src/Components/Content';
import Footer from '../../../src/Components/Footer';
import Works from '../../../src/Components/Works';
import Testimonial from '../../../src/Components/Testimonial';
import TestimonialCard from '../../../src/Components/TestimonialCard';
import home from '../../Assets/video/home.mp4';
import classes from './home.module.css';

SwiperCore.use([Mousewheel]);

function Home() {
  return (
    <div className="container-fluid g-0">
      <div className="row g-0 position-relative">
        <Header />
        <div className={classes.overlay}></div>
        <video autoPlay loop muted className={classes.video}>
          <source src={home} type="video/mp4" />
        </video>
      </div>
      <Content />
      <Works />
      <Testimonial />
      <div className="row" style={{ margin: '100px 0' }}>
        <Swiper slidesPerView={1} mousewheel={true}>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
