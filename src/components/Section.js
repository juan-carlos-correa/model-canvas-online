import React, { useState } from 'react'
import Title from './Title'
import Postit from './Postit'

const Section = ({ name }) => {
  const [postits, setPostit] = useState([{ text: 'My Post-it example' }])

  const handleAddPostit = () => {
    setPostit([
      ...postits,
      { text: '' }
    ])
  }

  const handleRemove = (indexToRemove) => {
    const postitsUpdated = postits.filter((text, index) => index !== indexToRemove)
    setPostit(postitsUpdated)
  }

  return (
    <section>
      <Title>{name}</Title>

      {
        postits.map(({ text }, index) => (
          <Postit
            key={index}
            index={index}
            text={text}
            handleRemove={handleRemove}
          />
        ))
      }

      <button onClick={handleAddPostit}>Add</button>
    </section>
  )
}

export default Section
