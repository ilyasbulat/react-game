import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: row;
  gap: 5px;
  align-items: center;
  justify-content: center;

  div {
    width: 20vw;
  }
`

export const Timer = styled.div`
  color: white;
  font-weight: bold;
`

export const Button = styled.button`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.black};
    border: ${theme.colors.black};
    border-radius: 4px;
    color: ${theme.colors.white};
    cursor: pointer;
    display: flex;
    flex: 1;
    width: 20vw;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    justify-content: center;
    margin: 4px 2px;
    min-height: 40px;
    opacity: 0.9;
    padding: 0;
    transition: ${theme.transition};

    &:focus {
      border-color: ${theme.colors.blue};
      outline: none;
    }

    &:hover {
      opacity: 0.6;
    }
  `}
`
