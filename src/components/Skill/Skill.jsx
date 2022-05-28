import React from 'react'

export const Skill = ({ image, name }) => {
  return (
    <div className="flex  ">
      <div className="mr-5">
        <img width={20} src={image} loading="lazyw" alt={name}></img>
      </div>
      {name}
    </div>
  )
}
