import React from 'react'

const Title = ({ children, className = '' }) => (
  <h1 className={`title ${className}`}>{children}</h1>
)

export default Title
