const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
			// ref is the name of the model we're referencing
		},
		text: {
			type: String,
			required: true,
		},
		achieved: {
			type: Boolean,
			default: false,
			required: true,
		},
	},

	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Goals", goalSchema);
