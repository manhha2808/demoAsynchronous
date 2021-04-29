const Users = require('../models/users.model.json');

let userFunction = {
	getUsersList: (req, res) => {
		setTimeout(() => {
			res.json(Users);
		}, 5000);
		// res.json(Users);
	}
};
module.exports = userFunction;
