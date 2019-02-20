require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
    process.env.MONGO_URL,
    {
    useNewUrlParser: true
    }
);

app.use((req, res, next) => {
    req.io = io;
    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(process.env.PORT || 3000)