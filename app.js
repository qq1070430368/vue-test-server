const express = require('express');

const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
app.use(cors({
    origin: ['http://127.0.0.1:8089'],
    methods: ['GET', 'POST'],
    alloweHeaders: ['Conten-Type', 'Authorization']
}));

// 对于post提交的参数使用body-parser解析
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/', require('./router/index'));
app.use('/users', require('./router/user.contrller'));
app.use('/usersImg', require('./router/user.baseInfo'));
app.use('/getUsers', require('./router/user.info'))


//配置服务端口

const server = app.listen(3000, function () {

    const host = server.address().address;

    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})
