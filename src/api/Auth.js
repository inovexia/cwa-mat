import { AuthenticatedReq } from 'src/utils/Axios'

export default class AuthApi {
  static getTokenDetails = async () => await AuthenticatedReq('/auth/token_details', 'GET')

  static logIn = async data => await AuthenticatedReq('/auth/login', 'POST', data)
}
