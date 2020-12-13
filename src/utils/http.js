import axios from 'axios'
import qs from 'querystring'

const instance = axios.create({
  timeout: 40000
})

instance.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

export default instance
