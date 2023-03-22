import React from 'react'

export const Project_Right = ({el}) => {
  return (
    <div>
        <h1>{el.title}</h1>
        <p className='bodycont'>{el.body}</p>
        <p className='disc'>{el.discription}</p>
        <div className='lang'>{el.lang.map((e)=><h5>{e}</h5>)}</div>
        <div>
       <a href={el.links.website} target="_blank"><button >Live 🔴</button></a>
       <a href={el.links.git} target="_blank"><button >GitHub</button></a>
       <a href={el.links.post} target="_blank"><button >Website 🌐</button></a>
        {/* <button onClick={()=> window.location=`${el.links.git}`}>GitHub</button>
        <button onClick={()=> window.location=`${el.links.post}`}>Website 🌐</button> */}
        
        </div>
    </div>
  )
}
