import React from "react"
import Header from "./components/Header/header"
import Main from "./components/Main/Main"
import { AppContainer } from "./app-styles"

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <Main />
    </AppContainer>
  )
}

export default App
