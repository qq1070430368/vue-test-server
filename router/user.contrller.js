const express = require('express')
const router = express.Router();
const tips = require('../data/message');
const fs = require('fs');
// / 后面可以跟get参数

router.post('', function (req, res) {
   
    if (!req.body.users || !req.body.password) {
        res.send(tips.login.loginRequire);
        return;
    }
    fs.readFile(process.cwd() + '/data/userForm.json', { flag: 'r+', encoding: 'utf8' }, function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        const loginUsers = new loginUser();
        if (loginUsers.users(data, req.body)) {
            tips.login.loginSuccess.fromDate = new Date();
            res.send(tips.login.loginSuccess);
        } else {
            res.send(tips.login.loginError);
        }
    });
})

class loginUser {
    constructor() {
        this.status = null;
    }
    users(data, item) {
        if (!data) {
            return
        }
        JSON.parse(data).map((current) => {
            if (current.users == item.users && current.password == item.password) {
                this.status = true;
            } else {
                this.status = false;
            }
            return current;
        })

        return this.status;
    }
}


module.exports = router