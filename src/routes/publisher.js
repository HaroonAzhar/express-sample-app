import express from 'express';
const router = express.Router();

import ordersController from "../controllers/publisher-controller.js";

router.get('/', (req, res) => {
    res.send('you have  come to zogi\'s message broker');

})
router.post("/publish-request", ordersController.publishRequest);

export default router;