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
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(400);
		throw new Error("goal not found. please try again");
	}

	const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	// 'new' will create the goal if it doesn't exist

	res.status(200).json(updatedGoal);
});

// route: DELETE /api/goalTracker
// access: public (for now)
const deleteGoal = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(400);
		throw new Error("goal not found. please try again");
	}

	await goal.remove();
	// don't need variable since it's being deleted right away

	res.status(200).json({ id: req.params.id });
	// return id for frontend
});

module.exports = {
	getGoals,
	addGoal,
	editGoal,
	deleteGoal,
};
