import { AuthenticatedReq } from 'src/utils/Axios'

export default class UserApi {
  static getAllUsers = async data => await AuthenticatedReq('/users/list', 'GET')
  static deleteUser = async data => await AuthenticatedReq(`/users/trash`, 'POST', data)
  static createUser = async data => await AuthenticatedReq(`/users/add`, 'POST', { data })
  static filterUsers = async data => await AuthenticatedReq(`/users/list`, 'POST', data)
}
