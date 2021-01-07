import classes from "./form.module.css"
import Header from "../../Components/Header"
import SmallTitle from "../../Atoms/SmallTitle";

import {Formik, Form, Field, FieldArray} from "formik";
import FormLabel from "../../Atoms/FormLabel";
import Footer from "../../Components/Footer";

import {FaPlus} from "react-icons/all";


function FormPage() {

  return (
    <>
      <div className={classes.header}>
        <Header/>
      </div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div className={`d-flex flex-column ${classes.formBox}`}>
            <FormLabel label="Upload a Photo"/>
            <Field id="photo" name="photo" placeholder="jpeg or png" type="file"/>
          </div>

          <div className={`d-flex flex-column ${classes.formBox}`}>
            <FormLabel label="fullname"/>
            <Field id="fullname" name="fullname" placeholder="John Doe"/>
          </div>

          <div className={`d-flex flex-column ${classes.formBox}`}>
            <FormLabel label="e mail"/>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
          </div>

          <div className={`d-flex flex-column ${classes.formBox}`}>
            <FormLabel label="phone"/>
            <Field
              id="phone"
              name="phone"
              placeholder="+90 (5**)*** ** **"
              type="email"
            />
          </div>

          <div className={`d-flex flex-column ${classes.formBox}`}>
            <FormLabel label="city"/>
            <Field
              id="city"
              name="city"
              placeholder="jane@acme.com"
              type="select"
            />
          </div>
          <div className={`${classes.formBox} row d-flex`}>
            <div className="col-md-4">
              <div className={`d-flex flex-column ${classes.formBoxMini}`}>

                <FormLabel label="height (cm)"/>
                <Field
                  id="height"
                  name="height"
                  placeholder="180"
                  type="number"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className={`d-flex flex-column ${classes.formBoxMini}`}>

                <FormLabel label="weight (cm)"/>
                <Field
                  id="weight"
                  name="weight"
                  placeholder="60"
                  type="number"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className={`d-flex flex-column ${classes.formBoxMini}`}>

                <FormLabel label="shoe"/>
                <Field
                  id="shoe"
                  name="shoe"
                  placeholder="38"
                  type="number"
                />
              </div>
            </div>
          </div>

          <div className={`d-flex flex-column ${classes.formBox}`}>

            <FormLabel label="skills"/>
            <Field
              id="skill"
              name="skill"
              placeholder="Swimming"
              type="text"
            />
          </div>

          {/*--language level area--*/}

          <div className={`${classes.formBox} row d-flex justify-content-center align-items-center`}>
            <div className="col-md-5">
              <div className={`d-flex flex-column ${classes.formBoxMini}`}>

                <FormLabel label="language"/>
                <Field
                  id="language"
                  name="language"
                  placeholder="English"
                  type="text"
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className={`d-flex flex-column ${classes.formBoxMini}`}>

                <FormLabel label="level"/>
                <Field
                  id="level"
                  name="level"
                  placeholder="speak fluency"
                  type="email"
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className={`d-flex flex-column justify-content-end ${classes.formBoxMini}`}>
                <button className={classes.plusButton}><FaPlus/></button>

              </div>
            </div>
          </div>

          {/*--education area--*/}

          <div className={`${classes.formBox} row d-flex`}>
            <div className="col-md-12">
              <div className={`d-flex flex-column`}>

                <FormLabel label="education"/>
                <Field
                  id="school"
                  name="school"
                  placeholder="John Hopkins University"
                  type="text"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className={`d-flex flex-column ${classes.formBox}`}>

                <FormLabel label="degree"/>
                <Field
                  id="degree"
                  name="degree"
                  placeholder="Bachelor"
                  type="number"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className={`d-flex flex-column ${classes.formBox}`}>

                <FormLabel label="profession"/>
                <Field
                  id="profession"
                  name="profession"
                  placeholder="Art History"
                  type="text"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className={`d-flex flex-column ${classes.formBox}`}>

                <FormLabel label="graduation"/>
                <Field
                  id="graduation"
                  name="graduation"
                  placeholder="2024"
                  type="date"
                />
              </div>
            </div>
            <div className="col-md-12">
              <button className={classes.addEdu}><FaPlus/></button>
            </div>
          </div>

          <div className={`d-flex flex-column ${classes.formBox}`}>

            <FormLabel label="instagram"/>
            <Field
              id="instagram"
              name="instagram"
              placeholder="username"
              type="url"
            />
          </div>
          <div className={`d-flex flex-column ${classes.formBox}`}>

            <FormLabel label="twitter"/>
            <Field
              id="twitter"
              name="twitter"
              placeholder="username"
              type="text"
            />
          </div>
          <div className={`d-flex flex-column ${classes.formBox}`}>

            <FormLabel label="vimeo"/>
            <Field
              id="vimeo"
              name="vimeo"
              placeholder="username"
              type="text"
            />
          </div>

          <div className={classes.formBox}>
            <button type="submit" className={classes.button}>SUBMIT</button>
          </div>

        </Form>
      </Formik>

      <Footer/>

    </>
  )
}

export default FormPage;