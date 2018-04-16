const mongoose = require('mongoose');
const fs = require('fs');
var url = 'mongodb://localhost/crunchlyview';
var db;

var objectId = mongoose.Schema.Types.ObjectId;
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {});

function numberGenerator () {
	//returns random number between 1 and 99
	let set1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let index = set1[Math.floor(Math.random() * Math.floor(set1.length))];
	var num = index * Math.floor(Math.random() * Math.floor(10));
	return num;
}

function foundersArrayGenerator () {
	let founders = [];
	let firstName = ['Akhtam', 'Andy', 'Anthony', 'Belinda', 'Dima', 'Jessica', 'David', 'Mike', 'Louis', 'Noah', 'Oliver', 'Pooja', 'Raymond', 'Robin', 'Zach', 'Rosalind', 'Shiyao', 'Steve', 'Steven', 'Tom', 'Yogita', 'Frog', 'Rongsiu'];
	let lastName = ['Ismatov', 'Tsang', 'Tam', 'Mo', 'Marchenko', 'Rahman', 'Park', 'Dimitras', 'Mun', 'Kirschbaum', 'Han', 'Kodavanti', 'Cabrera', 'Markowitz', 'Hill', 'Thai', 'Li', 'Purn', 'Chiang', 'Richards', 'Geshury', 'Sheth', 'Ling', 'Lim'];
	let index = function(arr) {
		return arr[Math.floor(Math.random() * Math.floor(arr.length))];
	}
	
	for (var i = 0; i < Math.ceil(Math.random() * 3); i++) {
		let founder = `${index(firstName)} ${index(lastName)}`
		founders.push(founder);
	}
	return founders; {}
}

let orgSchema = mongoose.Schema({
	org_id: {type: String, index: true, unique: true},
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
})

const Org = mongoose.model('Org', orgSchema);

let save = (orgs, callback) => {
	orgs.forEach(function(org, index) {
		var organization = new Org ({
			//map fields to the data here;
			org_id: {type: String, index: true, unique: true},
			num_acquisitions: numberGenerator(),
			num_investments: numberGenerator(),
			name: ,
			image: ,
			description_short: ,
			location: ,
			categories: ,
			founded_date: ,
			foundßers: ,
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

		})
		
	})

	organization.save((err, data) => {
		if (err) {
			console.log('error:', err);
			return;
		} console.log('organization saved')
	})
	callback();
	db.orgs.insert(organization)

module.exports = Org;