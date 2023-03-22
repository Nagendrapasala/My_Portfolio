import React from 'react'
import "./Contactme.css"
import location from "./location.png"
import linkdn from "./linkdn.png"
import email from "./email_logo.jpg"
import phone from "./phone.png"
import git from "./GitHub-Logo.png"
export const Contactme = () => {
  return (
    <div className='contactmain'>
        <h1>Contact</h1>
    <div className='contactme'>
        <div>
            <img src={linkdn} alt="my linkedin profile"/>
            <h2>LinkedIn</h2>
            <p>You can contact me on LinkedIn</p>
            <a href='https://www.linkedin.com/in/nagendra-pasala-184917105' target="_blank">Nagendra pasala</a>
        </div>
        <div>
            <img src={git} alt="my GitHub profile" />
            <h2>Git</h2>
            <p>Banglore,karnataka</p>
            <a href='https://github.com/Nagendrapasala' target="_blank">Nagendra pasala</a>
        </div>
        <div>
            <img src={phone} alt="my phone number"/>
            <h2>Phone</h2>
            <p>Here is My Phone Number</p>
            <a href='tel:+919880099565' target="_blank">+919880099565</a>
        </div>
        <div>
            <img src={email} alt="my email address" />
            <h2>Email</h2>
            <p>You can Simply mail me just by clicking on my email</p>
            <a href='mailto:nagendrapasala10@gmail.com ' target="_blank">nagendrapasala10@gmail.com</a>
        </div>
        <div>
            <img src={location} alt="my location" />
            <h2>Location</h2>
            <p>Banglore,karnataka</p>
            <a href='https://maps.google.com/maps?q=btm+layout,Bangalore' target="_blank">View on Google Maps</a>
        </div>
    </div>
    </div>
  )
}
