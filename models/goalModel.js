const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema(
	{
		text: {
			type: String,
			required: true,
		},
	},
	{
		achieved: {
			type: Number | Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("goals", goalSchema);
