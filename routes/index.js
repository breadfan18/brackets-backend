const router = require('express').Router();
const picksCtrl = require('../controllers/picks');

router.get('/', picksCtrl.indexUser);
router.post('/', picksCtrl.create);
router.put('/:id', picksCtrl.update);


module.exports = router;