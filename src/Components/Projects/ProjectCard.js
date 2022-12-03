import React from 'react'
import {Nav,Container,Row,Col,Tab} from "react-bootstrap"
import "./Projects.css"
import Button from "@material-ui/core/Button"

const ProjectCard = ({projectElement}) => {
  return (
    <>
    <Col sm={6} md={4} className="proj-card">
        <div className='proj-content-box'>

            <img src={projectElement.imageUrl} alt={projectElement.imageUrl}/>
            <div className='proj-texts' >

                <h4 style={{fontStyle:"italic"}}>{projectElement.title}</h4>
                <span style={{fontStyle:"italic"}}>{projectElement.description}</span><br/><br/>
                <Button style={{color:"white",fontWeight:"600",boxShadow:"0 0 5px white"}} target="_blank"href={projectElement.hostedURL}>Go To Host</Button>

            </div>


        </div>
    </Col>
    </>
  )
}

export default ProjectCard