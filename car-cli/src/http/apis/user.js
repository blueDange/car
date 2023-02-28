/**该文件仅产品选购相关的接口API */
import myaxios from '../MyAxios'
//引入路径前缀
import BASEURL from '../BaseUrl'
const { CARURL } = BASEURL

const userApi={
// 提交购买意向
intention(params) {
        let url = CARURL + '/user/intention'
        return myaxios.post(url, params)
    },
}
export default userApi
