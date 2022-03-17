import styled from 'styled-components'
import { PRIMARY_COLOR } from './styles'

const Container = styled.div`
  display:space-evenly;
  justify-content: space-evenly
  
  padding:20px;
  margin:20px;
  background-color:papaya;
  @media (max-width: 700px) {
    background-color:blue;
  }
  @media (max-width: 500px) {
    background-color:pink;
    flex-direction:column;
    align-content: center;
    flex-wrap: wrap;
  }
`

export default Container