/**
 * Created by saint-jay on 2018/1/14.
 */

const express = require('express');
const app = express()
const router = require('./router/index');

app.use('/api', router);

app.listen(3000);











