import axios from 'axios';
import React, { Children, FC, useEffect, useState } from 'react'
import { secToTimeFormat } from 'utils';

import { ContainerStats } from './styles'

interface IItem {
  id: number
  difficult: string
  time: number
}

const Statistics: FC = () => {
  const [stats, setStats] = useState([]);
  const url = 'https://react-game-sudoku.herokuapp.com/stats'

  const getStats = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data
      setStats(data);

    } catch (error) {
      alert('Something went wrong with server side of this game. Sorry!')
    }
  }

  const items = stats.sort((a: IItem, b: IItem) => a.time - b.time).map((item: IItem, index) => {
    return (
      <div>
        <div>{index + 1}</div>
        <div>{item.difficult.toUpperCase()}</div>
        <div>{secToTimeFormat(item.time)}</div >
      </div>
    )
  })

  useEffect(() => {
    getStats();
  }, []);

  return (
    <ContainerStats data-cy="container-stats">
      <div>
        <div>#</div>
        <div>Difficult</div>
        <div>Time</div >
      </div>
      {Children.toArray([...Array(9)].map((_, index) => items[index]))}


    </ContainerStats>
  )

}


export default Statistics