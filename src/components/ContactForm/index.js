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
          <label htmlFor="nameOrCompany">name || company :</label>
          <Field
            name="nameOrCompany"
            type="text"
            placeHolder="Rain Medya"
          />

          <label htmlFor="email">email :</label>
          <Field
            name="email"
            type="email"
            placeHolder="info@rainmedia.org"
          />

          <label htmlFor="budget">select budget :</label>
          <Field
            name="budget"
            type="radio"
          />
          <Field
            name="budget"
            type="radio"
          />
          <Field
            name="budget"
            type="radio"
          />

          <label htmlFor="message">Project Description :</label>
          <Field
            name="message"
            type="textarea"
            placeHolder="message"
          />


        </Form>
      </Formik>
    </>
  )
}
export default ContactForm