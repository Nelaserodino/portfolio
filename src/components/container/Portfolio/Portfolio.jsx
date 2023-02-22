import React, { useEffect, useState } from 'react';
import "./Portfolio.scss"
import { workImages } from '../../../Data';
import { motion } from 'framer-motion';
import { FaGithub, FaPlusCircle } from 'react-icons/fa';

const Portfolio = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [works,setWorks] = useState([]);

  useEffect(() => {
    if (tab.name === "all") {
      setWorks(workImages)
    } else {
      const newWork = workImages.filter(workImage => {
        return workImage.category.toLowerCase() === tab.name;
      })
      setWorks(newWork)
    }
  }, [tab])
  

  return (
    <div className="container" id="portfolio">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="title"
      
      >
            <h1>My Work<span>.</span></h1>
           <h3>These are some of the projects I have been working on</h3>
      </motion.div>
     
      <motion.div
        initial={{x: 0 ,opacity: 0}}
          whileInView={{ x: [-250,0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{opacity: 0, y: -50}}
        className="workImages"
      >
        {works.map((work) => {
          return (
            <div className="workImage"
             key={work.id}
            >
              <img src={work.img} alt="workImg" />
              <motion.div
                initial={{opacity: 0}}
                whileHover={{ opacity: [0, 1] }}
                whileTap={{ opacity: [0, 1] }}
                transition={{duration: 0.3 , ease: "easeInOut"}}
                className='hoverLayer'
              >
                <h2>{work.name}</h2>
                <p>{work.description}</p>
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
              </motion.div>
            </div>
          )
        })}
      </motion.div> 
    </div>
  )
}


export default Portfolio