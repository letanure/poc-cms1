import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:3004',
})

/**
 * Request Wrapper with default success/error actions
 */
const request = (options) => {
  const onSuccess = function (response) {
    return response.data
  }

  const onError = (error) => {
    console.error('Request Failed:', error.response.status, error.config)
    return Promise.reject(error.response || error.message)
  }

  return client(options)
    .then(onSuccess)
    .catch(onError)
}

export default request
