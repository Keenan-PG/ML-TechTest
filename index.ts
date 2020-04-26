import { Server } from "./api/Server";

const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const db = require('./api/config/database.config');

const app = express();

// CORS control
app.use(
    (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }
    );
// using middleware to parse request bodies properly
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());

// express set up 
const port = 8080;
const server = new Server(app);

// making mongoose promise behave like a JS promise (dodgy responses otherwise)
mongoose.Promise = Promise;

// start server 
server.start(port);

// db connect 
mongoose.connect(
    db.url, {
        // meta to avoid using depreciated connection methods  
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