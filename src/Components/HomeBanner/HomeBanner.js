import React,{useState,useEffect} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Button  from "@material-ui/core/Button"

import BannerImage from "../../assets/images/header-img.svg"
import "./HomeBanner.css"

import Aos from "aos";
import "aos/dist/aos.css"





const HomeBanner = () => {
    const [loopNo,setLoopNo]=useState(0);
    const AnimationText=["Harshit Kumar  ","Web Developer  ","UX/UI Designer  "]
    const [ToDelete,setDelete] = useState(false);
    const [partialText,setPartialText]= useState("")
    const [delta,setDelta]=useState(300-Math.random()*100);

    useEffect(()=>{


 

            Aos.init({duration:2000})
      


        let ticker = setInterval(()=>{
            tick();

        },delta)

        return ()=>{ clearInterval(ticker)}
    },[partialText])

    const tick =()=>{
        let i = loopNo%AnimationText.length;
        let fulltext = AnimationText[i];
        let updatedText = ToDelete ? fulltext.substring(0,partialText.length-1) : fulltext.substring(0,partialText.length+1);

        if(!ToDelete)
        updatedText+="|"

        setPartialText(updatedText);
        
        if(!ToDelete)
        fulltext+="|"
       
        // console.log(fulltext,updatedText,updatedText==fulltext)
        if(!ToDelete && updatedText===fulltext)
        {
            setDelete(true);
            setDelta(100);

        }else if(ToDelete && updatedText==="")
        {
            setDelete(false)
            setLoopNo(loopNo+1);
            setDelta(100);
        }
    }



  return (
    <>
    <section className="banner" id="home" data-aos="fade" >
    {/* style={{border:"2px solid red"}} */}
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
                    <span className='tagline'>Welcome To My Portfolio</span>
                    <h1>{`Hi I'm ${partialText}`}</h1>
                    <p>Dolore nostrud aute tempor non voluptate veniam.</p>
                    <Button style={{color:"white"}} href="#contact">Let's Connect</Button>
                </Col>
                <Col xs={12} md={6} xl={6}>

                    <img src={BannerImage} alt="Background Image" id="BannerImage" />
                    {/* style={{border:"2px solid green"}} */}

                </Col>
            </Row>
        </Container>

        </section>
    </>
  )
}

export default HomeBanner