const Message = require('../models/message');

exports.getMessage = (req, res, next) => {
	const messageId = req.params.msgId;

	Message
		.find({ _id: messageId })
		.then(message => {
			console.log(message);
			res.status(200).json({ status: "Got a message", message: message });
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: err });
		});
};

// format of request: { "msgText": "hello", "nickname": "num"}
exports.postAddMessage = (req, res, next) => {
	const message = new Message({
		msgText: req.body.msgText,
		nickname: req.body.nickname
	});
	message
		.save()
		.then(result => {
			console.log(result);
			res.status(201).json({ status: "Created a message", message: message });
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: err });
		});
};

// format of request: { "newMsgText": "hellonew", "newNickname": "numnew"}
exports.patchMessage = (req, res, next) => {
	const messageId = req.params.msgId;

	Message
		.findById({ _id: messageId })
		.then(message => {
			message.msgText = req.body.newMsgText || message.msgText;
			message.nickname = req.body.newNickname || message.nickname;
			message.save(result => {
				res.status(200).json({ status: "Patched a message" });
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: err });
		});
};

exports.deleteMessage = (req, res, next) => {
	const messageId = req.params.msgId;

	Message
		.findByIdAndDelete({ _id: messageId })
		.then(result => {
			console.log(result);
			res.status(200).json({ status: "Deleted a message" });
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: err });
		});

};
