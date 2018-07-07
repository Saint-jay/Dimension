const db = require('../utils/mysql-util');
const du = require('../utils/data-util');

module.exports = {
    // 查询mysql：博主信息
    sql_user_info (res) {
        db.query(`${db.getAllData('user where id = 309')}; ${db.getAllData('nav_list')}`, (err, data) => {
            data = JSON.stringify(data);
            data = JSON.parse(data);
            res.send(du.result({
                        user: data[0][0],
                        navList: data[1]
                    }, res.statusCode))
        })
    }

}