import React from 'react'

const Column = ({ children, extraClass = '' }) => (
  <div className={`column ${extraClass}`}>
    {children}
  </div>
)

export default Column
