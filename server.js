const dotenv = require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

const log = console.log;

app.listen(PORT, () => log(`now listening on port ${PORT}:)`));

// mongoose.connect(process.env.DATABASE_URL);

// const db = mongoose.connect("mongodb://localhost:27017/goalTracker");

// db.find();

// db.on("error", (err) => log(err));
// db.once("open", () => log("connected to db:)"));

// mongoose.set("strictQuery", true);

//[MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
