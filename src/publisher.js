// const express = require('express');
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
// require('dotenv').config();
// const app = express();
const publisherRoute = require('./routes/publisher');
// const helmet = require('helmet');
// const cors = require('cors');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// const { MAIN_PORT, NODE_ENV } = process.env;
// NODE_ENV !== "production" ? app.use(morgan('dev')) : app.use(morgan('combined'));

// app.use(helmet());
// app.use(cors());
// const whitelist = ['http://localhost:5000', 'http://localhost:3000', "https://newfrontened-production.up.railway.app", 'https://projecttrackingexpressbackend-production.up.railway.app']
// var corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     },
//     credentials: true,

//     methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS']
// }
 
// app.use(cors(corsOptions));
// app.get('/', (req, res) => {
//     res.send('you have  come to zogi\'s message broker');

// })




// app.listen(MAIN_PORT);
// if (NODE_ENV !== "production" ) {
//     console.log(`publisher  service is running at http://localhost:${MAIN_PORT}`);
// }
