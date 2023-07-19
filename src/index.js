import { config } from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  config();
}
// call after config() to access the env variables
import { app } from './api';
import { publisherRouter } from './publisher';
import { deliverRouter } from './delivery-sub';



app.use('/publisher', publisherRouter);
app.use('/subscribe',  deliverRouter );

const port = process.env.PORT || 3333;

app.listen(port, () =>
  console.log(`API available on http://localhost:${port}`)
);
