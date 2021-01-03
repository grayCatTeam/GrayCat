import './casting.css';

import ContentLanding from '../../Components/ContentLanding';
import popularCasting from '../../../src/Assets/images/popularCasting.svg';
import Header from '../../Components/Header';
import Title from '../../Atoms/Title';
import PrewButton from '../../Atoms/PrewButton';
import NextButton from '../../Atoms/NextButton/nextButton';
import LetsComponent from '../../Components/LetsComponent';
import Footer from '../../Components/Footer';
import GaleryComponent from '../../Components/GaleryComponent';

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
