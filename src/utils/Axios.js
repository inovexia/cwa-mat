import axios from 'axios'

const Axios = axios.create({ baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`, timeout: 20000 })

const PublicAxios = axios.create({ timeout: 20000 })

const AddCommonHeaders = Axios => {
  const token = localStorage.getItem('token')
  if (token && token !== '') Axios.defaults.headers.common['Authorization'] = `Bearer ` + token
  Axios.defaults.headers.common['Network'] = process.env.NEXT_PUBLIC_API_NETWORK
}

export const AuthenticatedReq = async (url, method, config) => {
  try {
    // console.log('NEXT_API_BASE_URL:', process.env.NEXT_PUBLIC_API_BASE_URL)
    // console.log('NEXT_API_NETWORK:', process.env.NEXT_PUBLIC_API_NETWORK)
    AddCommonHeaders(Axios)

    const res = await Axios({ url, method: method, ...config })
    return res.data
  } catch (err) {
    const reqError = err
    return (
      reqError.response?.data ?? {
        success: false,
        message: reqError.code === 'ECONNABORTED' ? 'Network error, check internet connection.' : err.message
      }
    )
  }
}

export const PublicReq = async (url, method, config) => {
  try {
    const res = await PublicAxios({ url, method: method, ...config })
    return res.data
  } catch (err) {
    const reqError = err
    return (
      reqError.response?.data ?? {
        success: false,
        message: reqError.code === 'ECONNABORTED' ? 'Network error, check internet connection.' : err.message
      }
    )
  }
}

export default Axios
