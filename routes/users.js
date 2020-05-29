var express = require('express');
var router = express.Router();
const userFunction = require('../controllers/users.controller');

/* GET users listing. */
router.get('/', userFunction.getUsersList);

module.exports = router;
