const UserCntlr = require('../controllers/UserCntlr');
const express = require("express");
const user = express.Router();
console.log("init user");
user.post('/createUser',UserCntlr.createUser);
user.post('/createTransaction',UserCntlr.createTransaction);
user.get('/getTransactionByUpiId/:upi_id',UserCntlr.getTransactionByMemberUpiId);

module.exports = user;

