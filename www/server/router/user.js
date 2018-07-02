
let express = require('express');
let db = require('../utils/mysql-util');
let du = require('../utils/data-util');
let app = express();


let str = '';
let user = '';


// 查询实例
db.query(db.getAllData('user'), (error, results, fields) => {
    if (error) throw error;
    user = JSON.stringify(results);
    user = user.substring(1, user.length - 1);
});

db.query(db.getAllData('nav_list'), (error, results, fields) => {
    if (error) throw error;
    str = JSON.stringify(results);
});


app.set('env', 'production'); 
app.get('/api/user_info', function(req, res, next) {
    let data = du.result({
                    user: JSON.parse(user),
                    navList: JSON.parse(str)
                }, res.statusCode)
    res.send(data)
})

app.listen(3000);