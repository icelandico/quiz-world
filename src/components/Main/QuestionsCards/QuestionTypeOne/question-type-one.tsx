import React from "react"
import {
  QuestionContainer,
  AnswersContainer,
  QuestionTitle
} from "./question-type-one-styles"
import AnswerCard from "../AnswerCard/answer-card"

interface IProps {
  id: number
  country: string
  answers: number[]
}
const QuestionTypeOne: React.FC<IProps> = props => {
  const { id, country, answers } = props

  return (
    <QuestionContainer>
      <QuestionTitle>What's the population of the {country}</QuestionTitle>
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

export default QuestionTypeOne
