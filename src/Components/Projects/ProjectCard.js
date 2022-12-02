import React from 'react'
import {Nav,Container,Row,Col,Tab} from "react-bootstrap"
import "./Projects.css"

const ProjectCard = ({projectElement}) => {
  return (
    <>
    <Col sm={6} md={4} className="proj-card">
        <div className='proj-content-box'>

            <img src={projectElement.imageUrl} alt={projectElement.imageUrl}/>
            <div className='proj-texts'>

                <h4 style={{fontStyle:"italic"}}>{projectElement.title}</h4>
                <span style={{fontStyle:"italic"}}>{projectElement.description}</span>

            </div>


        </div>
    </Col>
    </>
  )
}

export default ProjectCard