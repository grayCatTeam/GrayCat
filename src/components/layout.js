import React from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import '../style/style.module.css';

const Layout = ({children}) => {

  return (
      <>
        <Header/>
        {children}
        <Footer/>
      </>
  )
}


export default Layout;