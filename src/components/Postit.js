import React, { useState } from 'react'

const Postit = ({ text, index, handleRemove }) => {
  const [value, setValue] = useState(text)
  return (
    <div className="postit">
      <span className="remove-postit" onClick={() => handleRemove(index)}>&times;</span>
      <textarea value={value} onChange={({ target }) => setValue(target.value)} />
    </div>
  )
}

export default Postit
