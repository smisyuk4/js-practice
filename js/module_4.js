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
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths); //[ 5, 4, 5, 7 ]


// ========= #15
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(book => book.title);
// console.log(titles); //["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]


// ========= #16
// const books = [
//     {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//     },
//     {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//     },
//     {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//     },
// ];

// const genres = books.flatMap(genr => genr.genres);
// console.log(genres); //[ "adventure", "history", "fiction", "horror", "mysticism" ]


// ========= #17
// const getUserNames = users => {
//     return users.map(user => user.name);
// };

// const usersInfo = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         skills: ["ipsum", "lorem"],
//         gender: "male",
//         age: 37,
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//         gender: "female",
//         age: 34,
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//         gender: "male",
//         age: 24,
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         skills: ["adipisicing", "irure", "velit"],
//         gender: "female",
//         age: 21,
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         skills: ["ex", "culpa", "nostrud"],
//         gender: "male",
//         age: 27,
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         skills: ["non", "amet", "ipsum"],
//         gender: "male",
//         age: 38,
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         skills: ["lorem", "veniam", "culpa"],
//         gender: "female",
//         age: 39,
//     },
// ];

// console.log(getUserNames(usersInfo));
// ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]


// ========= #18
// const getUserEmails = users => {
//     return users.map(user => user.email);
// };

// const usersInfo = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         skills: ["ipsum", "lorem"],
//         gender: "male",
//         age: 37,
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//         gender: "female",
//         age: 34,
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//         gender: "male",
//         age: 24,
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         skills: ["adipisicing", "irure", "velit"],
//         gender: "female",
//         age: 21,
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         skills: ["ex", "culpa", "nostrud"],
//         gender: "male",
//         age: 27,
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         skills: ["non", "amet", "ipsum"],
//         gender: "male",
//         age: 38,
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         skills: ["lorem", "veniam", "culpa"],
//         gender: "female",
//         age: 39,
//     },
// ];

// console.log(getUserEmails(usersInfo));
//["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]


// ========= #19
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers)//[24, 82, 36, 18, 52]
// console.log(oddNumbers)//[17, 61, 47, 73]


// ========= #20
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction", "mysticism"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism", "adventure"],
//     },
// ];

// const allGenres = books.flatMap(genr => genr.genres);
// const uniqueGenres = allGenres.filter((genr, index, array) => array.indexOf(genr) === index);

// console.log(allGenres)//["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// console.log(uniqueGenres)//["adventure", "history", "fiction", "mysticism", "horror"]


// ========= #21
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         rating: 7.94
//     },
//     {
//         title: "Enemy of God",
//         author: "Bernard Cornwell",
//         rating: 8.67
//     },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(({rating}) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({author}) => author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);


// ========= #22
// const getUsersWithEyeColor = (users, color) => {
//     return users.filter(({eyeColor}) => eyeColor === color);
// };

// const arr = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ];

// console.log(getUsersWithEyeColor(arr, "blue")); //Moore Hensley, Sharlene Bush і Carey Barr
// console.log(getUsersWithEyeColor(arr, "green")); //Ross Vazquez і Elma Head
// console.log(getUsersWithEyeColor(arr, "brown")); //Blackburn Dotson і Sheree Anthony


// ========= #23
// const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter(({age}) => age >= minAge && age <= maxAge);
// };

// const arr = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ];

// console.log(getUsersWithAge(arr, 20, 30)); //Ross Vazquez, Elma Head і Carey Barr
// console.log(getUsersWithAge(arr, 30, 40)); //Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
// console.log(getUsersWithAge(arr, 80, 100)); //[]


// ========= #24
// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(usr => usr.friends.includes(friendName));
// };

// const arr = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ];

// console.log(getUsersWithFriend(arr, "Briana Decker"));//Sharlene Bush і Sheree Anthony
// console.log(getUsersWithFriend(arr, "Goldie Gentry"));//Elma Head і Sheree Anthony
// console.log(getUsersWithFriend(arr, "Adrian Cross"));//[]


// ========= #25
// const getFriends = (users) => {
//     return users
//         .flatMap(user => user.friends)
//         .filter((usr, index, array) => array.indexOf(usr) === index);
// };

// const arr = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ];

// console.log(getFriends(arr)); //["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]


// ========= #26
// const getActiveUsers = (users) => {
//     return users.filter(user => user.isActive === true);
// };

// const arr = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ];

// console.log(getActiveUsers(arr)); //Sharlene Bush, Elma Head, Carey Barr і Sheree Anthony


// ========= #27
// const getInactiveUsers = (users) => {
//     return users.filter(({isActive}) => isActive === false);
// };

// const arr = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ];

// console.log(getInactiveUsers(arr));


// ========= #28
// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);


// ========= #29
// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email);
// };

// const arr = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ];

// console.log(getUserWithEmail(arr, "shereeanthony@kog.com"));// Sheree Anthony
// console.log(getUserWithEmail(arr, "blackburndotson@furnigeer.com"));// Blackburn Dotson
// console.log(getUserWithEmail(arr));//  undefined


// ========= #30