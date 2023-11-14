// api/axios.js
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://developer1.website/dev/cwa/', // Replace with your API base URL
  timeout: 10000, // Set the timeout for requests
  headers: myHeaders,
})

// Request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // You can add headers, authentication tokens, or any other request-related logic here.
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // You can add global response handling here.
    console.log(response)
    return response
  },
  error => {
    // You can handle error responses globally, such as token expiration or other common errors.
    return Promise.reject(error)
  }
)

export default axiosInstance
