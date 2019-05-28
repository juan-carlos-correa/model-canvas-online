import React, { useState } from 'react'

const Postit = ({ text }) => {
  const [value, setValue] = useState(text)
  return (
    <div className="postit">
      <textarea value={value} onChange={({ target }) => setValue(target.value)} />
    </div>
  )
}

export default Postit
