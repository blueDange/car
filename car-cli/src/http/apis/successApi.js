/**该文件仅存放领养模块相关的接口API */
import myaxios from "../MyAxios";
//引入路径前缀
import BASEURL from "../BaseUrl";
const { CARURL } = BASEURL
const successApi = {
    /**成功案例主页图 */
    homepic() {
        let url = CARURL + '/success/home'
        return myaxios.get(url)
    },
    // 成功案例列表
    list(params) {
        let url = CARURL + '/success/list'
        return myaxios.get(url, params)
    },
    // 成功案例详情
    deta(params) {
        let url = CARURL + '/success/deta'
        return myaxios.get(url, params)
    },

}
export default successApi;