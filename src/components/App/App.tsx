import React, { useEffect, useContext } from "react"
import Header from "../Header/header"
import Main from "../Main/main"
import { AppContainer } from "./app-styles"
import QuizStore from "../../store/app-store"

const App: React.FC = () => {
  const store = useContext(QuizStore)

  useEffect(() => {
    store.fetchCountries()
  }, [])

  return (
    <AppContainer>
      <Header />
      <Main />
    </AppContainer>
  )
}

export default App
