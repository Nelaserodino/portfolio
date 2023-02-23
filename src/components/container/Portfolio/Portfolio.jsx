import React from 'react';
import "./Portfolio.scss"
import { workImages } from '../../../Data';
import { motion } from 'framer-motion';
import { FaGithub, FaPlusCircle } from 'react-icons/fa';

const Portfolio = ({t}) => {

  return (
    <div className="container" id="portfolio">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="title"
      >
            <h1>{t("section_work.title")}<span>.</span></h1>
           <h3>{t("section_work.subtitle")}</h3>
      </motion.div>
     
      <motion.div
        initial={{x: 0 ,opacity: 0}}
          whileInView={{ x: [-250,0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{opacity: 0, y: -50}}
        className="workImages"
      >
        {workImages.map((work, i) => {
          return (
            <div className="workImage"
             key={work.id}
            >
              <img src={work.img} alt="workImg" />
              <motion.div
                initial={{opacity: 0}}
                whileHover={{ opacity: [0, 1] }}
                whileTap={{opacity: [0, 1] }}
                transition={{duration: 0.5 , ease: "easeInOut"}}
                className='hoverLayer'
              >
                <h2>{work.name}</h2>
                <p>{t(`section_work.description.${i}`)}</p>
              </motion.div>
              <div className='work-icons'>
                {work.link !== "" ?
                <motion.a href={work.link} target='_blank'
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.2]}}
                 transition={{duration: 0.5}}
                >
                < FaPlusCircle/>
                </motion.a> : ""
                }
                
                {work.github !== "" ? 
                <motion.a href={work.github} target='_blank'
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.2]}}
                 transition={{duration: 0.5}}
                >
                < FaGithub/>
                </motion.a>
                : ""
                }
                </div>
            </div>
          )
        })}
      </motion.div> 
    </div>
  )
}


export default Portfolio