const express = require("express");
const router = express.Router();
const BatchController = require("../controllers/batch");


router.post("/addbatch", BatchController.addBatch);




module.exports = router;
