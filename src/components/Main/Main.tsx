import React, { useContext, useState } from "react"
import { observer } from "mobx-react-lite"
import ButtonContainer from "./ButtonContainer/button-container"
import QuizStore from "../../store/app-store"
import QuestionOneType from "./QuestionsCards/QuestionTypeOne/question-type-one"

const Main: React.FC = observer(() => {
  const store = useContext(QuizStore)
  const [questionNum, nextQuestion] = useState(0)
  const { questions } = store
  const renderLoading = () => {
    return <h2>LOADIN</h2>
  }

  const renderNextButton = () => {
    return (
      <button onClick={() => nextQuestion(questionNum + 1)}>
        NEXT QUESTION
      </button>
    )
  }

  const renderQuestion = (q: any) => {
    return (
      <>
        <QuestionOneType country={q.country} answers={q.answers} />
        {questionNum < questions.length - 1 ? renderNextButton() : null}
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
            ? renderQuestion(questions[questionNum])
            : null}
        </div>
      </div>
    </div>
  )
})

export default Main
