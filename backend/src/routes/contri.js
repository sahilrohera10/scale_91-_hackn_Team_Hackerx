const ContriCntlr = require("../controllers/ContriCntlr");
const express = require("express");
const contri = express.Router();
console.log("contri");
contri.post("/createContri", ContriCntlr.createContri);
contri.get("/getContri/:status", ContriCntlr.getContri);
contri.get("/getMembersByContriId/:contriId", ContriCntlr.getMembersByContriId);

module.exports = contri;
