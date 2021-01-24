import Header from '../../../src/Components/Header';
import Footer from '../../../src/Components/Footer';
import './about.css';
import ContentLanding from '../../../src/Components/ContentLanding';
import {Swiper, SwiperSlide} from 'swiper/react';

import film from '../../Assets/images/film.png';
import branding from '../../Assets/images/branding.png';
import cast from '../../Assets/images/casting.png';
import LetsComponent from '../../../src/Components/LetsComponent';
import team from '../../Assets/images/team.svg';
import profil from '../../Assets/images/profil.svg';
import TeamCard from '../../Atoms/TeamCard';
import Works from '../../../src/Components/Works';

function About() {
  return (
    <div>
      <div style={{backgroundColor: 'black'}}>
        <Header/>
        <ContentLanding/>
      </div>
      <div style={{padding: '5rem 0'}}>
        <Swiper centeredSlides={true} slidesPerView={2}>
          <SwiperSlide>
            <img src={film} width="100%"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={branding} width="100%"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cast} width="100%"/>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="aboutRainText">
        <p>
          Etiam quis leo est. Nullam id urna non neque laoreet dignissim eget ac
          justo. In eleifend commodo faucibus. Nullam et sem volutpat,
          ullamcorper nibh in,
          <br/>
          lobortis ex. Quisque facilisis quis libero sed laoreet. Etiam id orci
          tempor, tincidunt nisi eu, imperdiet leo. Duis nec lectus quis leo
          blandit varius.
          <br/> Pellentesque et arcu sit amet arcu maximus luctus. Praesent
          pulvinar risus ligula, sed auctor dolor faucibus eget. Nullam vel diam
          interdum mauris congue facilisis <br/> ut vitae urna. Praesent auctor
          consequat ipsum, fermentum imperdiet elit blandit quis . Donec at
          turpis sit amet ex aliquam dictum vitae a lacus.
        </p>
      </div>
      <div className="aboutRainText2">
        <p>
          Duis sodales varius mauris ultrices tincidunt. Phasellus in auctor
          nisi, a vulputate metus. Curabitultrices pharetra magna, sit amet
          commodo sem pulvinar at. Curabitur id volutpat nunc. Praesent auctor
          consequat ipsum, fermentum imperdiet elit blandit quis . Donec at
          turpis sit amet ex aliquam dictum vitae a lacus.
        </p>
      </div>

      <div className="d-flex justify-content-between">
        <div style={{width: '30%'}}>
          <LetsComponent buttonName={'CONTACT'}/>
        </div>
        <div
          className="d-flex align-items-end justify-content-center"
          style={{
            backgroundColor: 'black',
            width: '70%',
            height: '850px',
            boxShadow: '20px 20px 20px grey',
          }}
        >
          <div>
            <img src={team}/>
          </div>
        </div>
      </div>
      <div className="teamBoxWrapper d-flex flex-wrap flex-row">
        <TeamCard teamUrl={profil} name={'Yunus Özcan'} position={'founder'}/>
        <TeamCard teamUrl={profil} name={'Mine Sunar'} position={'founder'}/>
        <TeamCard teamUrl={profil} name={'Nihal Çelik'} position={'founder'}/>
        <TeamCard teamUrl={profil} name={'Emre Çelik'} position={'founder'}/>
        <TeamCard teamUrl={profil} name={'Semih Çelik'} position={'founder'}/>
        <TeamCard
          teamUrl={profil}
          name={'Mustafa Cenk Zorkirişçi'}
          position={'founder'}
        />
        <TeamCard teamUrl={profil} name={'John Sidikli'} position={'founder'}/>
        <TeamCard teamUrl={profil} name={'John Sidikli'} position={'founder'}/>
        <TeamCard teamUrl={profil} name={'John Sidikli'} position={'founder'}/>
      </div>
      <Works/>
      <Footer/>
    </div>
  );
}

export default About;
