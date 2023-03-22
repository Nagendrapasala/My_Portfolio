import React from 'react'
import bigbasket from "./bigbasket.webp"
import policybazaar from "./policybazaar.jpg"
import ajio from "./Ajio.webp"
import swiggy from "./swiggy.jpg"
import { Project_Right } from './Project_Right'
import "./Project.css"

const arr = [
    {
        image:swiggy,
        title:"Swiggy",
        body:"Swiggy is an Indian online food ordering and delivery platform.Swiggy is India’s leading on-demand delivery platform with a tech-first approach to logistics and a solution-first approach to consumer demands. With a presence in 500 cities across India, partnerships with hundreds of thousands of restaurants, an employee base of over 5000, a 2 lakh+ strong independent fleet of Delivery Executives,",
        discription:"We were 5 people took us nearly 5 days to develop from scratch",
        lang:["HTML","css","javascript"],
        links:{
            website:"https://6412bfa3facaca45f612bbd5--idyllic-sherbet-f029be.netlify.app",
            git:"https://github.com/nagendrachoudhary/swiggy",
            post:'https://medium.com/@nagendrapasala1997/my-miserable-project-b6f7e5531dd8'
        }
    },
    {
        image:policybazaar,
        title:"PolicyBazaar",
        body:"It provides a digital platform - website and app - where users can compare insurance policies and other financial services from major insurance companies. The company is India's largest insurance aggregator, and has expanded its operations to the United Arab Emirates.",
        discription:"we were 5 people on team and took us 5 days to complete",
        lang:["HTML","css","javascript","React","reactjs","redux","contextApi","chakraUI","materialUI"],
        links:{
            website:"https://6412f33dd9ab46118e46042f--idyllic-sherbet-f029be.netlify.app",
            git:"https://github.com/Nagendrapasala/PolicyBazaar/tree/master/policybazaar",
            post:'https://medium.com/@nagendrapasala1997/policybazaar-a43e19bf9dd5'
        }
    },
    {
        image:bigbasket,
        title:"BigBasket",
        body:"Big Basket is one of the largest online grocery super market in India. It was founded in 2011 by Hari Menon, VS Sudhakar, V S Ramesh, Vipul Parekh and Abhinay choudari. It has its headquarters in Bengaluru. It operates in more than 30 cities in India.",
        discription:"we were 5 people on team and completed it in 5 days",
        lang:['HTML','css','javascript','react'],
        links:{
            website:"https://6411c4c045f91b1cb5984fe4--idyllic-sherbet-f029be.netlify.app",
            git:"https://github.com/spritualrahul/Big_Basket_clone",
            post:'https://medium.com/@nagendrapasala1997/bigbasket-3adb0600cad2'
        }
    },
    {
        image:ajio,
        title:"Ajio",
        body:"AJIO, a fashion and lifestyle brand, is Reliance Retail's digital commerce initiative and is the ultimate fashion destination for styles that are handpicked, on trend and at prices that are the best you'll find anywhere.",
        discription:"we were 5 people on team and took us roughly 5 days to complete",
        lang:["HTML","css","javascript","React","reactjs","redux","contextApi","chakraUI","materialUI"],
        links:{
            website:"https://64119e4f9351de2c02c9f18f--idyllic-sherbet-f029be.netlify.app",
            git:"https://github.com/Nagendrapasala/www.ajio.com/tree/master/ajio_dublicate",
            post:'https://medium.com/@nagendrapasala1997/ajio-clone-b27de46ce4cb'
        }
    }
]
export const Project = () => {
  return (
    <div className='projectmain'>
        <br/>
        <h1>PROJECTS</h1>
        <div className='ind_pro'>
        {arr.map((e)=>{
            return (<div className='inner_div'><div><img className='images' src={e.image} alt={e.title} /></div><div> <Project_Right el={e} /></div></div>)
        })}
        </div>
    </div>
  )
}
