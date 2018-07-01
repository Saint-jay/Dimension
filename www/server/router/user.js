
let express = require('express');
// let db = require('../utils/mysql-util');
let connection = require('../config/mysql');
let app = express();


let str = '';
let user = '';


// db.start
// db.query('SELECT * FROM user', function(error, results, fields){
//     // if (error) throw error;
//     user = JSON.stringify(results);
//     user = user.substring(1, user.length - 1);
// });

// db.query('SELECT * FROM nav_list', function(error, results, fields){
//     // if (error) throw error;
//     str = JSON.stringify(results);
// });
// db.end


connection.connect();
connection.query('SELECT * FROM user', (error, results, fields) => {
    if (error) throw error;
    user = JSON.stringify(results);
    user = user.substring(1, user.length - 1);
});
connection.query('SELECT * FROM nav_list', (error, results, fields) => {
    if (error) throw error;
    str = JSON.stringify(results);
});
connection.end();




app.set('env', 'production'); 
app.get('/api/user_info', function(req, res, next) {
    
    let data = {
        result: {
            user: JSON.parse(user),
            navList: JSON.parse(str)
        },
        code: res.statusCode,
        message: 'success'
    }
    res.send(data)
})


app.listen(3000);