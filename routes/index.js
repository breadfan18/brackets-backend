const router = require('express').Router();
const userCtrl = require('../controllers/users');

router.get('/', userCtrl.index);
router.post('/', userCtrl.create);


module.exports = router;