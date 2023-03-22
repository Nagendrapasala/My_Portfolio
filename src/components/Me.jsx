import React from 'react'
import AboutMe from "./AboutMe.json"
import "../Styles/About.css"
export const Me = () => {
  return (
    <div className='personal'>
        <div>
          <div><h3>Personal Details</h3>
          <br/>
          <label>Email:</label>
          <label>{AboutMe[0].email}</label>
          <br/>
          <label>Language:</label>
          {AboutMe[0].languages.map((e)=>(
            <label>{e}<span>,</span></label>
          ))}
          
          <br/>
          <label>Nationality:</label>
          <label>{AboutMe[0].nationality}</label>
          <br/>
          </div>
          <div>
            <h1>{AboutMe[0].title}</h1>
            <p style={{textAlign:"left"}}>{AboutMe[0].body}</p>
          </div>
          </div>
        </div>
  )
}
