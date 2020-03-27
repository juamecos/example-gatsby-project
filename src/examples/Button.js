import styled from "styled-components"
const color = "blue"
const Button = styled.button`
  color: black;
  background: ${props => props.color};
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
`

export default Button
