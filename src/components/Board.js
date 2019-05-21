import React from 'react'
import Row from './Row'
import Column from './Column'
import Section from './Section'

const Board = () => {
  return (
    <div className="board-container">
      <Row>
        <Column>
          <Section name="Key Partners" />
        </Column>

        <Column>
          <Column>
            <Section name ="Key Activities" />
          </Column>
          <Column>
          <Section name ="Key Resources" />
          </Column>
        </Column>

        <Column>
          <Section name="Value Proposition" />
        </Column>

        <Column>
          <Column>
            <Section name="Relationships" />
          </Column>
          <Column>
            <Section name="Chanels" />
          </Column>
        </Column>

        <Column>
        <Section name="Customer Segment" />
        </Column>
      </Row>
      <Row>
        <Column>
          <Section name="Cost Structure" />
        </Column>

        <Column>
          <Section name="Revenue Streams" />
        </Column>
      </Row>
    </div>
  )
}

export default Board
