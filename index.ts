import { Server } from "./api/Server";

const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const db = require('./api/config/database.config');

const app = express();

// using middleware to parse request bodies properly
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());

const port = 8080;
const server = new Server(app);

mongoose.Promise = Promise;

// start server 
server.start(port);

// db connect 
mongoose.connect(
    db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log("Connected to Mongo! :-)"))
    .catch(err => {
        console.log('Could not connect to the database :-(', err);
        process.exit();
    });