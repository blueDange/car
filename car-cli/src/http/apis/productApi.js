/**该文件仅产品选购相关的接口API */
import myaxios from '../MyAxios'
//引入路径前缀
import BASEURL from '../BaseUrl'
const { CARURL } = BASEURL
const prosetApi = {
  /**产品选购所有 */
  prosetlist(params) {
    let url = CARURL + '/proset/list'
    return myaxios.get(url, params)
  },
  prosettype(params) {
    let url = CARURL + '/proset/type'
    return myaxios.get(url, params)
  },
  prosetdetail(id) {
    let url = CARURL + '/proset/list-detail'
    return myaxios.get(url, id)
  },
  // 查询所有房车名称
  title(){
    let url= CARURL + '/proset/title'
    return myaxios.get(url)
  }
}
export default prosetApi
