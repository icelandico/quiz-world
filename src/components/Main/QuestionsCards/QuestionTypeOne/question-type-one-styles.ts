import styled from "styled-components"

export const QuestionContainer = styled.div`
  padding: 1rem;
  background-color: #677db7;
  font-size: 1rem;
  color: #fff;
  border: none;
  transition: 0.2s all;
`

export const QuestionTitle = styled.h3`
  text-align: center;
  font-weight: 700;
`

export const AnswersContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SingleAnswer = styled.div`
  padding: 0.5rem;
  color: #000;
  font-size: 2rem;
  margin: 0 0.5rem;
  border: 1px solid #ccc;
  width: 100px;
  font-size: 1.25rem;
  text-align: center;

  &:hover {
    background-color: #ccaa;
    cursor: pointer;
  }
`
