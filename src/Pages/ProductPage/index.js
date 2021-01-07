import classes from "../ProductPage/productPage.module.css"
import Header from "../../Components/Header";
import video from "../../Assets/video/home.mp4"
import SmallTitle from "../../Atoms/SmallTitle";
import Footer from "../../Components/Footer";
import CastCard from "../../Atoms/CastCard";
import TestimonialCard from "../../Components/TestimonialCard";
import customer from "../../Assets/images/profilePicture.svg"


function ProductPage() {

  return (

    <>
      <div className={classes.header}>
        <Header/>
      </div>

      <div className={classes.content}>
        <div className="container d-flex align-items-center flex-column">
          <div className={classes.productDiv}>
            <video width="100%" height="100%" controls>
              <source src={video} type="video/mp4"/>
            </video>
          </div>
          <div className={classes.productDetails}>
            <div className="row">
              <div className="col-md-3 offset-2">
                <div className={classes.productBox}>
                  <h3>Kind</h3>
                </div>
                <div className={classes.productBox}>
                  <h3>Cinematography</h3>
                </div>
                <div className={classes.productBox}>
                  <h3>Acting</h3>
                </div>
              </div>
              <div className="col-md-3 offset-2">
                <div className={classes.productBox}>
                  <h3>Director</h3>
                </div>
                <div className={classes.productBox}>
                  <h3>Music</h3>
                </div>
                <div className={classes.productBox}>
                  <h3>Dubbing</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.customer}>
          <div className="row">
            <div className="col-4 d-flex justify-content-center align-items-center flex-column">
              <img  className={classes.cardImage} src={customer}/>
              <h4>John Hopkins</h4>
              <p>Founder</p>
            </div>
            <div className="col-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ante urna.
                Nulla interdum eros in neque ullamcorper viverra. Curabitur feugiat ut augue et vulputate.
                Nam libero ex, porttitor quis laoreet ac, maximus vulputate ipsum.
                Morbi ultricies turpis a dui efficitur, finibus tincidunt nibh vulputate. Curabitur scelerisque turpis et velit.
              </p>
            </div>
          </div>
        </div>


      </div>

      <Footer/>

    </>

  )


}

export default ProductPage