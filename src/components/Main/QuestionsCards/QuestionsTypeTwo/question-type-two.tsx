import React, { useContext } from "react"
import {
  QuestionContainer,
  AnswersContainer,
  SingleAnswer,
  QuestionTitle
} from "./question-type-two-styles"
import QuizStore from "../../../../store/app-store"

interface IProps {
  answers: number[]
}
const QuestionTypeTwo: React.FC<IProps> = props => {
  const store = useContext(QuizStore)
  const { answers } = props

  const handleNextQuestion = () => {
    store.nextQuestion()
  }

  return (
    <QuestionContainer>
      <QuestionTitle>Which country has the biggest population?</QuestionTitle>
      <AnswersContainer>
        {answers.map((answer, idx) => {
          return (
            <SingleAnswer key={idx} onClick={handleNextQuestion}>
              {answer}
            </SingleAnswer>
          )
        })}
      </AnswersContainer>
    </QuestionContainer>
  )
}

export default QuestionTypeTwo
