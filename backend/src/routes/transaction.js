const TransactionCntlr = require('../controllers/TransactionCntlr');
const express = require("express");
const transaction = express.Router();
// console.log("init user");
transaction.get('/settleTransaction/:contri_id', TransactionCntlr.settleTransaction)

module.exports = transaction;

