import React, { useContext } from "react"
import { AnswerButton } from "./answer-card-styles"
import QuizStore from "../../../../store/app-store"

interface IProps {
  questionId: number
  answer: number | string
  idx: number
}

const AnswerCard: React.FC<IProps> = props => {
  const store = useContext(QuizStore)
  const { questionId, idx, answer } = props

  const handleNextQuestion = (id: number, userAnswer: number) => {
    store.checkCorrect(id, userAnswer)
    store.addUserAnswer(userAnswer)
    store.nextQuestion()
  }

  return (
    <>
      <AnswerButton
        key={idx}
        onClick={() => handleNextQuestion(questionId, idx)}
      >
        {answer}
      </AnswerButton>
    </>
  )
}

export default AnswerCard
