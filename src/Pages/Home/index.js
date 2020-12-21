import Header from '../../Components/Header';
import Content from '../../Components/Content';
import Footer from '../../Components/Footer';
import Title from '../../Components/Title';
import './home.css';
import home from '../../Assets/video/home.mp4';

function Home() {
  return (
    <div className="container-fluid-xl homeWrapper">
      <div className="landing">
        <Header />
        <video
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: -1,
            objectFit: 'cover',
          }}
        >
          <source src={home} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Home;
