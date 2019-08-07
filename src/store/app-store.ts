import { observable, action, decorate } from "mobx"
import { createContext } from "react"

const PROXY_URL = "https://cors-anywhere.herokuapp.com/"
const API_COUNTRIES = "http://54.72.28.201:80/1.0/countries"

const API_POPULATION =
  "http://54.72.28.201:80/1.0/population/Brazil/2015-12-24/"

interface IStore {
  countries: string[]
}

export class QuizStore implements IStore {
  countries = []

  loading = false

  fetchCountries() {
    fetch(`${PROXY_URL}${API_COUNTRIES}`, { mode: "cors" })
      .then(res => res.json())
      .then(data => (this.countries = data.countries))
      .then(() => (this.loading = false))
      .catch(e =>
        alert(
          `Something went wrong. Please try again or try to understand the error: ${e} .`
        )
      )
  }

  changeLoadingState(state: boolean) {
    this.loading = state
  }
}

decorate(QuizStore, {
  fetchCountries: action,
  loading: observable,
  countries: observable
})

export default createContext(new QuizStore())
