const express = require('express');

const messagesController = require('../controllers/messages');


const router = express.Router();

// http://<domain>:<port>/message/details/<messageId>
router.get('/details/:msgId', messagesController.getMessage);

// http://<domain>:<port>/message/add
router.post('/add', messagesController.postAddMessage);

// http://<domain>:<port>/message/edit/<messageId>
router.patch('/edit/:msgId', messagesController.patchMessage);

// http://<domain>:<port>/message/delete/<messageId>
router.delete('/delete/:msgId', messagesController.deleteMessage);

module.exports = router;
