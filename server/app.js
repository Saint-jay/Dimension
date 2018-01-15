/**
 * Created by saint-jay on 2018/1/14.
 */

let express = require('express');
let app = express();

app.listen(8081);

app.get('/', function(req, res, next) {
    res.send(`<h1>hello word</h1>`)
})