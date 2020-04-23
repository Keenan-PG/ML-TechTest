import { Server } from "./api/Server";

const express  = require('express');
const mongoose = require('mongoose');
const database = require('./api/config/database.config');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express(); // using express

// parsing request bodies properly
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());

const port = 8080;
const server = new Server(app);

// const Order = require('./api/models/Order');

server.start(port);

mongoose.connect(
    database.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to Mongo! :-)"))
    .catch(err => {
        console.log('Could not connect to the database :-(', err);
        process.exit();
    });