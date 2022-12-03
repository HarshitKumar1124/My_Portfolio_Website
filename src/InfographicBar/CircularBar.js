import React,{useEffect, useRef, useState} from "react";
import "./CircularBar.css";

const CircularBar = () => {

  const [Render,setRender] = useState(false);



   
  
    const Percentage=65;

  //  const Circle_Length = 472;




    // let CircleRef = useRef(null);
    

 

    //  circle_.style.setProperty("--CircleLength",Circle_Length);
    // circle_.style.setProperty('--StrokeIncrement',stroke_increment);

    // const stroke_increment = 1;
    // let percent=Percentage/100;




    // function drawCircle ()
    // {
    //   if(percent>0)
    //   {
    //     circle_.style.setProperty('--strokeleft',Circle_Length-percent*stroke_increment);
    //     return (percent-=1);

    //   }

    //   circle_.style.setProperty('--strokeleft',Circle_Length)

    //   // clearInterval(loader);
    // }

  
    useEffect(() => {
   

      const OnScroll=()=>{
  
        console.log(window.scrollY)
  
        if(window.scrollY>300)
        setRender(true);
        else
        setRender(false);
      
      }
  
      window.addEventListener('scroll',OnScroll);
  
      // const loader = setInterval(drawCircle,10);
  
    }, [])




  
   

  return (
    <>
      {
        Render?<>
        <div className="CircularBarContainer">
        <div className="CircularBarskill">
          <div className="outer">
            <div className="inner">
              <div id="textnumber">{Percentage}%</div>
            </div>
          </div>

          <svg id="progress"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
       
            <circle  id="ProgressCircle"cx="80" cy="80" r="70" stroke-linecap="round" />
          </svg>
        </div>
      </div></> :<></>
      }
    </>
  );
};

export default CircularBar;
