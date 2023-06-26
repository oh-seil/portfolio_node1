const mysql = require('mysql');

// 연결할 DB 정보입력
const connection = mysql.createConnection({
    host: 'database-1.ceto724okek1.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: '11111111',
    database: 'company',
    port: '3306'
});

connection.connect();

module.exports = connection;