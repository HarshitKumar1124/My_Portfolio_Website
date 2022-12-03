import React,{useEffect, useState} from 'react'
import NavigationIcon from '@material-ui/icons/Navigation';
import Button from "@material-ui/core/Button"

import "./FloatingOptions.css"

export const ScrollToTop = () => {

    const [ DisplayValue,setDisplayValue] = useState(0);

    const OnScroll =()=>{

        console.log(window.scrollY)        
        setDisplayValue(window.scrollY/150);
       

    }




    useEffect(() => {
     
        window.addEventListener('scroll',OnScroll);
       
    
     
    }, [DisplayValue])
    


  return (
    <Button id="scrolltotop" style={{opacity:DisplayValue,zIndex:"200"}}  href="#NavbarComponent" ><NavigationIcon style={{fontSize:"2vmax",color:"white"}}/></Button>
  )
}

export default ScrollToTop
