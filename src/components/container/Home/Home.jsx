import React from 'react'
import "./Home.scss"
import {  motion } from 'framer-motion'
import arrow from "../../../assets/fast-forward.gif"


const Home = () => {
  return (
    <div className='container-home' id="home">
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{y: [-300, 0], opacity: 1, repeat: false}} 
        transition={{
          y: {duration:2},
        default:{ease:"linear"}}}
      >
      <h1 className='name'>Nela Serodino</h1>
      </motion.div>  
      <div className='subtitle-container'>
      <motion.div
       initial={{opacity: 0}}
       whileInView={{x: [-50, 0], opacity: 1, repeat: false}} 
       transition={{
        delay:2,
        x: {duration:2},
       }}
       >
      <h2 className='subtitle'>Full-Stack<span> </span></h2>
      </motion.div>
      <motion.div
       initial={{opacity: 0}}
       whileInView={{x: [50, 0], opacity: 1, repeat: false}} 
       transition={{
        delay:3,
        x: {duration:2},
      }}
       >
      <h2 className='subtitle'> <span>Web Developer</span></h2>
      </motion.div>
      </div>
      <motion.div 
       initial={{opacity: 0}}
       whileInView={{y: [200, 200], opacity: 1, repeat: false}}
       transition={{
        delay:5,
        y: {duration:2},
      }}
      >
       <a href='#about'> <img src={arrow} alt='arrow-down' className='arrow'/></a>
      </motion.div> 
  </div>
  )
}

export default Home