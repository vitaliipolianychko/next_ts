import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

const clientApi = axios.create({
  withCredentials: true,
  baseURL: API_URL
});

clientApi.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer  ${localStorage.getItem('token')}`
  return config
})

export default clientApi
