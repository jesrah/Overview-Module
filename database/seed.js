const request = require('request');
const rp = require('request-promise');
const mongodb = require('./index.js');
const data = require('../data.json');
const fs = require('fs');

const insertData = () => {
	fs.readFile('../data.json', (err, data) => {
		if (err) {
			console.log ('readFile error:', err)
		}
		else {
			const inputData = JSON.parse(data);
			console.log('This is the data:', inputData)
			mongodb.Orgs.create(inputData);
		}
	});
};

insertData(data);