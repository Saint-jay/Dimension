/**
 * Created by saint-jay on 2018/1/14.
 */

const express = require('express');
const app = express()
const userRouter = require('./router/user_info');
 
app.use('/api', userRouter);
 
app.listen(3000);











