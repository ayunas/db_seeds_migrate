const express = require('express');
const server = express();
const carsRouter = require('./carsRouter');

server.listen(5000, () => console.log(`server listening on port ${5000}`));

server.use(express.json());
server.use('/cars', carsRouter);

server.get('/', (req,res) => res.status(200).end());

module.exports = server;
