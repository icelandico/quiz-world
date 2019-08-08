import React, { useContext } from "react"
import { observer } from "mobx-react-lite"
import QuizStore from "../../../store/app-store"
import { ButtonDiv, StartButton } from "./button-container-styles"

const ButtonContainer: React.FC = observer(() => {
  const store = useContext(QuizStore)
  const { quizStarted } = store

  const startQuiz = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    store.resetQuiz()
    store.changeLoadingState(true)
    store.generateQuestionsSet()
  }

  const buttonText = () => {
    return quizStarted ? "Restart the Quiz" : "Start the Quiz"
  }

  return (
    <ButtonDiv>
      <StartButton onClick={e => startQuiz(e)}>{buttonText()}</StartButton>
    </ButtonDiv>
  )
})

export default ButtonContainer
