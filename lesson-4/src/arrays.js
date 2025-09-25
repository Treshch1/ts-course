// Join method
const wordsArray = ['Join', 'these', 'words', 'with', 'spaces'];
const joinedString = wordsArray.join(' ');
console.log(joinedString);

// Concat method
const stringsArray = ['Hello', 'World'];
const concatString = stringsArray.concat('!');
console.log(concatString);


// Map method
const numbersArray = [1, 2, 3, 4, 5];
const multipliedNumbers = numbersArray.map((num) => num ** 2);
console.log(multipliedNumbers);

// Reduce method
const booleanArray = [true, false, true, true, false];
const trueFalseWinner = booleanArray.reduce((count, value) => count + (value ? 1 : -1), 0);
console.log(trueFalseWinner > 0 ? 'true' : 'false');

// Sort method
const unsortedArray = [5, 3, 8, 1, 4];
const sortedArray = unsortedArray.sort((a, b) => a - b);
console.log(sortedArray);

// [...arr1, ...arr2] syntax
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

// Map method
const randomArray = [10, "Sting", true, 42, "Another String"];
const typesArray = randomArray.map((item) => typeof item);
console.log(typesArray);
