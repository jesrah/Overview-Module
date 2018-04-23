const fs = require('fs');
const faker = require('faker');
const dbHelpers = require('./dbHelpers.js');

const results = [];
faker.locale = 'en_US';

//learn how to properly use fs.readFile here
//to seed with data from the fake json
for (var i = 0; i < 100; i++) {
	faker.seed(i);
	const fakeName = faker.company.companyName();
	const fakeNameString = fakeName.replace(/\s|,+/g,'');
	const org = {};
	org.id = i;
	org.num_acquisitions = dbHelpers.numberGenerator();
	org.num_investments = dbHelpers.numberGenerator();
	org.name = fakeName;
	org.image = faker.image.business();
	org.description_short = faker.company.catchPhrase();
	org.location = [faker.address.city(1), faker.address.county(), faker.address.country()];
	org.categories = dbHelpers.categoryGenerator();
	org.founded_date = faker.date.past(40);
	org.founders = dbHelpers.foundersArrayGenerator();
	org.operating_status = faker.company.bsBuzz();
	org.funding_status = faker.company.bsBuzz();
	org.last_funding_type = faker.company.bsBuzz();
	org.num_employees = dbHelpers.numberGenerator();
	org.stock_symbol = faker.image.abstract();
	org.web_url = `https://fakecompany.com/${fakeNameString}`;
	org.facebook_url = `https://facebook.com/${fakeNameString}`,
	org.twitter_url = `https://twitter.com/${fakeNameString}`,
	org.linkedIn_url = `https://linkedin.com/${fakeNameString}`,
	org.email = `${fakeNameString}@${fakeNameString}company.org`,
	org.phone = faker.phone.phoneNumberFormat(2),
	org.description_long = faker.lorem.paragraphs();
	results.push(org);
}

fs.writeFile('./data.json', JSON.stringify(results));