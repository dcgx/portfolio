import React from 'react'

const Side = ({ children }) => {
  return (
    <aside className="w-60 fixed bottom-0 left-0">
      <div>{children}</div>
    </aside>
  )
}

export default Side
