const router = require('express').Router();
const resultsCtrl = require('../controllers/results');

router.get('/', resultsCtrl.create);

module.exports = router;