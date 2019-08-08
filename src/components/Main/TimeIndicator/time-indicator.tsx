import React, { useContext, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { TimeContainer, TimeText, TimeLeft } from "./time-indicator-styles"
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
      <TimeLeft>{checkTimer()}</TimeLeft>
    </TimeContainer>
  )
})

export default TimeIndicator
