import React from 'react'

export const SingleSkill = ({el}) => {
  return (
    <div>
        <img src={el.image} alt={el.name} />
        <h3>{el.name}</h3>
    </div>
  )
}
