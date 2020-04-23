import { Server } from "./api/Server";
const express  = require('express');
const mongoose = require('mongoose');
const database = require('./api/config/database');
const bodyParser = require('body-parser');         // pull information from HTML POST (express4)
const methodOverride = require('method-override');

const app = express();

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

const server = new Server(app);
var port = 8080;

// const Order = require('./api/models/Order');

server.start(port); 
mongoose.connect(database.url, {useNewUrlParser: true, useUnifiedTopology: true });