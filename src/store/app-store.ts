import { observable, action, decorate } from "mobx"

const API_COUNTRIES = "http://54.72.28.201:80/1.0/countries"

const API_POPULATION =
  "http://54.72.28.201:80/1.0/population/Brazil/2015-12-24/"

interface IStore {}

export default class Questions implements IStore {
  loading = false

  changeLoadingState(state: boolean) {
    this.loading = state
  }
}

decorate(Questions, {
  loading: observable
})

const QuizStore = new Questions()
export { QuizStore }
