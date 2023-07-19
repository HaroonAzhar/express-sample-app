const { PubSub, v1 } = require("@google-cloud/pubsub");
const pubSubClient = new PubSub();
const pubSubClient2 = new v1.PublisherClient();
// const topicName = "orders_topic";

const pubsubRepository = require("../repositories/mq-manager");

const { publishMessage } = pubsubRepository;

module.exports = {
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