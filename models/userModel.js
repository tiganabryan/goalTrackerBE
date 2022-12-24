const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: [true, "please add your first name"],
		},
		username: {
			type: String,
			required: true,
			unique: [true, "please add a username"],
		},
		email: {
			type: String,
			required: [true, "please add your email"],
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Users", userSchema);
