const sum = (...args) => {
	return args.reduce((acc, curr) => {
		acc += curr;
		return acc;
	}, 0);
};

const vowelize = (arr) => {
	const regex = /[aeiouAEIOU]/g;

	return arr.map((word) => word.replace(regex));
};
const combineAndSort = (...args) => {
	return args
		.reduce((acc, curr) => {
			return [...acc, ...curr];
		}, [])
		.sort();
};
const anagramTester = (a, b) => {};

const objectForEach = (obj, callback) => {};

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
