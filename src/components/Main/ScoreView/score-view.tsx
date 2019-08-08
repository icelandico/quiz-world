import React, { useEffect, useContext } from "react"
import { observer } from "mobx-react-lite"
import QuizStore from "../../../store/app-store"

const ScoreView: React.FC = observer(() => {
  const store = useContext(QuizStore)
  const { userAnswers, questions } = store

  return (
    <div>
      Your answers are:
      {userAnswers.map((answer, idx) => {
        return <p key={idx}>{answer}</p>
      })}
      Your score is:
      <h1>{store.userScore}</h1>
    </div>
  )
})

export default ScoreView
