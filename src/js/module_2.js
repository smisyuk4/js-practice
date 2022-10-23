"use strict";
// массиви та функції
// ========= #1
// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return console.log("You are an adult");
//   }
//   return console.log("You are a minor");
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);


// ========= #2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return console.log("Welcome!");
//   }
//   return console.log("Access denied, wrong password!");
// }

// checkPassword("mangohackzor");
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");


// ========= #3
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return console.log("Your order is empty!");
//   }
  
//   if (ordered > available) {
//     return console.log("Your order is too large, not enough goods in stock!");
//   }

//   return console.log("The order is accepted, our manager will contact you");
// }

// checkStorage(100, 50);
// checkStorage(100, 50);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);



// ========= #5
// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);


// ========= #6
// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);

// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);


// ========= #8
// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length-1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElement);


// ========= #9
// function getExtremeElements(array) {
//   const firstElementArray = array[0];
//   const lastElementArray = array[array.length-1];
    
//   return console.log([firstElementArray, lastElementArray]);
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);


// ========= #10
// function splitMessage(message, delimeter) {
//   let words;
//   words = message.split(delimeter);

//   return console.log(words);
// }

// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_");


// ========= #11
// function calculateEngravingPrice(message, pricePerWord) {
//   const arrMessage = message.split(' ');

//   return console.log(arrMessage.length * pricePerWord);
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);


// ========= #12
// function makeStringFromArray(array, delimeter) {
//   let string;
//   string = array.join(delimeter);

//   return console.log(string);
// }

// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_");


// ========= #13
// function slugify(title) {
//   const arrTitle = title.toLowerCase().split(' ');
    
//   return console.log(arrTitle.join('-'));
// }

// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");


// ========= #14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


// ========= #15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);


// ========= #16
// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);

//   if (newArray.length > maxLength){
//     return console.log(newArray.slice(0, maxLength));
//   }
  
//   return console.log(newArray);
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);


// ========= #18
// function calculateTotal(number) {
//   let sum = 0;
  
//   for (let i = 0; i <= number; i += 1){
//     sum += i;
//   }
  
//   return console.log(sum);
// }

// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);


// ========= #19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }


// ========= #20
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1){
//     total += order[i];
//   }

//   return console.log(total);
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);


// ========= #21
// function findLongestWord(string) {
//   const arrWords = string.split(' ');
//   let longWord = arrWords[0];

//   for (let i=0; i < arrWords.length; i+=1){
//     if (longWord.length < arrWords[i].length ){
//       longWord = arrWords[i];
//     }
//   }
  
//   return console.log(longWord);
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");


// ========= #22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   const sizeArr = max - min + 1;

//   for (let i=0; i < sizeArr; i += 1){
//     numbers.push(min + i);
//   }

//   return console.log(numbers);
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);


// ========= #23
// function filterArray(numbers, value) {
//   let newArr = [];

//   for (let i=0; i < numbers.length; i +=1){
    
//     if(numbers[i] > value){
//       newArr.push(numbers[i]);
//     }
//   }

//   return console.log(newArr);
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);


// ========= #24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return console.log(fruits.includes(fruit));
// }

// checkFruit("plum");
// checkFruit("mandarin");
// checkFruit("pear");
// checkFruit("Pear");
// checkFruit("apple");


// ========= #25
// function getCommonElements(array1, array2) {
//   let newArr = [];

//   const sizeArr = array1.length;
    
//   for (let i=0; i < sizeArr; i += 1){
//     if(array2.includes(array1[i])){
//       newArr.push(array1[i])
//     }
//   }

//   return console.log(newArr);
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);


// ========= #26
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const item of order) {
//     total += item;
//   }

//   return console.log(total);
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);


// ========= #27
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers ) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return console.log(filteredNumbers);
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);


// ========= #28
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a, b, c, d, e);


// ========= #29
// function getEvenNumbers(start, end) {
//   let arrNumbers = [];
//   const sizeArr = end - start + 1;

//   for (let i = 0; i < sizeArr; i += 1){
//     if ((start + i ) % 2 === 0){
//       arrNumbers.push(start + i);
//     }
//   }
  
//   return console.log(arrNumbers);
// }

// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);


// ========= #30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);


// ========= #31
// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return console.log(i);
//     }
//   }
// }


// findNumber(2, 6, 5);
// findNumber(8, 17, 3);
// findNumber(6, 9, 4);
// findNumber(16, 35, 7);


// ========= #32
// function includes(array, value) {
//   for (let i = 0; i < array.length; i += 1){
//     if (array[i] === value){
//       return console.log(true);
//     }   
//   }
  
//   return console.log(false);
// }

// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi");