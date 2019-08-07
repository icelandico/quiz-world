import React, { useContext } from "react"
import { observer } from "mobx-react-lite"
import QuizStore from "../../../store/app-store"
import { StartButton } from "./button-container-styles"

const ButtonContainer: React.FC = observer(() => {
  const store = useContext(QuizStore)

  const startQuiz = () => {
    store.changeLoadingState(true)
    store.fetchCountries()
  }

  return (
    <div>
      <StartButton onClick={startQuiz}>Start the Quiz</StartButton>
    </div>
  )
})

export default ButtonContainer
