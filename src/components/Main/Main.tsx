import React, { useContext } from "react"
import { observer } from "mobx-react-lite"
import ButtonContainer from "./ButtonContainer/button-container"
import QuizStore from "../../store/app-store"
import { MainContent, QuizContainer } from "./main-styles"
import ScoreView from "./ScoreView/score-view"
import "./main.css"
import Loader from "./Loader/loader"
import TimeIndicator from "./TimeIndicator/time-indicator"
import QuestionView from "./QuestionsCards/QuestionView/question-view"

interface IQuestion {
  id: number
  type: number
  answers: any[]
  correct: number
  country: string
}

const Main: React.FC = observer(() => {
  const store = useContext(QuizStore)
  const { questions, currentQuestion, loading, timer } = store
  const maxQuestions = 5

  const renderLoading = () => {
    return <Loader />
  }
  const renderQuestion = (q: IQuestion) => {
    return (
      <QuestionView
        type={q.type}
        id={q.id}
        country={q.country}
        answers={q.answers}
      />
    )
  }

  const defineQuestion = (q: IQuestion) => {
    return questions.length ? renderQuestion(q) : null
  }

  const renderScoreView = () => {
    store.quizStarted = false
    return <ScoreView />
  }

  return (
    <MainContent>
      <ButtonContainer />
      {store.quizStarted && <TimeIndicator />}
      <QuizContainer>
        {store.currentQuestion < maxQuestions && timer > 0 ? (
          <div>
            {loading && !questions.length
              ? renderLoading()
              : defineQuestion(questions[currentQuestion])}
          </div>
        ) : (
          renderScoreView()
        )}
      </QuizContainer>
    </MainContent>
  )
})

export default Main
