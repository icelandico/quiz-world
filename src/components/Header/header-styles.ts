import styled from "styled-components"

export const MainHeader = styled.h2`
  font-size: 2rem;
  color: #000;
  margin: 1rem auto;
`

export const HeaderDescription = styled.p`
  margin: 1rem auto;
  width: 90%;
  font-size: 0.75rem;
  color: #000;

  @media (min-width: 768px) {
    width: 50%;
    font-size: 1rem;
  }
`
