import { PubSub, v1 } from '@google-cloud/pubsub';
const pubSubClient = new PubSub();
const pubSubClient2 = new v1.PublisherClient();
// const topicName = "orders_topic";

import  pubsubRepository from '../repositories/mq-manager.js';

const { publishMessage } = pubsubRepository;

export default {
    publishRequest: async (req, res) => {
        console.log('got it ', req.body)
        let {data,topicName} = req.body;
        
        let messageId = await publishMessage(pubSubClient, topicName, data);
        return res.status(200).json({
            success: true,
            message: `Message ${messageId} published `
        })
    },

};