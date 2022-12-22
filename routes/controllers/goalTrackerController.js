const getGoals = (req, res) => {
	res.status(200).json({ task: "get goals" });
};

const addGoal = (req, res) => {
	res.status(200).json({ task: "add a goal" });
};

const updateGoal = (req, res) => {
	res.status(200).json({ task: `update goal: ${req.params.id}` });
};

const deleteGoal = (req, res) => {
	res.status(200).json({ task: `delete goal ${req.params.id}` });
};

module.exports = {
	getGoals,
	addGoal,
	updateGoal,
	deleteGoal,
};
