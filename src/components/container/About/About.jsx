import {React} from 'react'
import "./About.scss";
import { motion} from 'framer-motion';
import portfolio from "../../../assets/portfolio.jpg"
import cv from '../../../assets/QA-Marianela-Serodino-Runco.pdf'


const About = ({t}) => {
 
  return (
    <div className="container" id="about">
      <motion.div className='profile-pic'
      initial={{opacity: 0}}
      whileInView={{y: [-50, 0], opacity: 1}} 
      transition={{y:{duration:3}}}>
        <img src={portfolio} alt=''/>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        transition={{delay: 1, y:{duration:2}}} 
        className="title"
      >
        <h1>{t("section_about.title")}<span>.</span></h1>
        </motion.div>
        <motion.div  
        className="about-subtitle"
        initial={{opacity: 0}}
        whileInView={{y: [50, -40], opacity: 1}}
        transition={{delay: 1,y:{duration:2}}}
        >
        <h3>{t("section_about.message")}</h3>
        </motion.div>
        <motion.div className='buttons-about' initial={{opacity: 0}}
        whileInView={{y: [50, -40], opacity: 1}}
        transition={{delay: 2,y:{duration:2}}}>
        <a href='#contact'>{t("section_about.button_contact")}</a>
        <a href={cv} attributes-list download >{t("section_about.button_cv")}</a>
        </motion.div>
       
      </div>
  )
}

export default About