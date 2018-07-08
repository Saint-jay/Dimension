const db = require('../utils/mysql-util');
const du = require('../utils/data-util');

module.exports = {
    // 查询mysql：博主信息
    sql_user_info (res) {
        db.query(`${db.getData('user where id = 309')}; ${db.getData('nav_list')}`, (err, data) => {
            data = JSON.stringify(data);
            data = JSON.parse(data);
            res.send(du.result({
                        user: data[0][0],
                        navList: data[1]
                    }, res.statusCode))
        })
    },

    // 查询mysql：单个文章信息
    sql_art_info (req, res) {
        db.query(db.getData(`article where cd = '${req.params.id}'`), (err, data) => {
            data = JSON.stringify(data);
            data = JSON.parse(data);
            res.send(du.result(data[0], res.statusCode))
        })
    }

}