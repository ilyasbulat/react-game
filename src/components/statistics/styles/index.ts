import { Container } from 'components/grid/block/styles'
import styled from 'styled-components'

export const ContainerStats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;

  div {
    background-color: white;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid black;
    border-radius: 4px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: center;
    }
  }
`
