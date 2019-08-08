import React, { useEffect, useContext } from "react"
import { observer } from "mobx-react-lite"
import QuizStore from "../../../store/app-store"
import { Answer, WrongAnswer } from "./score-view-styles"

const ScoreView: React.FC = observer(() => {
  const store = useContext(QuizStore)
  const { userAnswers, questions } = store

  const checkCorrect = (qId: number, answer: number) => {
    if (questions[qId].correct === answer) {
      return <Answer>Correct</Answer>
    }
    return <WrongAnswer>Wrong</WrongAnswer>
  }

  return (
    <div>
      Your answers are:
      {userAnswers.map((answer, idx) => {
        return (
          <div key={idx}>
            Question {idx + 1}
            <p>{checkCorrect(idx, answer)}</p>
          </div>
        )
      })}
      Your score is:
      <h1>{store.userScore}</h1>
    </div>
  )
})

export default ScoreView
