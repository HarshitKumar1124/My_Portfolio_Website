import React from 'react'
import Navbar from "./Components/Navbar"
import Banner from "./Components/HomeBanner/HomeBanner.js"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects.js"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer.js"

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

const App = () => {
  return (
    <div className="AppContainer">
     <Navbar />
     <Banner/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App