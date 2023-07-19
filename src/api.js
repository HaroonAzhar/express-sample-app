import express from 'express';
import cors from 'cors';
import  publisherRoutes  from './routes/publisher.js' 
import  deliveriesRoutes  from './routes/delivery.js' 

export const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

// Healthcheck endpoint
app.get('/', (req, res) => {
  res.status(200).send({ status: 'ok' });
});

const api = express.Router();

api.get('/hello', (req, res) => {
  res.status(200).send({ message: 'hello world' });
});



// Version the api
app.use('/api/v1', api);
app.use('/api/v1/publisher', publisherRoutes);
app.use('/api/v1/delivery', deliveriesRoutes);

