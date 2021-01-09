import classes from "./contactForm.module.css"
import {Formik,Field,Form} from "formik";
import FormLabel from "../../Atoms/FormLabel";



function ContactForm() {
  return(
    <div className={`bg-white mx-auto ${classes.wrapper}`}>

      <Formik>
        <Form>
          <div className={`row w-100 d-flex justify-content-evenly mb-3`}>
            <div className={`col-md-6 d-flex align-items-center justify-content-between`}>
              <FormLabel label={"First Name"}/>
              <Field/>
            </div>
            <div className={`col-md-6 d-flex align-items-center justify-content-between`}>
              <FormLabel label={"Last Name"}/>
              <Field/>
            </div>
          </div>
          <div className={`row w-100 d-flex justify-content-evenly mb-3`}>
            <div className={`col-md-6 d-flex align-items-center justify-content-between`}>
              <FormLabel label={"Last Name"}/>
              <Field/>
            </div>
            <div className={`col-md-6 d-flex align-items-center justify-content-between`}>
              <FormLabel label={"E Mail"}/>
              <Field/>
            </div>
          </div>
          <div className={`row d-flex justify-content-center mb-3`}>
            <div className={`col-md-1 d-flex align-items-center`}>
              <FormLabel label={"Subject"}/>

            </div>
            <div className={`col-md-11 d-flex align-items-center`}>
              <Field name="subject"/>
            </div>

          </div>
          <div className={`row d-flex justify-content-center mb-3`}>
            <div className={`col-md-12 d-flex justify-content-left flex-column`}>
              <FormLabel label={"Message"}/>
              <Field name="message" as="textarea"/>
            </div>
          </div>

          <button className={`my-4 text-white bg-dark py-3 ${classes.sendButton}`}>SEND FORM</button>





        </Form>
      </Formik>


    </div>


  )



}

export default ContactForm