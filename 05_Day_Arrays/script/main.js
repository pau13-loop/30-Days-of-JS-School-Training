var countriesList = require('../data/countries');
// console.log(countriesList)
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')

/**
 * TODO
 * Reproduce the exercises in the README.md with the data in the file named countries.js saved in the directory "data"
 */

// Create an array and print it
const arr = [];
console.log(arr);


// Print array and it's length
console.log('Array countries: ', countriesList);
console.log('Length list: ', countriesList.length);

// Create an array of a string, each character will be saved in the array like an string
let name = "30 Days of JavaScript";
let nameArray = name.split('');
console.log("Each character of string in array", nameArray);

// Same as before but saving each value that is separated by an space
let nameArrayBySpaces = name.split(' ');
console.log('Separate string by spaces', nameArrayBySpaces);

// Methods to manipulate an array
const arrEmptyValues = Array(10);
console.log('Array of empty values: ', arrEmptyValues); // --> [ <10 empty items> ]

// Fill the empty values or create a new array, define it's length and fill with a default value
arrEmptyValues.fill('from 1 to 10');
console.log('Filled array: ', arrEmptyValues);

const arrWithDefaultLengthValues = Array(5).fill('1-5');
console.log('Array with default length and values: ', arrWithDefaultLengthValues);

// EXERCISES MODULE 05-Day-Arrays

// 1.- Declare an empty array
console.log('1.-');
var array = [];
console.log('1.- Array: ', array)

// 2.- Declare an array with more than 5 number of elements 
console.log('2.-');
var arrayWithFiveElements = Array(6).fill('+5 elements');
console.log('2.- Array with + 5 elements: ', arrayWithFiveElements);

// 3.- Find the length of your array
console.log('3.-');
console.log('Length array: ', arrayWithFiveElements.length);

// 4.- Get the first item, the middle item and the last item of the array
console.log('4.-');
var arrayElements = ['Front', 'context', 'context', 'middle1', 'middle2', 'context', 'context', 'back'];
console.log('First element: ', arrayElements[0]);
console.log('Middle element: ', arrayElements[Math.floor(arrayElements.length / 2)]);
console.log('Last element: ', arrayElements[arrayElements.length - 1]);

// 5.- Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
console.log('5.-');
var mixedDataTypes = [1, 2, 'a', 'b', 1.5, 2.5, false, true, null, undefined];
console.log('Length array mixedDataTypes: ', mixedDataTypes.length);

// 6.- Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
console.log('6.-')
var itCommpanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7.- Print the array using console.log()
console.log('7.-');
console.log('Print array itCompanies: ', itCommpanies);

// 8.- Print the number of companies in the array
console.log('8.-');
console.log('Number of companies in array: ', itCommpanies.length);

// 9.- Print the first company, middle and last company
console.log('10.-');
console.log('First company: ', itCommpanies[0]);
console.log('Middle company: ', itCommpanies[Math.floor(itCommpanies.length / 2)]);
console.log('Last company: ', itCommpanies[itCommpanies.length - 1]);

// 10.- Print out each company
console.log('10.-');
console.log(itCommpanies.forEach(company => console.log(company)));

// 11.- Change each company name to uppercase one by one and print them out
console.log('11.-');
var sentenceCompanies = itCommpanies.join();

console.log('Sentence as expected: ', sentenceCompanies);