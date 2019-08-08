import React from "react"
import { MainHeader, HeaderDescription } from "./header-styles"

const Header: React.FC = () => {
  return (
    <header>
      <MainHeader>World Population Quiz</MainHeader>
      <HeaderDescription>
        Your objective is to answer the questions! There is two kind of them.
        For each correct answer you get 1 point. Hurry up because you have only
        20 seconds to finish this task.
      </HeaderDescription>
    </header>
  )
}

export default Header
