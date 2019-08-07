import { observable, action, decorate } from "mobx"

const API_COUNTRIES = "http://54.72.28.201:80/1.0/countries"

const API_POPULATION =
  "http://54.72.28.201:80/1.0/population/Brazil/2015-12-24/"

interface IStore {
  currentPage: number
  itemsPerPage: number
  repositories: any
  loading: boolean
  refresh: boolean
}

export default class Repos implements IStore {
  currentPage = 1

  itemsPerPage = 10

  repositories: any = []

  loading = false

  refresh = false

  fetchData(input: string) {
    this.clearCurrentPage()
    fetch(`${APIQuery}${input}&per_page=100`)
      .then(res => res.json())
      .then(data => (this.repositories = data.items || []))
      .then(() => (this.loading = false))
      .catch(e =>
        alert(
          `Something went wrong. Please try again or try to understand the error: ${e} .`
        )
      )
  }

  changeCurrentPage(page: number) {
    this.currentPage = page
  }

  changeLoadingState(state: boolean) {
    this.loading = state
  }

  clearCurrentPage() {
    this.currentPage = 1
  }

  clearRepositories() {
    this.repositories = []
  }
}

decorate(Repos, {
  currentPage: observable,
  refresh: observable,
  fetchData: action,
  repositories: observable,
  loading: observable,
  changeLoadingState: action,
  changeCurrentPage: action
})

const ReposStore = new Repos()
export { ReposStore }
