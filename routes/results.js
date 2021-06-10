const router = require('express').Router();
const resultsCtrl = require('../controllers/results');

router.get('/', resultsCtrl.index);
router.post('/', resultsCtrl.create);

module.exports = router;