import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Mousewheel, Pagination } from 'swiper';
import ContentLanding from '../../Components/ContentLanding';
import popularCasting from '../../Assets/images/popularCasting.svg';
import Header from '../../Components/Header';
import Title from '../../Atoms/Title';
import PrewButton from '../../Atoms/PrewButton';
import NextButton from '../../Atoms/NextButton/nextButton';
import LetsComponent from '../../Components/LetsComponent';
import Footer from '../../Components/Footer';
import GaleryComponent from '../../Components/GaleryComponent';
import './casting.css';

SwiperCore.use([EffectCoverflow, Mousewheel, Pagination]);

function Casting() {
  return (
    <>
      <div style={{ backgroundColor: 'black' }}>
        <Header />
        <ContentLanding />
      </div>
      <div className="popularCasting container">
        <img src={popularCasting} />
        <div
          className="swiperArea"
          style={{ width: '100%', height: '600px', backgroundColor: 'black' }}
        ></div>
        <img src={popularCasting} />
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          coverflowEffect={{
            rotate: 20,
            stretch: 10,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          mousewheel={true}
        >
          <SwiperSlide>
            <img src={'https://picsum.photos/400/400?random=1'} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://picsum.photos/400/400?random=2'} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://picsum.photos/400/400?random=3'} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://picsum.photos/400/400?random=4'} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://picsum.photos/400/400?random=5'} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://picsum.photos/400/400?random=6'} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://picsum.photos/400/400?random=7'} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://picsum.photos/400/400?random=8'} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://picsum.photos/400/400?random=9'} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://picsum.photos/400/400?random=10'} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://picsum.photos/400/400?random=11'} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://picsum.photos/400/400?random=12'} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://picsum.photos/400/400?random=13'} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="castContainer container">
        <Title frontSide="Cast" backSide="Cast" />
        <p style={{ padding: '2rem 15rem 2rem 6rem', color: 'black' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          sollicitudin purus tortor, et congue ante pellentesque vitae. Aliquam
          pellentesque diam fringilla ipsum semper, sit amet convallis purus
          euismod. Curabitur dapibus dignissim nunc. Proin molestie, nisl sed
          mollis ultricies, urna neque porttitor tellus, sit amet tristique
          tortor sapien et odio. Nullam nunc sapien, congue nec aliquam nec,
          pulvinar ut sapien.
        </p>
        <GaleryComponent />
      </div>

      <div className="letsContainer">
        <LetsComponent buttonName="CONTACT" />
      </div>

      <Footer />
    </>
  );
}

export default Casting;
