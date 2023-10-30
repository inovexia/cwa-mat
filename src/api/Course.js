import { AuthenticatedReq } from 'src/utils/Axios'

export default class CourseApi {
  static getAllCourses = async data => await AuthenticatedReq('/course/list', 'POST', data)
  static getStatusChange = async data => await AuthenticatedReq('/course/status/courseGuid', 'POST', data)
}
