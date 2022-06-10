import React from 'react'

const Badge = ({ children, color = 'teal' }) => {
  const bgColor = `bg-${color}-500`

  return <span className={`${bgColor} text-black font-medium px-4 rounded mr-2`}>{children}</span>
}

export default Badge
