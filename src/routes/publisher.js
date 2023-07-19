const express = require('express');
const router = express();
const ordersController = require("../controllers/publisher-controller");


router.post("/publish-request", ordersController.publishRequest);

module.exports = router;