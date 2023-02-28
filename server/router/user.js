/**
 * 用户模块，包含如下功能点：
 *	4.1用户注册功能点
 *	4.2用户登录功能点
 *  4.3修改用户头像功能点
 *  4.4获取用户的全部信息功能点
 */
const express = require('express')
const pool = require('../pool')
let router = express.Router() //创建路由器
// 使用session处理中间件，1.为当前客户端分配session存储空间，并告知客户端sid 2.当前客户端再次请求是从请求头部读取sid，进而找到客户端对用的session空间，保存为req.session
let session = require('express-session')
router.use(session({
    secret: 'seeion', //自定义生成sid随机数的种子
    saveUninitialized: true, //是否保存未经初始化过的session数据
    resave: true, //是否自动保存session数据——即使没有修改过
}))
module.exports = router

/**
 * 4.1 用户注册功能点
 * 请求方法：
 * 	POST
 * 请求URL：
 * 	/user/register
 * 请求参数：
 * 	类型：application/json
 *  uname	必需		注册用户名
 * 	upwd	必需		密码
 * 	phone	必需		电话
 * 	captcha	必需		验证码
 * 返回消息：
 * 	{
 *   "code": 200,
 *   "msg": "register success",
 *   "uid": 7
 *	}
 */
router.post('/register', (req, res, next) => {
    //1.读取请求数据并进行服务器验证
    //GET请求数据放置在req.query中
    //POST请求数据放置在req.body中  //Express中默认情况下req没有body属性，需要中间件
    console.log(req.body.params)
    let uname = req.body.params.name
    if (!uname) {
        res.send({
            code: 400,
            msg: 'uname required'
        })
        return
    }
    //此处省略了uname的格式验证：必需符合邮箱格式  401
    let upwd = req.body.params.pass
    if (!upwd) {
        res.send({
            code: 402,
            msg: 'upwd required'
        })
        return
    }
    //此处省略了upwd长度验证   403
    let phone = req.body.params.phone
    if (!phone) {
        res.send({
            code: 404,
            msg: 'phone required'
        })
        return
    }
    //此处省略了phone电话格式的验证	405
    //执行captcha验证
    let captcha = req.body.params.captcha
    if (!captcha) { //验证码不能为空
        res.send({
            code: 406,
            msg: 'captcha required'
        })
        return
    }
    captcha = captcha.toLowerCase() //转换为小写形式 
    console.log('服务器端保存的验证码2：', session.captcha)
    console.log('客户端提交来的验证码：', captcha)
    if (captcha !== session.captcha) {
        res.send({
            code: 407,
            msg: 'captcha error'
        })
        return
    }
    delete session.captcha //验证码使用完毕，需要从session中删除

    //2.向数据库执行插入语句
    //验证用户名是否已经存在   501
    let sql = 'SELECT  uid  FROM  car_user  WHERE uname=?'
    pool.query(sql, uname, (err, result) => {
        if (err) {
            next(err)
            return
        }
        if (result.length > 0) { //根据uname查询到了已经存在的记录
            res.send({
                code: 501,
                msg: 'uname already exists'
            })
            return
        }
        //验证电话号码是否已经存在   502
        let sql = 'SELECT uid FROM car_user WHERE phone=?'
        pool.query(sql, phone, (err, result) => {
            if (err) {
                next(err)
                return
            }
            if (result.length > 0) { //根据phone查询到已经存在对应的记录
                res.send({
                    code: 502,
                    msg: 'phone already exists'
                })
                return
            }
            //向数据库中执行一条INSERT语句完成注册
            let sql = 'INSERT INTO car_user(uname,upwd,phone) VALUES(?,?,?)'
            pool.query(sql, [uname, upwd, phone], (err, result) => {
                if (err) {
                    next(err)
                    return
                }
                //3.发送响应消息
                console.log(result)
                res.send({
                    code: 200,
                    msg: "register succ",
                    uid: result.insertId
                })
            })
        })
    })
})


/**
 * 4.2 用户登录功能点
 * 请求方法：
 * 	POST	-	因为登录一般需要在数据库中添加一条新的“登录历史记录”
 * 请求URL：
 * 	/user/login
 * 请求参数：
 * 	类型：application/json
 *  uname	必需		注册用户名
 * 	upwd	必需		密码
 * 返回消息：
 * 	{
 *   "code": 200,
 *   "msg": "login success",
 *   "userInfo": {
 *		"uid": 2,
 *		"uname": "ranran@tedu.cn",
 * 		"nickname": "然然"
 *	  }
 *	}
 */
