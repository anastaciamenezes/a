import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PlayersCardPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 10px 10px 20px #ddd;
`

export const PlayersTitle = styled.h1`
  font-family: 'bold italic';
  margin-bottom: 10px;
`

export const PlayersDetailsLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`

export const PlayersDetailsText = styled.span`
  font-family: 'regular';
  font-size: 20px;
`