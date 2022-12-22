const express = require("express");
const router = express.Router();
const {
	getGoals,
	addGoal,
	editGoal,
	deleteGoal,
} = require("./controllers/goalTrackerController");

router.get("", getGoals);

router.post("", addGoal);

router.put("/:id", editGoal);

router.delete("/:id", deleteGoal);

module.exports = router;
