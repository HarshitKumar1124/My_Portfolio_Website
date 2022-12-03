import React, { useState ,useEffect} from 'react'
import {Container,Row,Col} from "react-bootstrap"
import contactImage from "../../assets/images/contact-img.svg"
import Button from "@material-ui/core/Button"
import "./Contact.css"
import Stars from "../../assets/images/star2.png"


//Animation On Scroll
import Aos from "aos";
import "aos/dist/aos.css"

import { useAlert } from 'react-alert'

const Contact = () => {


    const Alert = useAlert();

    const [Form_Data,setForm_Data] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        message:""
    })


    const OnchangeHandler=(e)=>{

        setForm_Data({...Form_Data,[e.target.name]:[e.target.value]})
       

    }

    const [Status,setStatus]=useState({})

    const onSubmit= async (e)=>{
      

        Alert.success("Sent To Owner!")
        
        console.log(Form_Data)

        


        setForm_Data({

            firstName:"",
            lastName:"",
            email:"",
            phone:"",
            message:""
            
        })
    }


    useEffect(() => {

        Aos.init({duration:2000})
       
      }, [])
      



  return (
   <>
   <section className='contact' id="contact" data-aos="fade-right">
    <Container id="contact-container">
        <Row className="align-item-center" >
        {/* style={{border:"2px solid red"}} */}
            <Col md={6}  >
            {/* style={{border:"2px solid greenyellow"}} */}
                <img src={contactImage} alt="ContactImage" id="contact-image"/>
            </Col>
            <Col md={6} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            {/* border:"2px solid greenyellow", */}
               
                <h2 id="contact-head">Get In Touch</h2>
                <form id="contact-form">
                    <Row>
                        <Col sm={6} md={6} className="form-items">
                            <input type="text" placeholder='First Name' value={Form_Data.firstName} name="firstName" onChange={OnchangeHandler}/>
                        </Col>
                        <Col sm={6} md={6} className="form-items">
                            <input type="text" placeholder='Last Name' value={Form_Data.lastName} name="lastName" onChange={OnchangeHandler}/>
                        </Col>
                        <Col sm={6} md={6} className="form-items">
                            <input type="email" placeholder='Email' value={Form_Data.email} name="email" onChange={OnchangeHandler}/>
                        </Col>
                        <Col sm={6} md={6} className="form-items">
                            <input type="phone" placeholder='Phone Number' value={Form_Data.phone} name="phone" onChange={OnchangeHandler}/>
                        </Col>
                        <Col sm={6} md={12} className="form-items">
                            <input type="textarea" placeholder='Type the message!' value={Form_Data.message} name="message" onChange={OnchangeHandler}/>
                            
                        </Col>
                        <Col sm={6} md={12} className="form-items">
                        <Button style={{color:"white",backgroundColor:"#8888881b",width:"100%"}} onClick={onSubmit}>Submit</Button>
                        </Col>

                    </Row>
                </form>

            </Col>
        </Row>
    </Container>
    <img src={Stars} alt="BackgroundStar" style={{position:"absolute",top:0,left:0,width:"600px",opacity:"0.8",zindex:"-100"}}/>
    <img src={Stars} alt="BackgroundStar" style={{position:"absolute",top:0,right:200,width:"600px",opacity:"0.8",zindex:"-1"}}/>
   </section>
   </>
  )
}

export default Contact