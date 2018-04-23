const fs = require('fs');
const path = require('path')
const mongoose = require('mongoose');
const dbHelpers = require('./dbHelpers.js');
const initData = require ('./sampleCrunchlyData.json');
const rp = require('request-promise');
const Promise = require('bluebird');

mongoose.connect('mongodb://localhost/crunchlyview');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
	const orgSchema = mongoose.Schema({
		_id: Number,
		num_acquisitions: Number,
		num_investments: Number,
		name: String,
		image: String,
		description_short: String,
		location: Array,
		categories: Array,
		founded_date: Date,
		founders: Array,
		operating_status: String,
		funding_status: String,
		last_funding_type: String,
		num_employees: Number,
		stock_symbol: String,
		web_url: String,
		facebook_url: String,
		twitter_url: String,
		linkedIn_url: String,
		email: String,
		phone: String,
		description_long: String
	});

	const Org = mongoose.model('Org', orgSchema);

	fs.readFile(path.join(__dirname, 'sampleCrunchlyData.json'), (err, data) => {
		let orgs = [];

		data = JSON.parse(data.toString());
		data.slice(0, data.length).forEach((company, index) => {
			db.orgs.insertOne(
				{//map fields to the data here;
					_id: index,
					num_acquisitions: dbHelpers.numberGenerator(),
					num_investments: dbHelpers.numberGenerator(),
					name: data.items.properties.name,
					image: data.items.properties.profile_image_url,
					description_short: data.items.properties.short_description,
					location: [data.items.properties.city_name, data.items.properties.region_name, data.items.properties.country_code]
					categories: dbHelpers.categoryGenerator() ,
					founded_date: ,
					founders: dbHelpers.foundersArrayGenerator(),
					operating_status: ,
					funding_status: ,
					last_funding_type: ,
					num_employees: ,
					stock_symbol: ,
					web_url: ,
					facebook_url: ,
					twitter_url: ,
					linkedIn_url: ,
					email: ,
					phone: ,
					description_long: 
				}
			)
			const organization = new Org(company);
			orgs.push(organization);
		});

	//syntax is mongooseModel.create(dataArray, errCallback)
		Org.create(orgs, (err) => {
			console.log('\ndone');
			mongoose.disconnect();
			process.exit();
		});
	});
});

module.exports.Model = Org;
module.exports.schema = orgSchema;


