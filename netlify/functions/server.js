const express = require('express');
const app = express();
const router = express.Router();
const serverless = require('serverless-http');
const path = require('path');

/*
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile('index.html');
});
*/

router.get('/', (req, res) => {
    res.send("Hello world");
});

app.use('/api/', router);

export const handler = serverless(app);