import React from 'react'

const Badge = ({ children, color = 'teal' }) => {
  return <span className="bg-teal-500 text-black font-medium px-4 rounded mr-2">{children}</span>
}

export default Badge
