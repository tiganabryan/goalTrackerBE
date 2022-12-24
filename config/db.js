const mongoose = require("mongoose");
// const colors = require("colors");
const log = console.log;

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);

		log(`connected to mongoDB! ${conn.connection.host}`.cyan.underline);
	} catch (err) {
		log(err);
		process.exit(1);
	}
};

module.exports = connectDB;
