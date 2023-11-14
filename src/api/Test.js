import { AuthenticatedReq } from 'src/utils/Axios'

export default class TestsApi {
  static getAllTest = async data => await AuthenticatedReq('/tests/list', 'GET', data)
  static getAllTest = async (courseGuid, data) => await AuthenticatedReq(`/tests/list`, 'GET', data)
}
