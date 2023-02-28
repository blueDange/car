const mysql = require("mysql");
const pool = mysql.createPool({
  host: "43.136.80.166",
  port: "3306",
  user: "root",
  password: "123123123",
  database: "car",
  connectionLimit: 15,
  multipleStatements: true,
});
// 为pool新增一个方法，同步执行sql的方法
pool.querySync = (sql, params) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = pool;
