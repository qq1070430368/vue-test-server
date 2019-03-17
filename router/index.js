const express = require('express')
const router = express.Router()
const fs = require('fs');
router.get('/', function (req, res) {
    const rs=fs.createReadStream('17_3.jpg');//获取图片的文件名

 res.send(rs)
})
 
module.exports = router