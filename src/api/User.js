import { AuthenticatedReq } from 'src/utils/Axios'

export default class UserApi {
  // Get All Users
  static getAllUsers = async data => await AuthenticatedReq('/users/list', 'GET')

  // Delete User
  static deleteUser = async guidToDelete =>
    await AuthenticatedReq(`/users/delete/${guidToDelete}`, 'POST', guidToDelete)

  // Trash User
  static trashUser = async data => await AuthenticatedReq(`/users/trash`, 'POST', data)

  // Update User
  static updateUser = async ({ id, data }) => await AuthenticatedReq(`/users/update/${id}`, 'POST', { data })

  // View User
  static viewUser = async id => await AuthenticatedReq(`/users/view/${id}`, 'GET')

  // Create User
  static createUser = async data => await AuthenticatedReq(`/users/add`, 'POST', data)

  // Filter User
  static filterUsers = async data => await AuthenticatedReq(`/users/list`, 'POST', data)

  // Change User Status
  static changeStatus = async data => await AuthenticatedReq(`/users/change_status`, 'POST', data)
}
