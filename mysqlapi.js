const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : '47.56.134.154',   // 数据库地址
  user     : 'root',    // 数据库用户
  password : '!QAZxsw2',   // 数据库密码
  database : 'text'  // 选中数据库
})
 
// 执行sql脚本对数据库进行读写 
connection.query('SELECT * FROM text',  (error, results, fields) => {
  if (error) throw error
  // connected! 
  
  // 结束会话
  console.log(results)
});