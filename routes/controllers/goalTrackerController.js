const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const log = console.log;

const Goal = require("../../models/goalModel");

// route: GET /api/goalTracker
// access: public (for now)
const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goal.find({});
	res.status(200).json(goals);
});

// route: POST /api/goalTracker
// access: public (for now)
const addGoal = asyncHandler(async (req, res) => {
	log(req.body);
	if (!req.body.text) {
		res.status(400);
		throw new Error("please add a text field");
	}
	const goal = await Goal.create({
		text: req.body.text,
	});
	res.status(200).json(goal);
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
