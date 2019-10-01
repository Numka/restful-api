const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
	msgText: {
		type: String
	},
	nickname: {
		type: String
	}
});

module.exports = mongoose.model("Message", messageSchema);