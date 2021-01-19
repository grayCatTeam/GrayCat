import Header from '../../Components/Header';
import home from '../../Assets/video/home.mp4';
import Title from '../../Atoms/Title'
import classes from './home.module.css';
import rainlogo from "../../Assets/images/rain_media_logo-01.svg";


function Home() {
  return (
    <div className="container-fluid g-0 vh-100">
      <div className="row g-0 position-relative">

        <div className={classes.overlay}>
          <Header />
          <div className={`d-flex justify-content-center align-items-center flex-column ${classes.logoWraper}`}>
            <img src={rainlogo} width={600}/>
            <Title frontSide="We Create Future With Rain" backSide="We Create Future With Rain"/>
          </div>

        </div>
        <video autoPlay loop muted className={classes.video}>
          <source src={home} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Home;
