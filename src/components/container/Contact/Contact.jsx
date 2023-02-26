import {React, useRef} from 'react';
import emailjs from '@emailjs/browser'
import "./Contact.scss";
import { bios } from '../../../Data';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2'

const Contact = ({t}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o7b2erc', 'template_gr3zi78', form.current, 'g-pl0_k6Awca2wHuR')
      .then((result)=> {
        createAlert();
        document.getElementById('contact-form').reset()
;      }, (error) => {
        console.log(error.text);
      });
  };

  const createAlert = () => {
    Swal.fire({
      icon: 'success',
      text: 'Your message has been sent!',
    })
  }

  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <h1>{t("section_contact.title")}<span>.</span></h1>
            
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>{t("section_contact.subtitle1")} 👋</h3>
          {bios.map(info => {
            return (
              <div className='contact_left' key={info.id}>
                  <motion.a className="icon" href={
                    info.link === "linkedin" 
                    ? "https://www.linkedin.com/in/marianela-serodino-runco/"
                    : info.link === "github"
                    ? "https://github.com/Nelaserodino"
                    : info.link 
                  }
                   target="_blank"> {info.icon}
                  </motion.a>
                  <motion.a  className="links" href={
                    info.link === "linkedin" 
                    ? "https://www.linkedin.com/in/marianela-serodino-runco/"
                    : info.link === "github"
                    ? "https://github.com/Nelaserodino"
                    : info.link 
                  }
                   target="_blank"> <p>{info.value}</p>
                  </motion.a>
                
              </div>
            )
          })}
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>{t("section_contact.subtitle2")}</h3>
          <form ref={form} onSubmit={sendEmail} id="contact-form">
          <div className="row">
            <input type="text" placeholder={t("section_contact.name")} name='user_name' required/>
            <input type="text" placeholder={t("section_contact.last_name")} name='user_lastName'/>
          </div>
          <div className="row">
            <input type="text" placeholder={t("section_contact.phone")}  name='user_phone'/>
            <input type="email" placeholder={t("section_contact.email")}  name='user_email' required/>
          </div>
          <div className="row">
            <textarea placeholder={t("section_contact.message")}  name='message' required></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn"
          >
            <input type="submit" value={t("section_contact.button_send")} ></input>
          </motion.div>
          </form>
         
        </motion.div>
      </div>
    </div>
  )
}

export default Contact