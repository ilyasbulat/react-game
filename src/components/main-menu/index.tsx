import React, { Dispatch, FC, useCallback, useEffect, useState } from 'react'
import Select from 'react-select';
import { createGrid } from 'reducers'
import { NavLink } from 'react-router-dom';
import { Container, Button, Timer } from './styles'
import { useDispatch } from 'react-redux'
import { Action } from 'redux'
import { secToTimeFormat } from 'utils'
import global from 'global'


const MainMenu: FC = () => {
  const [seconds, setSeconds] = useState(0);

  const [selectedOption, setSelected] = useState({ value: 'easy', label: 'Easy' })
  const options = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
  ];

  function handleSelectChange(e: any) {
    setSelected(e)
  }

  const dispatch = useDispatch<Dispatch<Action>>()

  const createNewGrid = useCallback(
    () => {
      global.level = selectedOption.value
      if (window.confirm("Are you sure you want to start New Game?")) {
        dispatch(createGrid())
        setSeconds(0)
      }

    },
    [dispatch, selectedOption],
  )

  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);

      global.time = seconds
    }, 1000);

    return () => {
      clearInterval(interval)
    };
  }, [seconds]);

  return (
    <Container>
      <NavLink to="/sudoku-game">
        <Button onClick={createNewGrid}>New Game</Button>
      </NavLink>
      <Select
        value={selectedOption}
        onChange={handleSelectChange}
        options={options}
      />
      <NavLink to='/statistics'>
        <Button>Statistics</Button>
      </NavLink>
      <Timer>{secToTimeFormat(seconds)}</Timer>
    </Container>
  )
}

export default MainMenu
