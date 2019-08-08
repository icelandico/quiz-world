import React from "react"
import {
  QuestionContainer,
  AnswersContainer,
  QuestionTitle
} from "./question-type-two-styles"
import AnswerCard from "../AnswerCard/answer-card"

interface IProps {
  id: number
  answers: number[]
}
const QuestionTypeTwo: React.FC<IProps> = props => {
  const { id, answers } = props

  return (
    <QuestionContainer>
      <QuestionTitle>Which country has the biggest population?</QuestionTitle>
      <AnswersContainer>
        {answers.map((answer, idx) => {
          return (
            <AnswerCard questionId={id} answer={answer} idx={idx} key={idx} />
          )
        })}
      </AnswersContainer>
    </QuestionContainer>
  )
}

export default QuestionTypeTwo
