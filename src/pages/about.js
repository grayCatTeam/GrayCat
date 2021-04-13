import React from "react"

import Layout from "../components/layout"
import AboutHero from "../components/AboutHero/aboutHero"

import TeamCard from "../atoms/TeamCard"

import mda from "../assets/images/mda@2x.png";
import mao from "../assets/images/mao@2x.png";
import mac from "../assets/images/mac@2x.png";
import ms from "../assets/images/ms@2x.png";
import ct from "../assets/images/ct@2x.png";
import AboutProcess from "../components/AboutProcess"




const About = () => {
  return (

    <Layout>
      <AboutHero/>

      <TeamCard image={mao} cardName = {"mao"}> 
       Mehmet Ali Ozcan
       Load Developer
       

      </TeamCard>
      <TeamCard image={mda} cardName = {"Mda"}> 
       Mevsim Deniz Arslan 
       Ux Researcer

      </TeamCard>

      <TeamCard image={mac} cardName = {"mac"}> 
       Mehmet Arda Celik
       Front End Developer

      </TeamCard>
      <TeamCard image={ms} cardName = {"ms"}> 
       Mine Sunar
       Marketing Engineer

      </TeamCard>

      <TeamCard image={ct} cardName = {"ct"}> 
      Coskun Toprak
       Governor of Nyc

      </TeamCard>

      <TeamCard image={mda} cardName = {"Mda"}> 
       Tara 
       Ui Designer

      </TeamCard>



      <AboutProcess/>

    </Layout>



  )
}

export default About