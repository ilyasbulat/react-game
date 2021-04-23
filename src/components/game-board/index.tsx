import { Card, Content, Grid, Numbers, Title } from 'components'
import React, { FC } from 'react'


const GameBoard: FC = () => {


  return (
    <Content data-cy="content">

      <Title>Sudoku React-game</Title>
      <Card data-cy="card">
        {/* <NewGameButton /> */}
        <Grid />
        <Numbers />
      </Card>
    </Content>
  )
}

export default GameBoard