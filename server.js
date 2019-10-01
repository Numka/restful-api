const path = require('path'); 
const dotenv = require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

//routes
const messageRoutes = require('./api/routes/messages');

const app = express();

app.use('/message', messageRoutes);

// app.use((req, res, next) => {
// 	res.status(200).json({ message: "Hello there" });
// });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listens on ${port}`));