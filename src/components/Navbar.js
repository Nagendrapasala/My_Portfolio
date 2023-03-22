import React from "react";
import "./Navbar.css"
import My from "./resume.pdf"

// import resume from "../Allimages/Nagendra_pasala_resume"

export const Navbar = () => {
  function ScrollHome(){
    
    window.scrollTo(0,0)
  }
  function ScrollAbout(){
    
    window.scrollTo(0,250)
  }
  function ScrollSkills(){
    
    window.scrollTo(0,600)
  }
  function ScrollProject(){
    
    window.scrollTo(0,1000)
  }
  function ScrollContact(){
    
    window.scrollTo(0, document.body.scrollHeight)
  }
 
  // function w3_close() {
  //  let test =  document.getElementById("mySidebar").style.display = "none";
  // }
  return (
    <div id="mainnavbar">
      <div>
        <h1>Nagendra Pasala</h1>
        <h1></h1>
      </div>
      <div>
        <button onClick={ScrollHome}>HOME</button>
        <button onClick={ScrollAbout}>ABOUT</button>
        <button onClick={ScrollSkills}>SKILLS</button>
        <button onClick={ScrollProject}>PROJECTS</button>
        <button onClick={ScrollContact}>CONTACT</button>
        <a href={My} download ><button>RESUME⬇️</button></a>
      </div>
      {/* <div  id="mySidebar">
  <button >Close &times;</button>
  <a href="#" class="w3-bar-item w3-button">Link 1</a>
  <a href="#" class="w3-bar-item w3-button">Link 2</a>
  <a href="#" class="w3-bar-item w3-button">Link 3</a>
</div> */}
    </div>
  );
};
