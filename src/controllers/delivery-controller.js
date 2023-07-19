import  { PubSub  } from '@google-cloud/pubsub';
const pubSubClient = new PubSub();
const subscriptionName = "delivery_sub";
const timeout = 60;
import  pubsubRepository from '../repositories/mq-manager.js';
const { listenForPullMessages } = pubsubRepository;

export default {
    deliveryHome: (req, res) => {
        return res.status(200).json({
            success: true,
            message: "Deliveries route confirmed :)",
        })
    },

    pullDelivery: (req, res) => {
        try {
            listenForPullMessages(pubSubClient, subscriptionName, timeout);            
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Couldn't recieve orders object :)",
                data: error
            })                        
        }
        
    }
};