import React, { useContext } from "react"
import { observer } from "mobx-react-lite"
import QuizStore from "../../../store/app-store"
import { StartButton } from "./button-container-styles"

const ButtonContainer: React.FC = observer(() => {
  const store = useContext(QuizStore)

  const startQuiz = (e: any) => {
    e.preventDefault()
    store.changeLoadingState(true)
    store.generateQuestionsSet()
  }

  return (
    <div>
      <StartButton onClick={e => startQuiz(e)}>Start the Quiz</StartButton>
    </div>
  )
})

export default ButtonContainer
