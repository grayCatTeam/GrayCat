import classes from "./contact.module.css"
import Header from "../../Components/Header";
import Title from "../../Components/Title"
import BigTitle from "../../Atoms/BigTitle";
import ContactForm from "../../Components/ContactForm";
import Footer from "../../Components/Footer";



const Contact = () => {
  return(
    <>
      <div style={{backgroundColor:"black"}}>
        <Header/>
        <BigTitle/>
        <div className="w-50 mx-auto">
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