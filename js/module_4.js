"use strict";
// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Mango", greet);


// ========= #2
// function deliverPizza(pizzaName) {
//   return console.log(`Delivering ${pizzaName} pizza.`);
// }

// function makePizza(pizzaName) {
//   return console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// makeMessage("Royal Grand", makePizza); //"Pizza Royal Grand is being prepared, please wait..."
// makeMessage("Ultracheese", deliverPizza); //"Delivering Ultracheese pizza."


// ========= #3
// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}.`);
// });


// ========= #4
// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError) {
//         if (!this.pizzas.includes(pizzaName)){
//             return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//         }
//             return makePizza(pizzaName) ;
//     },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//     return console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`);
// }

// // Callback for onError
// function onOrderError(error) {
//     return console.log(`Error! ${error}`);
// }

// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);


// ========= #5
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     orderedItems.forEach((function (number, index) {
//         totalPrice += number;
//     }));

//     return console.log(totalPrice);
// }

// calculateTotalPrice([12, 85, 37, 4]); //138
// calculateTotalPrice([164, 48, 291]); //503
// calculateTotalPrice([412, 371, 94, 63, 176]); //1116


// ========= #6
// function filterArray(numbers, value) {
//     let filteredNumbers = [];

//     numbers.forEach(function (element, index) {
//         if (element > value) {
//             // filteredNumbers.push(element); //#1 вариант
//             filteredNumbers = [...filteredNumbers, element]; //#2 вариант
//         }
//     });
    
//     return console.log(filteredNumbers);
// }

// filterArray([1, 2, 3, 4, 5], 3)//[4, 5]
// filterArray([1, 2, 3, 4, 5], 4)//[5]
// filterArray([1, 2, 3, 4, 5], 5)//[]
// filterArray([12, 24, 8, 41, 76], 38)//[41, 76]
// filterArray([12, 24, 8, 41, 76], 20)//[24, 41, 76]


// ========= #7
// function getCommonElements(firstArray, secondArray) {
//     let commonElements = [];

//     firstArray.forEach(function (element, index) {
//         if (secondArray.includes(element)) {
//             // commonElements.push(element); //#1 вариант
//             commonElements = [...commonElements, element]; //#2 вариант
//         }
//     });

//     return console.log(commonElements);
// }

// getCommonElements([1, 2, 3], [2, 4])//[2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19])//[1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])//[12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])//[10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30])//[]


// ========= #8
// const calculateTotalPrice = (quantity, pricePerItem) =>{
//   return console.log(quantity * pricePerItem);
// }

// calculateTotalPrice(5, 100)//500
// calculateTotalPrice(8, 60)//480
// calculateTotalPrice(3, 400)//1200


// ========= #9
// const calculateTotalPrice = (quantity, pricePerItem) =>
//   console.log(quantity * pricePerItem);
// ;

// calculateTotalPrice(5, 100)//500
// calculateTotalPrice(8, 60)//480
// calculateTotalPrice(3, 400)//1200


// ========= #10
// const calculateTotalPrice = orderedItems => {
//         let totalPrice = 0;
//         orderedItems.forEach((item)=>{totalPrice += item});
//         return console.log(totalPrice);
// }

// calculateTotalPrice([12, 85, 37, 4])// 138
// calculateTotalPrice([164, 48, 291])// 503
// calculateTotalPrice([412, 371, 94, 63, 176])// 1116


// ========= #11
// const filterArray =(numbers, value) => {
//     let filteredNumbers = [];

//     numbers.forEach((number) => {
//         if (number > value) {
//             // filteredNumbers.push(number); //#1 вариант
//             filteredNumbers = [...filteredNumbers, number] //#2 вариант
//         }
//     });

//     return console.log(filteredNumbers);
// }

// filterArray([1, 2, 3, 4, 5], 3)// [4, 5]
// filterArray([1, 2, 3, 4, 5], 4)// [5]
// filterArray([1, 2, 3, 4, 5], 5)// []
// filterArray([12, 24, 8, 41, 76], 38)// [41, 76]
// filterArray([12, 24, 8, 41, 76], 20)// [24, 41, 76]


// ========= #12
// const getCommonElements = (firstArray, secondArray) => {
//     let commonElements = [];

//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element); //#1 вариант
//             // commonElements = [...commonElements, element]; //#2 вариант
//         }
//     });

//     return console.log(commonElements);
// }

// getCommonElements([1, 2, 3], [2, 4])// [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19])// [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])// [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])// [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30])// []


// ========= #13
// const changeEven = (numbers, value) => {
//     let newArr = [];

//     numbers.forEach((numbers) => {
//         if (numbers % 2 === 0) {
//             // newArr.push(numbers + value); //#1 вариант
//             newArr = [...newArr, numbers + value]; //#2 вариант
//         } else {
//             // newArr.push(numbers); //#1 вариант
//             newArr = [...newArr, numbers]; //#2 вариант
//         }
//     });
//     return console.log(newArr);
// }

// changeEven([1, 2, 3, 4, 5], 10)// [1, 12, 3, 14, 5]
// changeEven([2, 8, 3, 7, 4, 6], 10)// [12, 18, 3, 7, 14, 16]
// changeEven([17, 24, 68, 31, 42], 100)// [17, 124, 168, 31, 142]
// changeEven([44, 13, 81, 92, 36, 54], 100)// [144, 13, 81, 192, 136, 154]


// ========= #14