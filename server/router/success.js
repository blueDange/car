const express = require('express')
const pool = require('../pool')
// 创建路由
let router = express.Router()

// 成功案例列表接口
// http://localhost:3001/success/list
router.get("/list", (req, res, next) => {
    var obj = req.query;
    //判断各项是否为空
    if (!obj.pno) {
      obj.pno = 1;
    }
    if (!obj.count) {
      obj.count = 5;
    }
    //计算每页开始查询的值
    var start = (obj.pno - 1) * obj.count;
    //将每页数据量转为数字
    var size = parseInt(obj.count);
    // console.log(obj, start, size);
    //执行sql命令，分页查询   查询总数据量
    let sql=`select pic1,title,sid from car_success limit ${start},${size};select count(*) as sum from car_success`
    pool.query(sql,(err, r) => {
        if (err) {
          return next(err);
        }
        // console.log(sql);
        //总数据量
        var t = r[1][0].sum;
        var pno = parseInt(obj.pno);
        // console.log(t);
        //计算总页数=总数据量/每页显示数据量,结果向上取整
        var p = Math.ceil(t / obj.count);
        res.send({
          code: 200,
          msg: "成功案例列表",
          data: r[0], //查询到的数据
          total: t, //总数据量
          pages: p, //总页数
          pno: pno, //第几页
          pagisize: size,//每页多少条
        });
      }
    );
  });

// 成功案例主页图文
// http://localhost:3001/success/home
router.get('/home',(req,res,next)=>{
 pool.query('select pic1,title,sid from car_success',(err,r)=>{
  if(err){
    return next(err)
  }
  res.send({ code: 200, msg: "成功案例主页图", data: r });
 })
})

//成功案例详情
// http://localhost:3001/success/deta
router.get('/deta',(req,res,next)=>{
  var obj=req.query
  pool.query('select * from car_success where sid=?',[obj.sid],(err,r)=>{
   if(err){
     return next(err)
   }
   res.send({ code: 200, msg: "成功案例详情", data: r });
  })
 })


module.exports = router