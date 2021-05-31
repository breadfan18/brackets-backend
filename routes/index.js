const router = require('express').Router();
const picksCtrl = require('../controllers/picks');

router.get('/', picksCtrl.index);
router.post('/', picksCtrl.create);


module.exports = router;