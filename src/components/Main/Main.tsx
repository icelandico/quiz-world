import React, { useContext, useState } from "react"
import { observer } from "mobx-react-lite"
import ButtonContainer from "./ButtonContainer/button-container"
import QuizStore from "../../store/app-store"
import QuestionOneType from "./QuestionsCards/QuestionTypeOne/question-type-one"

const Main: React.FC = observer(() => {
  const store = useContext(QuizStore)
  const { questions, currentQuestion } = store
  const renderLoading = () => {
    return <h2>LOADIN</h2>
  }

  const renderQuestion = (q: any) => {
    return (
      <>
        <QuestionOneType country={q.country} answers={q.answers} />
      </>
    )
  }

  return (
    <div>
      <ButtonContainer />
      <div>
        <div>
          {questions.length === 0 && store.loading
            ? renderLoading()
            : questions.length > 0
            ? renderQuestion(questions[currentQuestion])
            : null}
        </div>
      </div>
    </div>
  )
})

export default Main
