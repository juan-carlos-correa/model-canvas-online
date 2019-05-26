import React from 'react'
import Row from './Row'
import Column from './Column'
import Section from './Section'

const Board = () => {
  return (
    <div className="board-container">
      <Row className="row">
        <Column extraClass="single-column">
          <Section name="Key Partners" />
        </Column>

        <Column extraClass="double-column">
          <Section name="Key Activities" />
          <Section name="Key Resources" />
        </Column>

        <Column extraClass="single-column">
          <Section name="Value Proposition" />
        </Column>

        <Column extraClass="double-column">
          <Section name="Relationships" />
          <Section name="Channels" />
        </Column>

        <Column extraClass="single-column">
          <Section name="Customer Segment" />
        </Column>
      </Row>

      <Row className="row">
        <Column extraClass="footer-column">
          <Section name="Cost Structure" />
        </Column>

        <Column extraClass="footer-column">
          <Section name="Revenue Streams" />
        </Column>
      </Row>
    </div>
  )
}

export default Board
