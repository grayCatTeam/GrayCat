import React from "react"

import Layout from "../components/layout"
import AboutHero from "../components/AboutHero/aboutHero"

import TeamCard from "../atoms/TeamCard"
import ActionCard from "../atoms/ActionCard/actionCard"
import classes from "../style/style.module.css"

import AboutProcess from "../components/AboutProcess"
import mao from "../assets/images/mao@2x.png"
import mda from "../assets/images/mda@2x.png"
import mac from "../assets/images/mac@2x.png"
import ms from "../assets/images/ms@2x.png"
import ct from "../assets/images/ct@2x.png"
import tg from "../assets/images/tg@2x.png"


const About = () => {
  return (

    <Layout>
      <AboutHero />

      <AboutProcess />
      <div className={classes.teams}>
        
        <div className={classes.teamTitle}>
          <h2>Teams</h2>
           <p>"We belive team work<br/>
         makes the dream work"
        </p>
        </div>


        <div className="container d-flex flex-wrap justify-content-around">
          <TeamCard img={mao} name="Mehmet Ali Özcan" title="Lead Developer" />
          <TeamCard img={mda} name="Mevsim Deniz Arslan" title="UX Researcher" />
          <TeamCard img={mac} name="Mehmet Arda Çelik" title="Front End Developer" />
          <TeamCard img={ms} name="Mine Sunar" title="Marketing Engineer" />
          <TeamCard img={ct} name="Coşkun Toprak" title="Governor of NYC" />
          <TeamCard img={tg} name="Tara Green" title="UI Designer" />
        </div>
      </div>


      <div style={{ margin: '2rem 0' }}>
        <ActionCard />
      </div>

    </Layout>



  )
}

export default About