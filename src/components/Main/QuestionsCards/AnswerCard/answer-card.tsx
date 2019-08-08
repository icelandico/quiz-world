import React, { useContext } from "react"
import { AnswerButton } from "./answer-card-styles"
import QuizStore from "../../../../store/app-store"

interface IProps {
  answer: number | string
  idx: number
}

const AnswerCard: React.FC<IProps> = props => {
  const store = useContext(QuizStore)
  const { idx, answer } = props

  const handleNextQuestion = (i: number) => {
    store.addUserAnswer(i)
    store.nextQuestion()
  }

  return (
    <>
      <AnswerButton key={idx} onClick={() => handleNextQuestion(idx)}>
        {answer}
      </AnswerButton>
    </>
  )
}

export default AnswerCard
