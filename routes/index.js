const router = require('express').Router();
const userCtrl = require('../controllers/users');

router.get('/', userCtrl.index);


module.exports = router;