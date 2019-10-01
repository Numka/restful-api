const path = require('path'); 
const dotenv = require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const messageRoutes = require('./api/routes/messages');

const app = express();

//parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use('/message', messageRoutes);

// app.use((req, res, next) => {
// 	res.status(200).json({ message: "Hello there" });
// });

const port = process.env.PORT || 3000;
mongoose
	.connect(
		process.env.MONGODB_URI, 
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(result => {
		console.log("CONNECTED TO THE DATABASE")
		app.listen(port, () => console.log(`Server listens on ${port}`));
	})
	.catch(err => {
		console.log(err);
	});
