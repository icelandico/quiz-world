import React, { useContext } from "react"
import { observer } from "mobx-react-lite"
import ButtonContainer from "./ButtonContainer/button-container"
import QuizStore from "../../store/app-store"
import QuestionOneType from "./QuestionsCards/QuestionTypeOne/question-type-one"
import QuestionTwoType from "./QuestionsCards/QuestionsTypeTwo/question-type-two"
import { MainContent, QuizContainer } from "./main-styles"
import ScoreView from "./ScoreView/score-view"
import "./main.css"
import Loader from "./Loader/loader"

const Main: React.FC = observer(() => {
  const store = useContext(QuizStore)
  const { questions, currentQuestion, loading } = store
  const maxQuestions = 5

  const renderLoading = () => {
    return <Loader />
  }

  const renderQuestionOne = (q: any) => {
    return (
      <>
        <QuestionOneType id={q.id} country={q.country} answers={q.answers} />
      </>
    )
  }

  const renderQuestionTwo = (q: any) => {
    return (
      <>
        <QuestionTwoType id={q.id} answers={q.answers} />
      </>
    )
  }

  const renderQuestion = (q: any) => {
    return q.type === 1 ? renderQuestionOne(q) : renderQuestionTwo(q)
  }

  const defineQuestion = (q: any) => {
    return questions.length ? renderQuestion(q) : null
  }

  return (
    <MainContent>
      <ButtonContainer />
      <QuizContainer>
        {store.currentQuestion < maxQuestions ? (
          <div>
            {loading && !questions.length
              ? renderLoading()
              : defineQuestion(questions[currentQuestion])}
          </div>
        ) : (
          <ScoreView />
        )}
      </QuizContainer>
    </MainContent>
  )
})

export default Main
