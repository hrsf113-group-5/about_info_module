require('newrelic');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

const router = require('./router.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

app.listen(port, () => console.log(`[Server] Listening on port ${port}`));

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/stocks/:symbol', express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);
