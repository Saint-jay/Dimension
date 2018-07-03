
const db = require('../utils/mysql-util');
const du = require('../utils/data-util');

const express = require('express')
const router = express.Router()
 
router.get('/user_info', function (req, res) {
    db.query(`${db.getAllData('user')}; ${db.getAllData('nav_list')}`, (err, data) => {
        data = JSON.stringify(data);
        data = JSON.parse(data);
        res.send(du.result({
                    user: data[0][0],
                    navList: data[1]
                }, res.statusCode))
    })
})
 
module.exports = router
