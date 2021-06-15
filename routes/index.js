const router = require('express').Router();
const picksCtrl = require('../controllers/picks');
const cors = require('cors');

router.get('/', picksCtrl.indexUser);
router.get('/all', picksCtrl.indexAll);
router.post('/', picksCtrl.create);
router.put('/:id', cors(), picksCtrl.update);
router.delete('/:id', picksCtrl.delete);

module.exports = router;