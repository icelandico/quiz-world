import React from "react"
import {
  QuestionContainer,
  AnswersContainer,
  QuestionTitle
} from "./question-type-two-styles"
import AnswerCard from "../AnswerCard/answer-card"

interface IProps {
  answers: number[]
}
const QuestionTypeTwo: React.FC<IProps> = props => {
  const { answers } = props

  return (
    <QuestionContainer>
      <QuestionTitle>Which country has the biggest population?</QuestionTitle>
      <AnswersContainer>
        {answers.map((answer, idx) => {
          return <AnswerCard answer={answer} idx={idx} key={idx} />
        })}
      </AnswersContainer>
    </QuestionContainer>
  )
}

export default QuestionTypeTwo
