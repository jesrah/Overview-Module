const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/crunchlyview');

let db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {}
// //connected
// );

const orgSchema = mongoose.Schema({
		id: {type: Number, require: true, unique: true},
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

const Orgs = mongoose.model('Orgs', orgSchema);

module.exports.Orgs = Orgs;
module.exports.db = db;