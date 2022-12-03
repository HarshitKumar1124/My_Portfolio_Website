import React,{useEffect} from "react";
import { Nav, Container, Row, Col, Tab,TabPane,TabContent } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import image1 from "../../assets/images/project-img1.png"
import image2 from "../../assets/images/project-img2.png";
import image3 from "../../assets/images/project-img3.png"

import "./Projects.css"


//Animation On Scroll
import Aos from "aos";
import "aos/dist/aos.css"


const Projects = () => {

  useEffect(() => {

    Aos.init({duration:2000})
   
  }, [])
  



  const projects = [
    {
      title: "ThreeJS : Landing Page",
      description: "Design and Development",
      imageUrl: image1,
      hostedURL:"https://harshitkumar1124.github.io/ThreejsFirstUI/"
    },
    {
      title: "ThreeJS : Landing Page",
      description: "Design and Development",
      imageUrl: image2,
      hostedURL:"https://harshitkumar1124.github.io/GoogleKeepApp/"
    },
    {
      title: "ThreeJS : Landing Page",
      description: "Design and Development",
      imageUrl: image3,
      hostedURL:"https://harshitkumar1124.github.io/ThreejsFirstUI/"
    },
   
  ];

  return (
    <>
      <section id="project" data-aos="zoom-in">
        <Container style={{padding:"2vmax",borderRadius:"2vmax",backgroundColor:"#121212",boxShadow:"2px -2px 5px rgba(255,255,255,.6),-2px 2px 5px rgba(255,255,255,.6) "}}>
          <Row>
            <Col id="project-col">
              <h2 style={{marginBottom:".5vmax"}}>Projects</h2>
              <p style={{width:"60%"}}>
                Ullamco et adipisicing exercitation nisi occaecat dolor.
                Proident reprehenderit ea aute proident ea occaecat amet dolor
                
              </p>

              <Tab.Container id="projects-tab" defaultActiveKey="Option1">
                <Nav variant="pills" id="proj-tab-nav">
                  <Nav.Item className="Tab-Nav-Buttons">
                    <Nav.Link eventKey="Option1">Hosted Project</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="Tab-Nav-Buttons">
                    <Nav.Link eventKey="Option2">Code Repository</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="Tab-Nav-Buttons">
                    <Nav.Link eventKey="Option3">Curricular Achievements</Nav.Link>
                  </Nav.Item>
                </Nav>

                <TabContent >
                    {/* style={{border:"2px solid white"}} */}
                    

                  <TabPane eventKey="Option1">
                    <Row style={{margin:".5vmax"}}>
                      {projects.map((project, index) => {
                        return (
                          <ProjectCard key={index} projectElement={project} />
                        );
                      })}
                   
                    </Row>
                  </TabPane>

                  <TabPane eventKey="Option2">TabPane2</TabPane>
                  <TabPane eventKey="Option3">TabPane3</TabPane>

                </TabContent>


              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;
