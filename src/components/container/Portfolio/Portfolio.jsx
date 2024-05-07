import React, { useState } from 'react';
import "./Portfolio.scss";
import { developerExperience, QAExperience } from '../../../Data';
import { motion } from 'framer-motion';
import { FaGithub, FaPlusCircle } from 'react-icons/fa';

const Portfolio = ({t}) => {
  const [active, setActive] = useState(1);

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
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="select"
      >
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}>{t("section_work.button_developer")}</button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >{t("section_work.button_qa")}</button>
      </motion.div>
    
      {active === 1 && <div className='skills-cont'>
        <motion.div
          initial={{x: 0 ,opacity: 0}}
          whileInView={{ x: [-250,0], opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{opacity: 0, y: -50}}
          className="workImages"
        >
          {developerExperience.map((work, i) => (
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
                <p>{t(`section_work.developer_description.${i}`)}</p>
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
          ))}
        </motion.div> 
      </div>}

      {active === 2 && <div className='skills-cont'>
        <motion.div
          initial={{x: 0 ,opacity: 0}}
          whileInView={{ x: [-250,0], opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{opacity: 0, y: -50}}
          className="workImages"
        >
          {QAExperience.map((qa, i) => (
            <div className="workImage"
             key={qa.id}
            >
              <img src={qa.img} alt="workImg" />
              <motion.div
                initial={{opacity: 0}}
                whileHover={{ opacity: [0, 1] }}
                whileTap={{opacity: [0, 1] }}
                transition={{duration: 0.5 , ease: "easeInOut"}}
                className='hoverLayer'
              >
                <h2>{qa.name}</h2>
                <p>{t(`section_work.qa_description.${i}`)}</p>
              </motion.div>
              <div className='work-icons'>
                {qa.link !== "" ?
                <motion.a href={qa.link} target='_blank'
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.2]}}
                 transition={{duration: 0.5}}
                >
                < FaPlusCircle/>
                </motion.a> : ""
                }
                
                {qa.github !== "" ? 
                <motion.a href={qa.github} target='_blank'
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
          ))}
        </motion.div> 
      </div>}
    </div>
  );
};


export default Portfolio