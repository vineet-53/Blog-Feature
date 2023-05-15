const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index-controller.js");
router.get('/compose' , indexController.compose);
router.get("/", indexController.home);
module.exports = router;
