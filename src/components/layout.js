import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"




import '../style/style.module.css'




const Layout = ({children}) => {




  console.log(window.innerWidth)

  return (

      <div className={`container`}>
        <Header/>
        {children}
        <Footer/>
      </div>


  )
}


export default Layout