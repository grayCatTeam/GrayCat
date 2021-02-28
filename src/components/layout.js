import React from "react"
import Header from "../components/header"

import '../style/style.module.css'


const Layout = ({children}) => {

  return (
    <>
    <Header/>
      {children}
    </>

  )
}


export default Layout