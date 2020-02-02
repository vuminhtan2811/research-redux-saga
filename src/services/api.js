import axios from "axios"

class api {
  constructor() {
    this.instance = axios.create()
    this.instance.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    )
  }

  handleSuccess(response) {
    return response
  }

  handleError(error) {
    return Promise.reject(error)
  }

  get(url) {
    return this.instance.get(url)
  }

  post(url, data) {
    return this.instance.post(url, data)
  }

  delete(url, id) {
    return this.instance.delete(url, id)
  }

  put(url, data) {
    return this.instance.put(url, data)
  }
}

export default new api()
