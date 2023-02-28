const { query } = require('express')
const express = require('express')
const pool = require('../pool')
const Response = require('../Response')
// 创建路由
let router = express.Router()

// // 产品选购-列表
router.get('/list', async (req, res) => {
  let obj = req.query
  // 如果页码为空, 默认为第一页
  console.log(obj)
  if (!obj.pno) {
    obj.pno = 1
  }
  if (!obj.count) {
    obj.count = 6
  }
  var start = (obj.pno - 1) * obj.count
  var size = parseInt(obj.count)
  let sql = 'select * from CAR_PROSET limit ?,?'

  let result = await pool.querySync(sql, [start, size])
  // // 总条目数
  let sql2 = 'select count(*) n from CAR_PROSET'
  let result2 = await pool.querySync(sql2, [start, size])
  let total = result2[0].n
  // console.log(result)
  let sid = result.sid
  // console.log(sid)
  res.send(Response.ok({ pno: parseInt(obj.pno), count: size, total, result }))
})

//查询类型不同的房车
router.get('/type', async (req, res) => {
  let obj = req.query
  if (!obj.pno) {
    obj.pno = 1
  }
  if (!obj.count) {
    obj.count = 6
  }

  // console.log(req.query)
  // let shcema = Joi.object({
  //   type: Joi.number().required(), // type必须为数字,必填
  //   pno: Joi.number().required(), // pno必须为数字 ,必填
  //   count: Joi.number().integer().max(100).required(),
  // }); // count必须不大于100,必填
  // let { error, value } = shcema.validate(req.query);
  // if (error) {
  //   res.send(Response.error(400, error));
  //   return;
  // }
  // console.log('---', obj.pno, obj.type, obj.count)
  var start = (obj.pno - 1) * obj.count
  var size = parseInt(obj.count)
  type = parseInt(obj.type)
  console.log('type:', type, obj.pno, obj.count)
  let sql = 'select * from CAR_PROSET where type = ? limit ?,?'
  let result = await pool.querySync(sql, [type, start, size])
  // 执行查询总条目数
  let sql2 = 'select count(*) n from CAR_PROSET where type = ?'
  let result2 = await pool.querySync(sql2, [type])
  let total = result2[0].n
  res.send(Response.ok({ pno: parseInt(obj.pno), count: size, total, result }))
})

// 列表详情
router.get('/list-detail', (req, res) => {
  let obj = req.query
  console.log('obj', obj.id)
  let sql = 'select * from PROSET_DETAIL where tid = ?'
  pool.query(sql, [obj.id], (error, result) => {
    if (error) {
      request.send(Response.error(500, error))
      throw error
    }
    res.send(Response.ok({ result }))
  })
})

// 查询所有产品选购名称
//http://localhost:3001/proset/title 
router.get('/title',(req,res,next)=>{
let sql='select title from CAR_PROSET'
pool.query(sql,(err,r)=>{
  if(err){
    return next(err)
  }
  res.send({ code: 200, msg: "选购名称", data: r });
})
})

module.exports = router
