import React from 'react'

export const Skill = ({ image, name }) => {
  return (
    <div className="skill">
      <div>
        <img width={20} src={image} alt={name}></img>
      </div>
      {name}
    </div>
  )
}
