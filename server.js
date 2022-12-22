const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();

const log = console.log;

// app.get("/api/goalTracker", (req, res) => {
// 	res.status(200).json({ "test goal": "drink 3L water" });
// });

app.use("/api/goalTracker", require("./routes/goalTrackerRoutes"));

app.listen(PORT, () => log(`now listening on port ${PORT}:)`));
