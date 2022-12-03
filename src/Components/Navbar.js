import React,{useState,useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {FiMenu} from "react-icons/fi"

import "./Navbar.css"

import {Button} from "@material-ui/core"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import {Link} from "react-router-dom"

import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';




const NavBar=()=> {

    const [ActiveTab,setActiveTab] = useState("#home")

    const [Scrolled,SetScrolled] = useState(false);


   useEffect(() => {

    const OnScrolled=()=>{
        if(window.scrollY > 50)
        SetScrolled(true);
        else
        SetScrolled(false);
    }

    window.addEventListener('scroll',OnScrolled);

    return window.removeEventListener('scroll',OnScrolled)
   }, [])
   

  return (
    <Navbar variant="dark" id="NavbarComponent" expand="lg" className={` ${Scrolled ? "scrolled" :""}`}>
      <Container>
        <Navbar.Brand href="/" id="HKLOGO"style={{fontSize:"3vmax"}}>HK</Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={ActiveTab=="#home" ? "active navbar-link" :"navbar-link"} onClick={()=>setActiveTab("#home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={ActiveTab=="#skills" ? "active navbar-link" :"navbar-link"} onClick={()=>setActiveTab("#skills")}>Skills</Nav.Link>
            <Nav.Link href="#project" className={ActiveTab=="#projects" ? "active navbar-link" :"navbar-link"} onClick={()=>setActiveTab("#projects")}>Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div style={{display:"flex",width:"90%",justifyContent:"space-between",alignItems:"center"}}>
        {/* border:"2px solid red", */}
            <div className="social-handle">
            <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}title="LinkedIN Profile">
                <Button href="https://www.linkedin.com/in/harshit-kumar-9b4474206/" target="_blank"  ><LinkedInIcon  style={{fontSize:"1.9vmax",color:"white"}}/></Button>
            </Tooltip>

            <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}title="Github Profile">
                <Button href="https://github.com/HarshitKumar1124" target="_blank"  ><GitHubIcon  style={{fontSize:"1.9vmax",color:"white"}}/></Button>
            </Tooltip>

            <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}title="Instagram Profile">
                <Button href="https://www.instagram.com/harshitdreams8a_/"  target="_blank" ><InstagramIcon  style={{fontSize:"1.9vmax",color:"white"}}/></Button>
            </Tooltip>
              
            </div>
            <Button style={{color:"white",border:"1px solid white"}} variant="outlined"  href="#contact">Let's Connect</Button>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" ><FiMenu/></Navbar.Toggle>
      </Container>
    </Navbar>
  );
}

export default NavBar;