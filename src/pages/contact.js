import React from "react"

import Header from "../components/Header/header"
import ContactHero from "../components/ContactHero"
import ContactForm from "../components/ContactForm"
import ContactFooter from "../atoms/ContactFooter"




const Contact = () => {
  return (

    <>
    <Header/>
    <ContactHero/>
    <ContactForm/>
    <ContactFooter/>
    </>

  )
}

export default Contact