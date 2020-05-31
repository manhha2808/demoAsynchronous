const Teams = require('../models/teams.model.json');

let teamsFunction = {
    getTeamsList: (req, res) => {
        // setTimeout(() => {
        //     res.json(Teams);
        // }, 5000);
        res.json(Teams);
    },
}
module.exports = teamsFunction;
