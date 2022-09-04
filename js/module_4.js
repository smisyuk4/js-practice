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