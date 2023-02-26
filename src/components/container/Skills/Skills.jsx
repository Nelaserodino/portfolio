import React, { useState } from 'react'
import "./Skills.scss";
import { iconsFront } from '../../../Data';
import { iconsBack } from '../../../Data';
import { iconsVersionControl } from '../../../Data';
import { experiences } from '../../../Data';
import { motion } from 'framer-motion';

const Skills = ({t}) => {
  const [active, setActive] = useState(1)
  return (
    <div className="container" id="skills">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        transition={{delay: 1, y:{duration:2}}}  
        className="title"
      >
        <h1>{t("section_background.title")}<span>.</span></h1>
        <h2>{t("section_background.subtitle")}</h2>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="select"
      >
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}>{t("section_background.button_skills")}</button>  
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >{t("section_background.button_experience")}</button>
       
      </motion.div>
      <motion.div className="skills-description"
      initial={{opacity: 0}}
      whileInView={{y: [-50, 0], opacity: 1}}>
      
        {active === 1 && <p>{t("section_background.description_skills")}</p>}

        {active === 2 && <p>
          {t("section_background.description_experience")}</p>}
       
        
      </motion.div>

      {active === 1 && <div className='skills-cont'>
       <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="skills"
       > <p className='stack'>FRONT-END</p>
       <div className="skills-grid">
       {iconsFront.map((icon, index) => {
          return (
            <div key={index} className="tools" >
            {icon.icon}
            <p>{icon.name}</p>
            </div>
          )
        })}
       </div>     
       </motion.div>
       <div className='container-back-version'>
       <motion.div
        initial={{opacity: 0}}
        whileInView={{x: [-50, 0], opacity: 1}}
        className="skills"
       > <p className='stack'>BACK-END</p>
       <div className="skills-grid">
       {iconsBack.map((icon, index) => {
          return (
            <div key={index} className="tools" >
              {icon.icon}
              <p>{icon.name}</p>
            </div>
          )
        })}
       </div>     
       </motion.div>
       <motion.div
        initial={{opacity: 0}}
        whileInView={{x: [50, 0], opacity: 1}}
        className="skills"
       > <p className='stack'>Version Control System and Design</p>
       <div className="skills-grid">
       {iconsVersionControl.map((icon, index) => {
          return (
            <div key={index} className="tools">
              {icon.icon}
              <p>{icon.name}</p>
            </div>
          )
        })}
       </div>     
       </motion.div>
      </div>
      
      </div>}
      
      {active === 2 &&  <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="experiences"
      >
          {experiences.map(experience => {
          return (
            <div className="experience" key={experience.id}>
              <span>{experience.year}</span>
              <div className="position">
                <h3>{experience.position}</h3>
                <p>{experience.company}</p>
                <div className='icons'>
                {experience.skills.map(el => {
                  return(
                   <div style={el.color}>{el}</div>
                  )
                })}
                </div>
              </div>
            </div>
          )
        })}
    </motion.div>
        }
    </div>
  )
}

export default Skills