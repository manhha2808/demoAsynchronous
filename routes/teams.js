var express = require('express');
var router = express.Router();
const teamsFunction = require('../controllers/teams.controller');

/* GET users listing. */
router.get('/', teamsFunction.getTeamsList);

module.exports = router;
