const router = require('express').Router();
const picksCtrl = require('../controllers/picks');

router.get('/', picksCtrl.indexUser);
router.get('/all', picksCtrl.indexAll);
router.post('/', picksCtrl.create);
router.put('/:id', picksCtrl.update);


module.exports = router;