import classes from "./contactForm.module.css"
import {Formik,Field,Form} from "formik";
import FormLabel from "../../../src.old/Atoms/FormLabel";



function ContactForm() {
  return(
    <div className={`row g-0 bg-white col-xl-6 offset-xl-3 col-md-8 offset-md-2 col-xs-12 offset-xs-0 position-relative px-5 py-5 rounded my-5 ${classes.wrapper}`}>

      <Formik>
        <Form>
          <div className={`row w-100 mb-3`}>
            <div className={`col-xl-12 d-flex align-items-center justify-content-between`}>
              <FormLabel label={"Full Name"}/>
              <Field type="text"/>
            </div>
            <div className={`col-xl-6 col-lg-12 d-flex align-items-center justify-content-between`}>
              <FormLabel label={"Phone"}/>
              <Field type="text"/>
            </div>
            <div className={`col-xl-6 col-lg-12 d-flex align-items-center justify-content-between`}>
              <FormLabel label={"E Mail"}/>
              <Field
                id="email"
                name="email"
                type="email"
              />
            </div>
            <div className={`col-xl-12 d-flex align-items-center justify-content-between`}>
              <FormLabel label={"Subject"}/>
              <Field type="text"/>
            </div>

          <div className={`col-xl-12 d-flex flex-column`}>
              <FormLabel label={"Message"}/>
              <Field name="message" as="textarea"/>
          </div>
          <div className={`col-xl-12`}>
            <button className={`my-5 text-white bg-dark py-3 rounded w-100 border-0`}>SEND FORM</button>
          </div>

          </div>






        </Form>
      </Formik>


    </div>


  )



}

export default ContactForm