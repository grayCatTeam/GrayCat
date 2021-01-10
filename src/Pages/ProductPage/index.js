/*component import*/
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import TestimonialCard from "../../Components/TestimonialCard";
import SmallTitle from "../../Atoms/SmallTitle";

/*assets import*/
import video from '../../Assets/video/home.mp4';




function ProductPage() {
  return (
    <>
      <div className={`container-fluid g-0`} style={{backgroundColor:"black"}}>
        <Header />

          <div className="row g-0 d-flex align-items-center flex-column">
            <div className={`col-xl-6 col-md-8 col-sm-10`}>
              <video width="100%" height="100%" controls>
                <source src={video} type="video/mp4" alt="rain media"/>
              </video>
            </div>
          </div>


        <div className={`container`}>
          <div className={`row g-0 mt-5 pt-5 offset-1 d-flex justify-content-center`} style={{minHeight:"300px"}}>
            <div className={`col-xl-4 text-white`}>
              <SmallTitle title="Kind"/>
            </div>
            <div className={`col-xl-4 text-white`}>
              <SmallTitle title="Director"/>
            </div>
          </div>
          <div className={`row g-0 offset-1 d-flex justify-content-center`} style={{minHeight:"300px"}}>
            <div className={`col-xl-4 text-white`}>
              <SmallTitle title="Cinematography"/>
            </div>
            <div className={`col-xl-4 text-white`}>
              <SmallTitle title="Music"/>
            </div>
          </div>
          <div className={`row g-0 offset-1 d-flex justify-content-center`} style={{minHeight:"300px"}}>
            <div className={`col-xl-4 text-white`} >
              <SmallTitle title="Acting"/>
            </div>
            <div className={`col-xl-4 text-white`}>
              <SmallTitle title="Dubbing"/>
            </div>
          </div>
        </div>
        <TestimonialCard/>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
