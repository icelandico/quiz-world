import React, { useContext, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { TimeContainer, TimeText } from "./time-indicator-styles"
import QuizStore from "../../../store/app-store"

const TimeIndicator: React.FC = observer(() => {
  const store = useContext(QuizStore)
  const { timer } = store

  useEffect(() => {
    const id = setInterval(() => {
      store.timerChange()
    }, 1000)
    return () => clearInterval(id)
  }, [timer])

  const checkTimer = () => {
    if (timer === 0) {
      store.quizStarted = false
    }
    return timer
  }

  return (
    <TimeContainer>
      <TimeText>Time left</TimeText>
      <TimeText>{checkTimer()}</TimeText>
    </TimeContainer>
  )
})

export default TimeIndicator
