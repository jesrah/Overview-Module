const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const mongodb = require('../database/index.js');
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // F or T?
app.get('/overview', (req, res) => {
	console.log('Express GET success', res.data);
	mongodb.Orgs.find()
	.then(orgs => res.send(orgs))
});

app.listen(3002, () => console.log('App listening on port 3002'));
