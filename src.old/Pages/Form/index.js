/*import components*/
import FormLabel from "../../Atoms/FormLabel";
import Footer from "../../../src/Components/Footer";
import Header from "../../../src/Components/Header"

/*import library*/
import {Formik, Form, Field, FieldArray} from "formik";
import {FaPlus} from "react-icons/all";

/*import css*/
import classes from "./form.module.css"


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
          <div className={`container mx-auto px-5 d-flex flex-column g-0 ${classes.formBox}`}>
            <FormLabel label="Upload a Photo"/>
            <Field id="photo" name="photo" placeholder="jpeg or png" type="file"/>
          </div>

          <div className={`container mx-auto px-5 d-flex flex-column g-0 ${classes.formBox}`}>
            <FormLabel label="fullname"/>
            <Field id="fullname" name="fullname" placeholder="John Doe"/>
          </div>

          <div className={`container mx-auto px-5 d-flex flex-column g-0 ${classes.formBox}`}>
            <FormLabel label="e mail"/>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
          </div>

          <div className={`container mx-auto px-5 d-flex flex-column g-0 ${classes.formBox}`}>
            <FormLabel label="phone"/>
            <Field
              id="phone"
              name="phone"
              placeholder="+90 (5**)*** ** **"
              type="email"
            />
          </div>

          <div className={`container mx-auto px-5 d-flex flex-column g-0 ${classes.formBox}`}>
            <FormLabel label="city"/>
            <Field
              id="city"
              name="city"
              placeholder="jane@acme.com"
              type="select"
            />
          </div>
          <div className={`container mx-auto px-5 d-flex flex-column g-0 ${classes.formBox}`}>
            <div className={`row`}>
              <div className="col-xl-4">
                <div className={`w-100 d-flex flex-column`}>

                  <FormLabel label="height (cm)"/>
                  <Field
                    id="height"
                    name="height"
                    placeholder="180"
                    type="number"
                  />
                </div>
              </div>
              <div className="col-xl-4">
                <div className={`w-100 d-flex flex-column`}>

                  <FormLabel label="weight (cm)"/>
                  <Field
                    id="weight"
                    name="weight"
                    placeholder="60"
                    type="number"
                  />
                </div>
              </div>
              <div className="col-xl-4">
                <div className={`w-100 d-flex flex-column`}>
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
          </div>

          <div className={`container mx-auto px-5 d-flex flex-column g-0 ${classes.formBox}`}>

            <FormLabel label="skills"/>
            <Field
              id="skill"
              name="skill"
              placeholder="Swimming"
              type="text"
            />
          </div>

          {/*--language level area--*/}

          <div className={`container mx-auto px-5 d-flex flex-column g-0 ${classes.formBox}`}>
            <div className="row">
              <div className={`col-xl-5 d-flex flex-column`}>

                <FormLabel label="language"/>
                <Field
                  id="language"
                  name="language"
                  placeholder="English"
                  type="text"
                />
              </div>
              <div className={`col-xl-5 d-flex flex-column`}>

                <FormLabel label="level"/>
                <Field
                  id="level"
                  name="level"
                  placeholder="speak fluency"
                  type="email"
                />
              </div>
              <div className="col-xl-2 d-flex justify-content-center align-items-end">
                <button className={`bg-transparent rounded-circle text-center py-2 px-3 fs-3 ${classes.addButton}`}><FaPlus/></button>
              </div>
            </div>

          </div>

          {/*--education area--*/}

          <div className={`container mx-auto px-5 d-flex flex-column g-0 ${classes.formBox}`}>
            <FormLabel label="education"/>
            <Field
              id="school"
              name="school"
              placeholder="John Hopkins University"
              type="text"
            />
            <div className={`row`}>

              <div className="col-xl-4">
                <div className={`w-100 d-flex flex-column`}>
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
                <div className={`w-100 d-flex flex-column`}>

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
                <div className={`w-100 d-flex flex-column`}>

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
                <button className={`w-100 bg-transparent py-3 mt-4 fs-4 ${classes.addButton}`}><FaPlus/></button>
              </div>
            </div>
          </div>

          {/*social media*/}
          <div className={`container mx-auto px-5 d-flex flex-column g-0 ${classes.formBox}`}>
            <div className={`d-flex flex-column`}>
              <FormLabel label="instagram"/>
              <Field
                id="instagram"
                name="instagram"
                placeholder="username"
                type="url"
              />
            </div>
            <div className={`d-flex flex-column`}>
              <FormLabel label="twitter"/>
              <Field
                id="twitter"
                name="twitter"
                placeholder="username"
                type="text"
              />
            </div>
            <div className={`d-flex flex-column`}>
              <FormLabel label="vimeo"/>
              <Field
                id="vimeo"
                name="vimeo"
                placeholder="username"
                type="text"
              />
            </div>
          </div>

          <div className={`container mx-auto px-5 d-flex flex-column g-0`}>
            <button className={`w-100 py-3 mt-4 fs-4 fw-bold bg-transparent my-5 ${classes.addButton}`} type="submit">SUBMIT</button>
          </div>

        </Form>
      </Formik>

      <Footer/>

    </>
  )
}

export default FormPage;