import React from 'react'

const Side = ({ children }) => {
  return (
    <aside className="w-10 fixed bottom-5 left-10 hidden md:block">
      <div>{children}</div>
    </aside>
  )
}

export default Side
