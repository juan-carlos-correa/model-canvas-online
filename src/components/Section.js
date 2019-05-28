import React, { useState } from 'react'
import Title from './Title'
import Postit from './Postit'

const Section = ({ name }) => {
  const [postits, setPostit] = useState([{ text: 'My Post-it example' }])

  const addPostit = () => {
    setPostit([
      ...postits,
      { text: '' }
    ])
  }

  return (
    <section>
      <Title>{name}</Title>

      {
        postits.map(({ text }, index) => (
          <Postit key={`${index}-${text}`} text={text} />
        ))
      }

      <button onClick={addPostit}>Add</button>
    </section>
  )
}

export default Section
