/**
 * 验证码模块，包含如下功能点：
 *	
 */
const express = require('express')
const pool = require('../pool')
let router = express.Router() //创建路由器

// 使用session处理中间件，1.为当前客户端分配session存储空间，并告知客户端sid 2.当前客户端再次请求是从请求头部读取sid，进而找到客户端对用的session空间，保存为req.session
let session = require('express-session')
router.use(session({
    secret: 'seeion',	//自定义生成sid随机数的种子
    saveUninitialized: true,	//是否保存未经初始化过的session数据
    resave: true,	//是否自动保存session数据——即使没有修改过
}))

module.exports = router

/**
 * 1.1验证码功能
 * 请求方法：get
 * 请求URL：captcha/register
 * 请求参数：无
 * 返回消息：
 *		 <svg>...</svg>
 * 		...
 */
const svgCaptcha = require('svg-captcha');
const random = require("../util/random");
// const { route } = require('.');
router.get('/captcha', (req, res) => {
    // 生成一个验证码
    let option = {
        width: 100,
        height: 40,
        fontSize: 40, //字体大小
        charPreset: '0123456789abcdefghigklmnopqrstuvwxyz', //预设字符
        size: 5, // 验证码长度
        noise: 5, // 干扰线条的数量
        color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
        background: random.randomColor(160, 250), // 验证码图片背景颜色是一个随机的颜色
    }
    let captcha = svgCaptcha.create(option); //{text:"",data:"<svg></svg>"}
    // 吧验证码的内容保存在当前的用户的会话中
    session.captcha = captcha.text.toLowerCase(); // 存储为小写的形式
    // console.log("服务器端保存的验证码1：", session.captcha)
    // 把验证码图片发送给客户端
    res.type("svg") //修改响应消息头部  content-Type ：image/svg+xml
    res.send({ code: 200, data: captcha.data })
})

/*
*验证码
*/
router.get("/qucaptcha", (req, res, next) => {
    let captcha = req.query.captcha
    console.log(captcha)
    console.log(session.captcha)
    if (session.captcha == captcha) {
        res.send({ code: 200, msg: "验证码验证成功" })
    } else {
        res.send({ code: 201, msg: "验证码验证失败" })
    }
})


