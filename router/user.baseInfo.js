const express = require('express')
const router = express.Router();
const fs = require('fs');

router.post('', (req, res) => {
    fs.readFile(process.cwd() + '/data/userBaseInfo.json', { flag: 'r+', encoding: 'utf8' }, function (err, data) {
        console.log(req.body)
        if (err) {
            console.error(err);
            return;
        }
        if (req.body.loginType === 'img') {
            res.send(data);
        } else {
            res.send([]);
        }
    });
})

module.exports = router