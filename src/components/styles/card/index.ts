import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 15px;
    display: flex;
    /* flex: 1; */ // this is what stretch Card to fit all space
    padding: 15px;
    flex-direction: column;
    height: fit-content;
  `}
`
