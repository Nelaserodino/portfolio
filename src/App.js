import React from 'react'
import "./App.css"
import About from './components/container/About/About'
import Contact from './components/container/Contact/Contact'
import Footer from './components/container/Footer/Footer'
import Home from './components/container/Home/Home'
import Portfolio from './components/container/Portfolio/Portfolio'
import Skills from './components/container/Skills/Skills'
import Navbar from './components/Navbar/Navbar'
import {useTranslation} from "react-i18next";

const App = () => {
  const[t, i18n] = useTranslation("global");
  return (
    <div>
      <Navbar t={t} i18n={i18n}/>
      <Home />
      <About t={t}/>
      <Skills t={t}/>
      <Portfolio t={t}/>
      <Contact t={t}/>
      <Footer t={t}/>
    </div>
  )
}

export default App
