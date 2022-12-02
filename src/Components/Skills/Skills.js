import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {Container,Row,Col} from 'react-bootstrap';
import Meter1 from "../../assets/images/meter1.svg"
import Meter2 from "../../assets/images/meter2.svg"
import Meter3 from "../../assets/images/meter3.svg"

import colorSharp from "../../assets/images/color-sharp.png"
import colorSharp2 from "../../assets/images/color-sharp2.png"
import "./Skills.css"



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Skills = () => {
  return (
    <>
    <section className='skills' id="skills">
       <Container style={{padding:"2vmax",borderRadius:"2vmax",backgroundColor:"#121212",boxShadow:"2px -2px 5px rgba(255,255,255,.6),-2px 2px 5px rgba(255,255,255,.6) "}}>
       {/* border:"2px solid yellow", */}
        <Row>
            <Col>
            <div className='skill-box'>
                 <h2 style={{marginBottom:"1vmax"}}>Skills</h2>
                 <p style={{width:"60%"}}>Lorem Text are Random textLorem Text are Random textLorem Text are Random texLorem Text are Random textLorem Text arndom textLorem Text are Randot</p>
                 <Carousel responsive={responsive} infinite={true} className="skill-slider" >
                    <div className='item'>
                        <img src={Meter1} alt="" />
                        <h5>Web Development1</h5>
                    </div>

                    <div className='item'>
                        <img src={Meter2} alt="" />
                        <h5>Brand Integration</h5>
                    </div>

                    <div className='item'>
                        <img src={Meter3} alt="" />
                        <h5>UX/UI Designer</h5>
                    </div>

                 </Carousel>

            </div>

            </Col>
            
        </Row>
       </Container>
       <img src={colorSharp} alt="left_Galaxy_patch" id ="left_Galaxy_patch"/>
       <img src={colorSharp2} alt="right_Galaxy_patch" id ="right_Galaxy_patch"/>
       <img src={colorSharp2} alt="right_Galaxy_patch" id ="right_Galaxy_patch"/>
       <img src={colorSharp2} alt="right_Galaxy_patch" id ="right_Galaxy_patch"/>
       <img src={colorSharp2} alt="right_Galaxy_patch" id ="right_Galaxy_patch"/>
       <img src={colorSharp2} alt="right_Galaxy_patch" id ="right_Galaxy_patch"/>
    </section>
    </>
  )
}

export default Skills