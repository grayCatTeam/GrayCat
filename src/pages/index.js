import React from "react"

import Layout from '../components/layout'
import IndexHero from "../components/IndexHero/hero"
import ActionCard from "../atoms/ActionCard/actionCard"
import CustomerCard from "../atoms/CustomerCard"


const IndexPage = () => {

return (


      <Layout>
            <IndexHero/>
        <CustomerCard companyName={"Appitr"}>
          Appitr is an online tool that helps you
          create native iOS and Android projects using
          Javascript and React Native. Create a native
          mobile app with an online IDE within a few hours
          In a beautiful, simplest and easiest way.
        </CustomerCard>
        <CustomerCard companyName={"Rain Media"}>
          Appitr is an online tool that helps you create native iOS and Android projects using Javascript and React Native.
          Create a native mobile app with an online IDE within a few hours In a beautiful, simplest and easiest way.
        </CustomerCard>
            <ActionCard/>

      </Layout>
)


}

export default IndexPage
