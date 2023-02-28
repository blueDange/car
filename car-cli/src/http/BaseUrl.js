//当前文件用于封装请求路径的前缀
//两套环境：开发环境 DEV: DEVELOPMENT
//  生产环境 PRO: PRODUCTION
const URLENV = {
  DEV: {
    //封装开发环境下的路径前缀
    CARURL: 'http://localhost:3001',
    // UPLOADURL:'http://localhost:9000'
  },
  PRO: {
    //封装生产环境下的路径前缀
    CARURL: 'http://43.136.80.166',
  },
}
export default URLENV.PRO
