const mysql = require('mysql');
const databaseConfig = require('../config/mysql');

module.exports = {
    // 连接mysql数据库
    query (sqls, values, callback) {
        const pool = mysql.createConnection(databaseConfig);
        pool.connect((err) => {
            if (err) {
                console.log(err);
                return;
            }
            pool.query(sqls || '', values || [], (err, res) => {
                if (error) throw error; 
                callback || callback(err, res)
            });
            pool.end();
        });
    },

    // mysql查询语法
    getAllData (surfaceName) {
        return 'SELECT * FROM ' + surfaceName;
    }

}





