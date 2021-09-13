const sum = (...args) => {
	return args.reduce((acc, curr) => {
		acc += curr;
		return acc;
	}, 0);
};

const vowelize = (arr) => {
	let vowelRegex = /[aeiou]/gi;

	return arr
		.map((word) => {
			if (!word.match(vowelRegex)) return '';
			return word.replace(/[^aeiou]/gi, '');
		})
		.filter((el) => el !== '');
};
const combineAndSort = (...args) => {
	return args.flat().sort();
};
const anagramTester = (a, b) => {
	// console.log('string');
	const firstWordLetterCount = a
		.toLowerCase()
		.split('')
		.sort()
		.reduce((acc, curr) => {
			if (!acc[curr]) acc[curr] = 1;
			else acc[curr]++;
			return acc;
		}, {});
	const secondWordLetterCount = b
		.toLowerCase()
		.split('')
		.sort()
		.reduce((acc, curr) => {
			if (!acc[curr]) acc[curr] = 1;
			else acc[curr]++;
			return acc;
		}, {});
	const stringA = JSON.stringify(firstWordLetterCount);

	const stringB = JSON.stringify(secondWordLetterCount);

	return stringA === stringB;
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
