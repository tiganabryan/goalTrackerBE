const dotenv = require("dotenv").config();
// const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 5000;

const colors = require("colors");

const express = require("express");
const connectDB = require("./config/db");
const app = express();

const log = console.log;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get("/api/goalTracker", (req, res) => {
// 	res.status(200).json({ "test goal": "drink 3L water" });
// });

app.use("/api/goalTracker", require("./routes/goalTrackerRoutes"));

app.use(errorHandler);

app.listen(PORT, () => log(`now listening on port ${PORT}:)`));
