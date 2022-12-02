import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Button from "@material-ui/core/Button"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import logo from "../../assets/images/logo.svg"
import "./Footer.css"

const Footer = () => {

    const year = new Date().getFullYear();
  return (
    <>
    <footer className='footer'>

        <Container>
            <Row style={{height: "50vh"}}>
                <Col sm={6} style={{alignSelf:"center"}}>
                    <img src={logo} alt="Logo"/>
                  
                </Col>

                <Col sm={6} style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    {/* border:"2px solid red", */}
                    <div>
                    <div style={{display:"flex",justifyContent:"flex-end",margin:".5vmax"}}>
                    {/* border:"2px solid red", */}
                      
                      <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}title="LinkedIN Profile">
                         
                          <Button href="https://www.google.com" className="Social-handles" ><LinkedInIcon  style={{fontSize:"2.7vmax",color:"white"}}/></Button>
                      </Tooltip>

                      <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}title="Github Profile">
                          <Button href="https://www.google.com" className="Social-handles" ><GitHubIcon  style={{fontSize:"2.7vmax",color:"white"}}/></Button>
                      </Tooltip>

                      <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}title="Instagram Profile">
                          <Button href="https://www.google.com" className="Social-handles" ><InstagramIcon  style={{fontSize:"2.7vmax",color:"white"}}/></Button>
                      </Tooltip>
                  </div>
                  <p >PortFolio Created By <span style={{color:"red"}}>Harshit Kumar</span> @copyright {year}</p>
                  {/* border:"2px solid red" */}
                    </div>

                </Col>


            </Row>
        </Container>
    </footer>
    </>
  )
}

export default Footer