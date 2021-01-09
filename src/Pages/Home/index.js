import Header from '../../Components/Header';
import Content from '../../Components/Content';
import Footer from '../../Components/Footer';
import Works from '../../Components/Works';
import Testimonial from '../../Components/Testimonial';
import home from '../../Assets/video/home.mp4';
import classes from './home.module.css';
import TestimonialCard from '../../Components/TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel } from 'swiper';
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
