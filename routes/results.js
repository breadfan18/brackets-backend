const router = require('express').Router();
const resultsCtrl = require('../controllers/results');

router.post('/', resultsCtrl.create);

module.exports = router;