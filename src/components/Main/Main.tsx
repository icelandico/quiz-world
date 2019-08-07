import React, { useContext, useState } from "react"
import { observer } from "mobx-react-lite"
import ButtonContainer from "./ButtonContainer/button-container"
import QuizStore from "../../store/app-store"

const Main: React.FC = observer(() => {
  const store = useContext(QuizStore)

  const renderLoading = () => {
    return <h2>LOADIN</h2>
  }
  return (
    <div>
      <ButtonContainer />
      <div>
        <h2>Question:</h2>
        <div>
          {store.questions.length === 0 && store.loading
            ? renderLoading()
            : store.questions.length > 0
            ? store.questions.map(el => {
                return <p>{el.country}</p>
              })
            : null}
        </div>
      </div>
    </div>
  )
})

export default Main
