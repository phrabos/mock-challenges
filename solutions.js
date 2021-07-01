const sum = (...args) => {
  const sum = args.reduce((acc, item) => {
    return acc + item;
  }, 0) 
  return sum;
}

const vowelize = (arr) => {
  const regex = /[AEIOUaeiou]/
  const vowelArr = arr.map(word => {
    return word.split('').filter(letter => letter.match(regex)).join('');
  })
  const result = vowelArr.filter(word => word !== '');
  return result;
}
const combineAndSort = (...args) => {
  const flatArr = [...args].flat().sort();
  return flatArr;
}
const anagramTester = (a, b) => {
  const wordA = a.toLowerCase().split(' ').join('');
  const wordB = b.toLowerCase().split(' ').join('');
  const objA = {};
  const objB = {};

  for(const letter of wordA) {
      objA[letter] ? objA[letter] += 1 : objA[letter] = 1;
  }
  for(const letter of wordB) {
      objB[letter] ? objB[letter] += 1 : objB[letter] = 1;
  }
  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)
  if(keysA.length !== keysB.length) return false;
  for(let key of keysA){
    if(objA[key] !== objB[key]) return false;
  }
  return true;
}

const objectForEach = (obj, callback) => {
  for(const key in obj){
    callback(obj[key]);
  }
}

const updateAtPath = (obj, string, value) => {
  const keyArr = string.split('.');
  const firstKeys = keyArr.slice(0, keyArr.length - 1);
  const lastKey = keyArr.slice(keyArr.length - 1);
  const resultPath = firstKeys.reduce((acc, key) => {
    return acc[key];
  }, obj)
  resultPath[lastKey] = value;
}

class Car {
  constructor({initialFuelLevel, fuelCapacity}) {
    this.fuelLevel = initialFuelLevel;
    this.fuelCap = fuelCapacity;
  }
  getFuelLevel = () => {
    return this.fuelLevel;
  }
  addFuel = (fuel) => {
    this.fuelLevel += fuel;
    if(this.fuelLevel > this.fuelCap) this.fuelLevel = this.fuelCap;
  }
}

const whatWouldYouLikeToCheckOut = async (libraryApi) => {
  const books = [];
  const authors = await libraryApi['favoriteAuthors']();
  const results = await Promise.all(authors.map(author => libraryApi['booksAvailableBy'](author)));
  results.flat().forEach(book => {
    if(book.author) books.push(book.title);
  })
  return books;
} 

const calc = (left) => {
  return (operator) => {
    return (right) => {
      return eval(`${left}${operator}${right}`);
    }
  }
}

module.exports = {
  exampleFunction: function(message) { return message; },
  sum,
  vowelize,
  combineAndSort,
  anagramTester,
  objectForEach,
  updateAtPath,
  Car,
  whatWouldYouLikeToCheckOut,
  calc
}
