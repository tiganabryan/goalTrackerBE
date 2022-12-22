const log = console.log;

// route: GET /api/goalTracker
// access: public (for now)
const getGoals = async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error("pls add a text field");
	} else {
		res.status(200).json({ task: "get goals" });
	}
};

// route: POST /api/goalTracker
// access: public (for now)
const addGoal = async (req, res) => {
	log(req.body);
	res.status(200).json({ task: "add a goal" });
};

// route: PUT /api/goalTracker
// access: public (for now)
const editGoal = async (req, res) => {
	res.status(200).json({ task: `edit goal: ${req.params.id}` });
};

// route: DELETE /api/goalTracker
// access: public (for now)
const deleteGoal = async (req, res) => {
	res.status(200).json({ task: `delete goal ${req.params.id}` });
};

module.exports = {
	getGoals,
	addGoal,
	editGoal,
	deleteGoal,
};
