const express = require('express')
const router = express.Router();
const fs = require('fs');
// / 后面可以跟get参数

router.post('', function (req, res) {

    fs.readFile(process.cwd() + '/data/user.info.json', {
        flag: 'r+',
        encoding: 'utf8'
    }, function (err, data) {
        if (err) {
            console.error(err);
            return;
        }

        res.send(data);

    });
})



module.exports = router