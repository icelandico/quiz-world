import React, { useContext } from "react"
import { observer } from "mobx-react-lite"
import QuizStore from "../../../store/app-store"
import { ButtonDiv, StartButton } from "./button-container-styles"

const ButtonContainer: React.FC = observer(() => {
  const store = useContext(QuizStore)

  const startQuiz = (e: any) => {
    e.preventDefault()
    store.changeLoadingState(true)
    store.generateQuestionsSet()
  }

  return (
    <ButtonDiv>
      <StartButton onClick={e => startQuiz(e)}>Start the Quiz</StartButton>
    </ButtonDiv>
  )
})

export default ButtonContainer
