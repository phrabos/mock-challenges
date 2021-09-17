const sum = (...args) => {
	return args.reduce((acc, curr) => {
		return (acc += curr);
	}, 0);
};

const vowelize = (arr) => {
	let vowelRegex = /[aeiou]/gi;
};
const combineAndSort = (...args) => {
	return args.flat().sort();
};
const anagramTester = (a, b) => {
	const strA = a.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
	const strB = b.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

	return strA === strB;
};

const objectForEach = (obj, callback) => {
	const keys = Object.keys(obj);
	keys.forEach((key) => callback(obj[key]));
};

const updateAtPath = (obj, string, value) => {};

class Car {}

const whatWouldYouLikeToCheckOut = async (libraryApi) => {};

const calc = (left) => {};

module.exports = {
	exampleFunction: function (message) {
		return message;
	},
	sum,
	vowelize,
	combineAndSort,
	anagramTester,
	objectForEach,
	updateAtPath,
	Car,
	whatWouldYouLikeToCheckOut,
	calc,
};
