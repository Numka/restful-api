const express = require('express');

const messagesController = require('../controllers/messages');


const router = express.Router();

router.get('/details', messagesController.getMessage);

router.post('/add', messagesController.postAddMessage);

router.patch('/edit', messagesController.patchMessage);

router.delete('/delete', messagesController.deleteMessage);

module.exports = router;