router.post('/login', (req, res, next) => {
    //1.读取客户端提交的请求数据
    console.log(req.body.params)
    let name = req.body.params.name
    if (!name) {
        let output = {
            code: 401,
            msg: 'name required'
        }
        res.send(output)
        return
    }
    let pass = req.body.params.pass
    if (!pass) {
        let output = {
            code: 403,
            msg: 'pass required'
        }
        res.send(output)
        return
    }
    console.log(pass)
    //2.执行登录验证
    let sql = 'SELECT * FROM car_user WHERE uname=? AND upwd=?'
    pool.query(sql, [name, pass], (err, result) => {
        if (err) {
            next(err)
            return
        }
        console.log(result)
        if (result.length === 0) { //根据客户端提交的uname和upwd没有查询到相关记录
            let output = {
                code: 405,
                msg: 'uname or upwd error'
            }
            res.send(output)
            return
        }
        //根据客户端提交的uname和upwd查询到相关记录
        //3.1 将当前用户的登录信息保存在服务器端，给客户端一个Set-Cookie：sid=...
        //console.log('SESSION: ', req.session)
        session.userInfo = result[0] //在服务器端保存用户的登录信息uid/uname/nickName
        //req.session.save()	//将当前的session数据保存会存储空间
        //3.2 向发送响应消息
        let output = {
            code: 200,
            msg: 'login succ',
            userInfo: result[0]
        }
        res.send(output)
    })
})

/**
 * 4.3.1 上传用户头像功能点
 * 请求方法：
 * 	POST
 * 请求URL：
 * 	/user/upload/avatar
 * 请求参数：
 * 	类型：multipart/form-data
 *  avatar  必需，待上传的用户头像
 * 返回消息：
 * 	{
 *   "code": 200,
 *   "msg": "avatar upload success",
 *   "fileName": 'img-avatar/13571234237723.jpg'  //此处的后缀名根据客户端上传的文件实际后缀名而变化
 *	}
 */
const random = require('../util/random')
const fs = require('fs')
const multer = require('multer')
let upload = multer({
    dest: './temp'
}) //指定客户端上传的文件临时存储路径
router.post('/upload/avatar', upload.single('avatar')) //使用中间件解析请求主体
router.post('/upload/avatar', (req, res, next) => {
    //1.读取客户端上传的文件内容
    let file = req.file //客户端上传的文件描述对象
    //2.把客户端上传的头像文件保存到 img-avatar 目录下，并重命名
    let oldPath = file.path //上传的文件在服务器上的临时存储路径
    let newPath = 'img-avatar/' + random.randFileName(file.originalname) //目标存储路径
    fs.rename(oldPath, './public/' + newPath, (err) => { //重命名/转移文件
        if (err) {
            next(err)
            return
        }
        //客户端上传的文件已经被转移到业务的目录下：./public/img-avatar/xxxx.jpg
        let output = {
            code: 200,
            msg: 'avatar upload succ',
            fileName: newPath
        }
        res.send(output)
    })
})

/**
 * 4.3.2 修改用户头像功能点
 * 请求方法：
 * 	POST
 * 请求URL：
 * 	/user/update/avatar
 * 请求参数：
 * 	类型：application/json
 *  fileName  必需，用户头像保存在服务器上的路径名
 * 返回消息：
 * 	{
 *   "code": 200,
 *   "msg": "avatar update success"
 *	}
 */
// const loginCheck = require('../middleware/loginCheck')
// router.post('/upload/avatar', loginCheck)		//修改头像之前必须登录了
router.post('/upload/avatar', (req, res, next) => {
    //1.读取客户端上传的文件内容
    let fileName = req.body.fileName
    let uid = req.session.userInfo.uid //当前登录用户在会话中存储的uid

    //3.执行SQL语句，向数据库中提交UPDATE，更改当前登录用户的头像图片地址
    let sql = 'UPDATE user SET avatar=? WHERE uid=?'
    pool.query(sql, [fileName, uid], (err, result) => {
        if (err) {
            next(err)
            return
        }
        //当前登录用户的头像在数据库中修改完成
        let output = {
            code: 200,
            msg: 'avatar upload succ'
        }
        res.send(output)
    })
})

// 用户意向
// http://localhost:3001/user/intention
router.post('/intention', (req, res, next) => {
    let obj = req.body
    // let uadd=obj.uadd[0]+obj.uadd[1]
    //向数据库中执行一条INSERT语句完成注册
    let sql = 'INSERT INTO car_intention(phone,uname,uadd,type,code) VALUES(?,?,?,?,?)'
    pool.query(sql, [obj.phone, obj.uname, obj.uadd, obj.type, obj.code], (err, result) => {
        if (err) {
            next(err)
            return
        }
        //3.发送响应消息
        console.log(result)
        res.send({
            code: 200,
            msg: "add succ"
        })
    })
})