import React from 'react'
import "./Skills.css"
import html from "../Allimages/HTML5_logo-700x700.png"
import css from '../Allimages/css.png'
import react from "../Allimages/react.png"
import mern from "../Allimages/mern.png"
import mongodb from "../Allimages/mongodb.png"
import js from "../Allimages/javascript.png"
import nodejs from "../Allimages/nodejs.png"
import redux from "../Allimages/redux.png"
import git from "../Allimages/GitHub-Mark.png"
import { SingleSkill } from './SingleSkill'
let arr = [
  {
    image:html,
    name:"HTML"
  },
  {
    image:css,
    name:"CSS"
  },
  {
    image:mern,
    name:"MERN"
  },
  {
    image:react,
    name:"REACT"
  },
  {
    image:mongodb,
    name:"MONGODB"
  },
  {
    image:js,
    name:"JAVASCRIPT"
  },
  {
    image:git,
    name:"GIT/GITHUB"
  },
  {
    image:nodejs,
    name:"NODEJS"
  },
  {
    image:redux,
    name:"REDUX"
  }
]
export const Skills = () => {
  return (
    <div >
        <h1>SKILLS</h1>
        <div className='skilldiv'>
      {arr.map((e)=> <SingleSkill el={e}/>)}
      </div>
    </div>
  )
}
