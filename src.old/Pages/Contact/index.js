/*component import*/
import Header from "../../../src/Components/Header";
import BigTitle from "../../Atoms/BigTitle";
import ContactForm from "../../../src/Components/ContactForm";
import Footer from "../../../src/Components/Footer";


const Contact = () => {
  return (
    <>
      <div style={{backgroundColor: "black"}}>
        <Header/>
        <BigTitle/>
        <div className="container w-50 mx-auto my-5">
          <p className="text-white text-center fs-5 px-5">
            Blackmeal c’est une vingtaine de créatifs sur Paris, Nantes et Montréal
            Nous venons de fêter nos 9 ans et notre 1600ème vidéo.
          </p>
        </div>

        <ContactForm/>
        <Footer/>

      </div>


    </>
  )
};

export default Contact