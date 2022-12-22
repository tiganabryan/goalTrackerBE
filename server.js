const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 5000;

const log = console.log;

mongoose.connect("mongodb://localhost:27017/goalTracker");

app.listen(PORT, () => log(`now listening on port ${PORT}:)`));
