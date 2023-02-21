import {React} from 'react'
import "./About.scss";
import { motion} from 'framer-motion';
import portfolio from "../../../assets/portfolio.jpg"
import cv from '../../../assets/CV-MarianelaSerodinoRunco.pdf'



const About = () => {
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
        <h1>About Me<span>.</span></h1>
        </motion.div>
        <motion.div  
        className="about-subtitle"
        initial={{opacity: 0}}
        whileInView={{y: [50, -40], opacity: 1}}
        transition={{delay: 1,y:{duration:2}}}
        >
        <h3>Hello there, and welcome to my webpage! My name is Nela, and I'm a junior web developer who is passionate about technology. I have always been fascinated by the power of the internet and the way it connects people from all over the world. This fascination eventually led me to pursue a career in web development.</h3>
        </motion.div>
        <motion.div className='buttons-about' initial={{opacity: 0}}
        whileInView={{y: [50, -40], opacity: 1}}
        transition={{delay: 2,y:{duration:2}}}>
        <a href='#contact'>Contact me</a>
        <a href={cv} attributes-list download >Download CV</a>
        </motion.div>
       
      </div>
  )
}

export default About