import { observable, action, decorate } from "mobx"
import { createContext } from "react"

const PROXY_URL = "https://cors-anywhere.herokuapp.com/"
const API_COUNTRIES = "http://54.72.28.201:80/1.0/countries"

const API_POPULATION = "http://54.72.28.201:80/1.0/population/"

interface IQuestion {
  id: number
  type: number
  answers: number | string[]
  correct: number
  country: string
}

export class QuizStore {
  userAnswers: number[] = []

  countries: string[] = []

  questions: IQuestion[] = []

  loading: boolean = false

  currentQuestion: number = 0

  userScore: number = 0

  resetQuiz() {
    this.userAnswers = []
    this.questions = []
    this.currentQuestion = 0
    this.userScore = 0
  }

  nextQuestion() {
    this.currentQuestion += 1
  }

  addUserAnswer(answer: number) {
    this.userAnswers.push(answer)
  }

  checkCorrect(qId: number, answer: number) {
    if (this.questions[qId].correct === answer) {
      this.userScore += 1
    }
  }

  fetchCountries() {
    fetch(`${PROXY_URL}${API_COUNTRIES}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        this.countries = data.countries
      })
      .then(() => {
        this.loading = false
      })
      .catch(e =>
        alert(
          `Something went wrong. Please try again or try to understand the error: ${e} .`
        )
      )
  }

  generateCountryList() {
    const countryList: string[] = []
    while (countryList.length < 3) {
      const randomIdx = Math.ceil(Math.random() * this.countries.length - 1)
      if (!countryList.includes(this.countries[randomIdx])) {
        countryList.push(this.countries[randomIdx])
      }
    }
    return countryList
  }

  async getPopulation(country: string) {
    try {
      const response = await fetch(
        `${PROXY_URL}${API_POPULATION}${country}/2019-08-01/`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      )
      const json = await response.json()
      return json.total_population.population
    } catch (e) {
      alert(
        `Something went wrong. Please try again or try to understand the error: ${e} .`
      )
    }
  }

  async getCountriesPopulation() {
    const countries = this.generateCountryList()
    const results = async () => {
      return Promise.all(countries.map(country => this.getPopulation(country)))
    }
    const populationResults = await results()
    const countriesAndPopulation = countries.map((c, idx) => ({
      c,
      population: populationResults[idx]
    }))
    return countriesAndPopulation
  }

  generateQuestionsStructure() {
    const questions: number[] = [...Array(5).keys()]
    const questionTypes = 2
    const randomIdx = () => Math.ceil(Math.random() * questionTypes)
    return questions.map(q => randomIdx())
  }

  changeLoadingState(state: boolean) {
    this.loading = state
  }

  async generateQuestionsSet() {
    this.fetchCountries()
    const questionsTypes = this.generateQuestionsStructure()
    const questionsSet = async () => {
      return Promise.all(
        questionsTypes.map((el, idx) =>
          el === 1
            ? this.generateQuestionTypeOne(idx)
            : this.generateQuestionTypeTwo(idx)
        )
      )
    }
    const q: IQuestion[] = await questionsSet()
    console.log(q)
    this.questions = q
  }

  async generateQuestionTypeOne(index: number) {
    const countriesSet = await this.getCountriesPopulation()
    const answers = countriesSet.map(element => element.population)
    const randomChoice = Math.ceil(Math.random() * countriesSet.length - 1)
    const questionObj = {
      id: index,
      type: 1,
      answers,
      correct: randomChoice,
      country: countriesSet[randomChoice].c
    }
    return questionObj
  }

  async generateQuestionTypeTwo(index: number) {
    const countriesSet = await this.getCountriesPopulation()
    const answers = countriesSet.map(element => element.c)
    const correctIndex = this.defineBiggestPopul(countriesSet)
    const questionObj = {
      id: index,
      type: 2,
      answers,
      correct: correctIndex,
      country: countriesSet[correctIndex].c
    }
    return questionObj
  }

  defineBiggestPopul(countries: any[]) {
    const sortByPopulation = [...countries].sort((a, b) =>
      a.population < b.population ? 1 : -1
    )
    const maxPopulation = sortByPopulation[0].population
    const index = countries.findIndex(
      value => value.population === maxPopulation
    )
    return index
  }
}

decorate(QuizStore, {
  fetchCountries: action,
  loading: observable,
  countries: observable,
  questions: observable,
  currentQuestion: observable,
  generateQuestionsStructure: action,
  addUserAnswer: action
})

export default createContext(new QuizStore())
