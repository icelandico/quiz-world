import styled from "styled-components"

export const TimeContainer = styled.div`
  padding: 0.5rem;
  background: #2c3449;
`

export const TimeText = styled.p`
  font-size: 1rem;
  color: #fff;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

export const TimeLeft = styled(TimeText)`
  font-weight: 700;
`
