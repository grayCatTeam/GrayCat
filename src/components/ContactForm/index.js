import React from 'react';

import classes from './contactform.module.css';
import { Formik,Form,Field } from "formik"

const ContactForm = () => {
  return(
    <>
      <Formik
        initialValues={{
          nameOrCompany: '',
          email: '',
          budget: '',
          message: ''
        }}
      >
        <Form>
          <div className={classes.name}>
            <label htmlFor="nameOrCompany">name & company :</label>
            <Field
              name="nameOrCompany"
              type="text"
              placeHolder="Rain Medya"
            />
          </div>

          <div className={classes.email}>
            <label htmlFor="email">email :</label>
            <Field
              name="email"
              type="email"
              placeHolder="info@rainmedia.org"
            />
          </div>

          <div className={classes.budget}>
            <label>Project Budget :</label>
            <div className="d-flex justify-content-between">
              {/*----5k-----*/}
              <input type="radio" name="budget" id="1" className={classes.hide} checked/>
              <label htmlFor="1" className={classes.label_radio}>
                <div className={classes.displayBox}>
                  $5k - $15k
                </div>
              </label>
              {/*----10k-----*/}
              <input type="radio" name="budget" id="2" className={classes.hide}/>
              <label htmlFor="2" className={classes.label_radio}>
                <div className={classes.displayBox}>
                  $15k - $50k
                </div>
              </label>
              {/*----15k-----*/}
              <input type="radio" name="budget" id="3" className={classes.hide}/>
              <label htmlFor="3" className={classes.label_radio}>
                <div className={classes.displayBox}>
                  $50k - $120k
                </div>
              </label>
              {/*----20k-----*/}
              <input type="radio" name="budget" id="4" className={classes.hide}/>
              <label htmlFor="4" className={classes.label_radio}>
                <div className={classes.displayBox}>
                  no limit
                </div>
              </label>
            </div>


          </div>

          <div className={classes.message}>
            <label htmlFor="message">Project Description :</label>
            <Field
              name="message"
              type="textarea"
              placeHolder="message"
            />
          </div>

          <button type={"submit"} className={classes.button}>Send</button>

        </Form>
      </Formik>
    </>
  )
}
export default ContactForm