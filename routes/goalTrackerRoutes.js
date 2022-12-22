const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
	res.status(200).json({ "test goal": "drink 3L water" });
});

module.exports = router;
