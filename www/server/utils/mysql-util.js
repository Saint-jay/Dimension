const mysql = require('mysql');
const databaseConfig = require('../config/mysql');

const query = (sqls, values, callback) => {
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
}


const getAllData = (surfaceName) => {
    return 'SELECT * FROM ' + surfaceName;
}



module.exports = {
    query: query,
    getAllData: getAllData
}





