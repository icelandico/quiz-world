import React, { useContext } from "react"
import { observer } from "mobx-react-lite"
import ButtonContainer from "./ButtonContainer/button-container"
import QuizStore from "../../store/app-store"

const Main: React.FC = observer(() => {
  const store = useContext(QuizStore)
  return (
    <div>
      <ButtonContainer />
      {store.loading ? (
        <p>"LOADING"</p>
      ) : (
        store.countries.map(el => {
          return <p>{el}</p>
        })
      )}
    </div>
  )
})

export default Main
