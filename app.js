const express = require('express');

const cors = require('cors');

const userContrllers = require('./router/user.contrller');
const indexRouter = require('./router/index');
const usersImg = require('./router/user.baseInfo')
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
app.use(cors({
    origin: ['http://localhost:8080'],
    methods: ['GET', 'POST'],
    alloweHeaders: ['Conten-Type', 'Authorization']
}));

// 对于post提交的参数使用body-parser解析
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/', indexRouter);
app.use('/users', userContrllers);
app.use('/usersImg', usersImg)


//配置服务端口

const server = app.listen(3000, function () {

    const host = server.address().address;

    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})
