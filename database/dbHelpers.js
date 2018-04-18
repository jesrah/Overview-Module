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
		let founder = `${index(firstName)} ${index(lastName)}`;
		if (founders.indexof(founder) === -1) founders.push(founder);
	}
	return founders; 
}

function categoryGenerator () {
	let categories = [];
	let possibilities = ['Design', 'Hardware', 'Commerce and Shopping', 'Education', 'Sports', 'Food and Beverage', 'Advertising', 'Sales and Marketing', 'Software',' Media and Entertainment', 'Manufacturing', 'Information Technology', 'Privacy and Security', 'Events', 'Music and Audio', 'Healthcare', 'Science and Engineering', 'Data and Analytics', 'Hardware', 'Internet Services', 'Content and Publishing', 'Design', 'Real Estate', 'Consumer Goods', 'Administrative Service', 'Automotive', 'Innovation Management', 'Electronics', 'Internet', 'Mobile', 'Consumer Electronics', 'Cats'];
	let index = function(arr) {
		return arr[Math.floor(Math.random() * Math.floor(arr.length))];
	}
	
	for (var i = 0; i < Math.ceil(Math.random() * 3); i++) {
		let category = `${index(possibilities)}`;
		if (categories.indexOf(category) === -1) categories.push(category);
	}
	return categories; 
}

module.exports.numberGenerator = numberGenerator;
module.exports.foundersArrayGenerator = foundersArrayGenerator;
module.exports.categoryGenerator = categoryGenerator;
