const mongoose = require("mongoose");
const log = console.log;

const mongoURI = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.rdrwnfy.mongodb.net/goalTracker?retryWrites=true&w=majority:27017/goalTracker`;

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(mongoURI);

		log(`connected to mongoDB! ${conn.connection.host}`.blue.underline);
	} catch (err) {
		log(err);
		process.exit(1);
	}
};

module.exports = connectDB;
