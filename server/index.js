const express = require('express')
const app = express()
//引入cors模块
const cors = require('cors')
app.use(
  cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080'],
    credentials: true,
  })
)
app.listen(3001, () => {
  console.log('3001端口监测中...')
})

// 让Express托管静态资源请求（图片/音频/视频）
app.use(express.static('./public'))
//解析请求信息的主体，将application/json 类型的请求数据保存入req.body中
let bodyParser = require('body-parser')
app.use(bodyParser.json())
// 将post传参转为对象
app.use(
  express.urlencoded({
    extended: true,
  })
)

// 用户路由
const userRouter = require('./router/user')
app.use('/user', userRouter)
// 验证码路由
const captchaRouter = require('./router/captcha')
app.use('/captcha', captchaRouter)

// 产品选购路由
const prosetRouter = require('./router/productselection')
app.use('/proset', prosetRouter)
//成功案例路由
const successRouter = require('./router/success')
app.use('/success', successRouter)

// 错误处理中间件
app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send({ code: 500, msg: '服务器端错误' })
})
