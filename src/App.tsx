import React, { useEffect, useContext } from "react"
import Header from "./components/Header/header"
import Main from "./components/Main/Main"
import { AppContainer } from "./app-styles"
import QuizStore from "./store/app-store"

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
