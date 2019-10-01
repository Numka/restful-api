exports.getMessage = (req, res, next) => {
	res.status(200).json({ status: "Got a message" });
};

exports.postAddMessage = (req, res, next) => {
	res.status(201).json({ status: "Created a message" });
};

exports.patchMessage = (req, res, next) => {
	res.status(200).json({ status: "Patched a message" });
};

exports.deleteMessage = (req, res, next) => {
	res.status(200).json({ status: "Deleted a message" });
};
