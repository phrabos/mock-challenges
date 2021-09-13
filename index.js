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

const updateAtPath = (obj, string, value) => {
	let path = string.split('.');
	for (let i = 0; i < path.length; i++) {
		if (i !== path.length - 1) {
			obj = obj[path[i]];
		} else obj[path[i]] = value;
	}
};

class Car {
	initialFuelLevel;
	fuelCapacity;
	constructor({ initialFuelLevel, fuelCapacity }) {
		(this.initialFuelLevel = initialFuelLevel),
			(this.fuelCapacity = fuelCapacity);
	}
	getFuelLevel() {
		return this.initialFuelLevel;
	}
	addFuel(num) {
		num + this.initialFuelLevel <= this.fuelCapacity
			? (this.initialFuelLevel += num)
			: (this.initialFuelLevel = this.fuelCapacity);
	}
}

const whatWouldYouLikeToCheckOut = async (libraryApi) => {
	const authors = await libraryApi.favoriteAuthors();
	const books = await Promise.all(
		authors.map((author) => libraryApi.booksAvailableBy(author))
	);
	const titles = [];
	for (t of books.flat()) {
		titles.push(t.title);
	}

	return titles;
};

const calc = (left) => {
	return function mid(middle) {
		return function r(right) {
			console.log(left, middle, right);
			return eval(`${left}${middle}${right}`);
		};
	};
};

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
