import express from 'express';
const deliveriesRoutes = express.Router();
import deliveryController from "../controllers/delivery-controller.js";


deliveriesRoutes.get("/", deliveryController.deliveryHome);
deliveriesRoutes.post("/pull", deliveryController.pullDelivery);

export default  deliveriesRoutes;