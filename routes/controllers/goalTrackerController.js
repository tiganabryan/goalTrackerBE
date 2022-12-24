const asyncHandler = require("express-async-handler");
const log = console.log;

const goal = require("../../models/goalModel");

// route: GET /api/goalTracker
// access: public (for now)
const getGoals = asyncHandler(async (req, res) => {
	res.status(200).json({ task: "get goals" });
});

// route: POST /api/goalTracker
// access: public (for now)
const addGoal = asyncHandler(async (req, res) => {
	log(req.body);
	if (!req.body.text) {
		res.status(400);
		throw new Error("please add a text field");
	}
	res.status(200).json({ task: "add a goal" });
});

// route: PUT /api/goalTracker
// access: public (for now)
const editGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ task: `edit goal: ${req.params.id}` });
});

// route: DELETE /api/goalTracker
// access: public (for now)
const deleteGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ task: `delete goal ${req.params.id}` });
});

module.exports = {
	getGoals,
	addGoal,
	editGoal,
	deleteGoal,
};
