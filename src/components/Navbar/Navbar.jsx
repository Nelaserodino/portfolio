import React, { useState, useEffect } from 'react';
import "./Navbar.scss";
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { navLinks } from '../../Data';
import { FaGithub, FaLinkedin} from "react-icons/fa";


const Navbar = ({t, i18n}) => {
    const [scroll, setScroll] = useState(false);
    const [toggle, setToggle] = useState(false);
 
    
    const menuVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 50,
            transition: {
                type: "tween",
                duration: 0.5,
            }
        }
    }
    const navLinkVariants = {
        hidden: {
            display: "none",
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: -30,
            transition: {
                delay: 0.7
            }
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20)
        })
    },[])
  return (
      <motion.div
          initial={{ y: -25 }}
          animate={{ y: -5 }}
          transition={{duration: 0.5}}
          className={scroll ? "header active" : "header"}>
          <div className="Nav_container">
            <div className='nav_options'>
               <ul
                className="nav_links"
                   >
                  {navLinks.map((navlink,index) => {
                      return <li key={index}><a className={scroll ? "active" : ""} href={`#${navlink}`}>{t(`navBar.${navlink}`)}</a></li>
                  })}
               </ul>
                  {scroll && <div className='language_buttons'>
                                <button onClick={()=> i18n.changeLanguage("es")}>🇪🇸</button>
                                <button onClick={()=> i18n.changeLanguage("en")}>🇬🇧</button>
                            </div>
                            }
            </div>
              <div className="social_icons" >
                <motion.a href="https://www.linkedin.com/in/marianela-serodino-runco/"target="_blank">{<FaLinkedin/>}</motion.a>
                <motion.a href="https://github.com/Nelaserodino"target="_blank">{<FaGithub/>}</motion.a>
              </div>
              <div className="menu" >
                  <HiMenuAlt4 onClick={() => {setToggle(true)}}/>
              </div>
              <motion.div className="closeMenu"
                          variants={menuVariants}
                          initial="hidden" animate= {toggle ?"visible": "hidden"}
                      >
              </motion.div>
              
          <motion.div
                  variants={navLinkVariants}
                  animate={toggle ? "visible" : "hidden"}
                  className="menuX"
              >
                  <HiX onClick={() => setToggle(false)}/>
                  {navLinks.map((navlink,index) => {
                      return <li
                          key={index}><a
                         
                          href={`#${navlink}`} onClick={() => setToggle(false)}>{t(`navBar.${navlink}`)}</a></li>
                  })}
                  <div className='language_buttons_mobile'>
                                <button onClick={()=> i18n.changeLanguage("es")}>🇪🇸</button>
                                <button onClick={()=> i18n.changeLanguage("en")}>🇬🇧</button>
                            </div>
              </motion.div>
          </div>
    </motion.div>
  )
}

export default Navbar