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


app.get(`/overview/:orgId`, (req, res) => {
	console.log('req.params is', req.params);
	mongodb.Orgs.find()
	.then(orgs => res.send(orgs))
});

//turn req.params from string to number
//find the org whose orgId === the param number
//have server serve that org to the client
//change client code to accept any org

app.listen(3002, () => console.log('App listening on port 3002'));
