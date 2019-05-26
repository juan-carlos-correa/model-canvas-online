import React from 'react'
import Board from './components/Board'
import Title from './components/Title'

const Root = () => (
  <div className="app-container">
    <Title className="main-title">Model canvas</Title>
    <Board />
  </div>
)

export default Root
