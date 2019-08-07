import React, { useEffect, useContext } from "react"
import {
  QuestionContainer,
  AnswersContainer,
  SingleAnswer,
  QuestionTitle
} from "./question-type-one-styles"
import QuizStore from "../../../../store/app-store"

interface IProps {
  country: string
  answers: number[]
}
const QuestionTypeOne: React.FC<IProps> = props => {
  const store = useContext(QuizStore)
  const { country, answers } = props

  const handleNextQuestion = () => {
    store.nextQuestion()
  }

  return (
    <QuestionContainer>
      <QuestionTitle>What's the population of the {country}</QuestionTitle>
      <AnswersContainer>
        {answers.map(answer => {
          return (
            <SingleAnswer onClick={handleNextQuestion}>{answer}</SingleAnswer>
          )
        })}
      </AnswersContainer>
    </QuestionContainer>
  )
}

export default QuestionTypeOne
