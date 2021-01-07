import Header from '../../Components/Header';
import Content from '../../Components/Content';
import Footer from '../../Components/Footer';
import './home.css';
import home from '../../Assets/video/home.mp4';
import Works from '../../Components/Works';
import Testimonial from '../../Components/Testimonial';

function Home() {
  return (
    <div className="container-fluid-xl homeWrapper">
      <div className="landing">
        <div className="overlay"></div>
        <Header/>
        <video autoPlay loop muted className="video">
          <source src={home} type="video/mp4"/>
        </video>
      </div>
      <Content/>
      <Works/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default Home;
