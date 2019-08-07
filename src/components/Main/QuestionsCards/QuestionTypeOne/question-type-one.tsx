import React, { useEffect, useContext } from "react"
import {
  QuestionContainer,
  AnswersContainer,
  SingleAnswer,
  QuestionTitle
} from "./question-type-one-styles"

interface IProps {
  country: string
  answers: number[]
}
const QuestionTypeOne: React.FC<IProps> = props => {
  const { country, answers } = props
  return (
    <QuestionContainer>
      <QuestionTitle>What's the population of the {country}</QuestionTitle>
      <AnswersContainer>
        {answers.map(answer => {
          return <SingleAnswer>{answer}</SingleAnswer>
        })}
      </AnswersContainer>
    </QuestionContainer>
  )
}

export default QuestionTypeOne
