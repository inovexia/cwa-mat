import { AuthenticatedReq } from 'src/utils/Axios'

export default class CourseApi {
  static getAllCourses = async data => await AuthenticatedReq('/course/list', 'GET', data)
  static getSubjectList = async (courseGuid, data) =>
    await AuthenticatedReq(`/course/${courseGuid}/subjects`, 'POST', data)
  static courseStatus = async (courseGuid, data) => await AuthenticatedReq(`/course/status/${courseGuid}`, 'POST', data)
}
