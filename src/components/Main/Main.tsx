import React, { useContext, useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import ButtonContainer from "./ButtonContainer/button-container"
import QuizStore from "../../store/app-store"
import QuestionOneType from "./QuestionsCards/QuestionTypeOne/question-type-one"
import QuestionTwoType from "./QuestionsCards/QuestionsTypeTwo/question-type-two"
import { MainContent, QuizContainer } from "./main-styles"
import ScoreView from "./ScoreView/score-view"
import "./main.css"
import Loader from "./Loader/loader"
import TimeIndicator from "./TimeIndicator/time-indicator"

const Main: React.FC = observer(() => {
  const store = useContext(QuizStore)
  const { questions, currentQuestion, loading, timer } = store
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
