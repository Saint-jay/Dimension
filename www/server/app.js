/**
 * Created by saint-jay on 2018/1/14.
 */

const express = require('express');
const app = express()
const router = require('./router/index');

// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// };
// app.use(allowCrossDomain);

app.use('/api', router);

app.listen(3000);











