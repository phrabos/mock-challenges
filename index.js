const sum = (...args) => {
	let result = 0;
	for (let num of args) result += num;
	return result;
};

const vowelize = (arr) => {
	let vowelRegex = /[aeiou]/gi;

  	return arr.map(word => {
	    if(!word.match(vowelRegex)) return ''
	    return word.replace(/[^aeiou]/gi, '')
	    }).filter(el => el !== '')
};
const combineAndSort = (...args) => {
	return args.flat().sort()
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
