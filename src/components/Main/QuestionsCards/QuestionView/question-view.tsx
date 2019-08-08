import React from "react"
import {
  QuestionContainer,
  AnswersContainer,
  QuestionTitle
} from "./question-view-styles"
import AnswerCard from "../AnswerCard/answer-card"

interface IProps {
  id: number
  country?: string
  answers: number[]
  type: number
}

const QuestionView: React.FC<IProps> = props => {
  const { id, country, answers, type } = props

  const displayQuestionTitle = () => {
    return type === 1
      ? `What's the population of the ${country}`
      : "Which country has the biggest population?"
  }

  return (
    <QuestionContainer>
      <QuestionTitle>{displayQuestionTitle()}</QuestionTitle>
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

export default QuestionView
