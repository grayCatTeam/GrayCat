import classes from "./form.module.css"
import Header from "../../Components/Header"
import SmallTitle from "../../Atoms/SmallTitle";

import {Formik, Form, Field, FieldArray} from "formik";
import FormLabel from "../../Atoms/FormLabel";


function FormPage() {

  return(
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
          <FormLabel label="Photo"/>
          <Field id="firstName" name="firstName" placeholder="Jane" type="file" />
        </div>

        <div className={`d-flex flex-column ${classes.formBox}`}>
          <FormLabel label="full name"/>
          <Field id="lastName" name="lastName" placeholder="Doe" />
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
          <label htmlFor="email"><SmallTitle title="Telefon"/></label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
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
        <div className="row">
          <div className="col-md-4">
            <div className={`d-flex flex-column ${classes.formBox}`}>

              <label htmlFor="email"><SmallTitle title="Height"/></label>
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className={`d-flex flex-column ${classes.formBox}`}>

              <label htmlFor="email"><SmallTitle title="Weight"/></label>
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className={`d-flex flex-column ${classes.formBox}`}>

              <label htmlFor="email"><SmallTitle title="Shoe"/></label>
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
            </div>
          </div>
        </div>

        <div className={`d-flex flex-column ${classes.formBox}`}>

          <label htmlFor="email"><SmallTitle title="Skills"/></label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
        </div>

        {/*--language level area--*/}

        <div className="row">
          <div className="col-md-5">
            <div className={`d-flex flex-column ${classes.formBox}`}>

              <label htmlFor="email"><SmallTitle title="Skills"/></label>
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className={`d-flex flex-column ${classes.formBox}`}>

              <label htmlFor="email"><SmallTitle title="Skills"/></label>
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
            </div>
          </div>
          <div className="col-md-2">
            xx
          </div>
        </div>

        {/*--education area--*/}

        <div className="row">
          <div className="col-md-12">
            <div className={`d-flex flex-column ${classes.formBox}`}>

              <label htmlFor="email"><SmallTitle title="Skills"/></label>
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className={`d-flex flex-column ${classes.formBox}`}>

              <label htmlFor="email"><SmallTitle title="Skills"/></label>
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className={`d-flex flex-column ${classes.formBox}`}>

              <label htmlFor="email"><SmallTitle title="Skills"/></label>
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className={`d-flex flex-column ${classes.formBox}`}>

              <label htmlFor="email"><SmallTitle title="Skills"/></label>
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
            </div>
          </div>
          <div className="col-md-12">
            <button>Add Education</button>
          </div>
        </div>

        <div className={`d-flex flex-column ${classes.formBox}`}>

          <label htmlFor="email"><SmallTitle title="Skills"/></label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
        </div>
        <div className={`d-flex flex-column ${classes.formBox}`}>

          <label htmlFor="email"><SmallTitle title="Skills"/></label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
        </div>
        <div className={`d-flex flex-column ${classes.formBox}`}>

          <label htmlFor="email"><SmallTitle title="Skills"/></label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
        </div>







        <button type="submit">Submit</button>
      </Form>
    </Formik>

    <FormLabel label="arda"/>

    </>
  )
}

export default FormPage;