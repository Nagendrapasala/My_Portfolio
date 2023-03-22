import React from 'react'
import My from "../Allimages/my.jpg"
import MyResume from "./resume.pdf"
import AboutMe from "./AboutMe.json"
import "../Styles/About.css"
export const About = () => {
  console.log(AboutMe)
  console.log(AboutMe[0].name)
  return (
    <div className='About'>
        <div><h1>Hi, I'm Nagendra Pasala</h1>
        <p style={{fontSize:"medium",color:"gray",textAlign:"left"}}>I am Full Stack Web Developer and i have knowledge in HTML, CSS, JS, REACT and i make Creative & user-friendly websites.</p>
        <a href={MyResume} download ><button className='downloadbtn' style={{height:"50px",borderRadius:"10px",backgroundColor:"rgb(59, 124, 59)",color:"white"}}>Download CV ⬇️</button></a>
        </div>
        <div><img src={My} alt='My Profile Image'/></div>
        
    </div>
  )
}
