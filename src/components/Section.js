import React, { useState } from 'react'
import Title from './Title'
import Postit from './Postit'

const Section = ({ name }) => {
  const [postit, setPostit] = useState([{ text: 'My Post-it example' }])

  return (
    <section>
      <Title>{name}</Title>

      {
        postit.map(({ text }, index) => (
          <Postit key={`${index}-${text}`} text={text} />
        ))
      }
    </section>
  )
}

export default Section
