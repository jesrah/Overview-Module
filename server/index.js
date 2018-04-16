const express = require('express');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const request = require('request');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // F or T?
app.get('/test', (req, res) => res.send('Yo! Ya server\'s up'));

app.listen(3002, () => console.log('App listening on port 3002'));
