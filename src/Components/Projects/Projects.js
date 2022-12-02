import React from "react";
import { Nav, Container, Row, Col, Tab,TabPane,TabContent } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import image1 from "../../assets/images/project-img1.png"
import image2 from "../../assets/images/project-img2.png";
import image3 from "../../assets/images/project-img3.png"

import "./Projects.css"

const Projects = () => {
  const projects = [
    {
      title: "Business Analyst",
      description: "Design and Development",
      imageUrl: image1,
    },
    {
      title: "Business Analyst",
      description: "Design and Development",
      imageUrl: image2,
    },
    {
      title: "Business Analyst",
      description: "Design and Development",
      imageUrl: image3,
    },
    {
      title: "Business Analyst",
      description: "Design and Development",
      imageUrl: image1,
    },
    {
        title: "Business Analyst",
        description: "Design and Development",
        imageUrl: image2,
      },
      {
        title: "Business Analyst",
        description: "Design and Development",
        imageUrl: image3,
      },
  ];

  return (
    <>
      <section id="project">
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
                    <Nav.Link eventKey="Option1">Option 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="Tab-Nav-Buttons">
                    <Nav.Link eventKey="Option2">Option 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="Tab-Nav-Buttons">
                    <Nav.Link eventKey="Option3">Option 3</Nav.Link>
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
