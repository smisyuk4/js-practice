"use strict";
// обєкти, операції rest та spread.
// ========= #1
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// console.log(apartment);


// ========= #2
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// console.log(apartment);


// ========= #3
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);


// ========= #4
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[numberOfTags - 1];

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);


// ========= #5
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);


// ========= #6
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// console.log(apartment);

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment);


// ========= #7
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//         name: "Henry Sibola",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// console.log(apartment);

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// }

// console.log(apartment);


// ========= #8
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//     name,
//     price,
//     image,
//     tags,
// };

// console.log(product);


// ========= #9
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",
// };

// console.log(credentials);


// ========= #10
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment){
//     keys.push(key);
//     values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);


// гарний відос про об'єкт та протототип
// https://www.youtube.com/watch?v=zWjT_2hFkMw
// ========= #11
// const keys = [];
// const values = [];
// const advert = {
//     service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)){
//         keys.push(key);
//         values.push(apartment[key]);
//     }
// }

// console.log(keys);
// console.log(values);


// ========= #12
// function countProps(object) {
//     let propCount = 0;
//     for (const key in object){
//         if(object.hasOwnProperty(key)){
//         propCount += 1;
//         }
//     }
//     return console.log(propCount);
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });


// ========= #13
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys){
//     values.push(apartment[key]);
// }

// console.log(values);


// ========= #14
// function countProps(object) {
//     let propCount = 0;
//     const keys = Object.keys(object);
    
//     for (const key of keys) {
//         propCount += 1;
//     }

//     return console.log(propCount);
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });


// ========= #15
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);


// ========= #16
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const values = Object.values(salaries);

//     for (const value of values){
//         totalSalary += value;
//         }
        
//     return console.log(totalSalary);
// }

// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });


// ========= #17
// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors){
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);


// ========= #18
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     for (const key of products){
//         if(key.name === productName){
//         return console.log(key.price);
//         }
//     }

//     return console.log(null);
// }

// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Engine");


// ========= #19
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     let valuesArr = [];
    
//     for (const product of products) {
    //  if (propName in product){ - аналогичное условие ниже
//         if (product.hasOwnProperty(propName)){
//             valuesArr.push(product[propName]);
//         }
//     }

//     return console.log(valuesArr);
// }

// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");


// ========= #20
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     let sum = 0;

//     for (const product of products) {
//         if (product.name === productName){
//             sum = product.price * product.quantity;
//         }
//     }

//     return console.log(sum);
// }


// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");


// ========= #21
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };

// const {
//     yesterday,
//     today,
//     tomorrow,
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);



// ========= #22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);


// ========= #23
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };

// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(meanTemperature);


// ========= #24
// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const {hex, rgb} of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);


// ========= #25
// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };

// const {
//     today: {
//         low: lowToday,
//         high: highToday,
//         icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//     },
//     tomorrow: {
//         low: lowTomorrow,
//         high: highTomorrow,
//         icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//     },
// } = forecast;

// console.log(lowToday);
// console.log(highToday);
// console.log(todayIcon);
// console.log(lowTomorrow);
// console.log(highTomorrow);
// console.log(tomorrowIcon);


// ========= #26
// function calculateMeanTemperature(forecast) {
//     const {
//         today:{
//             low: todayLow,
//             high: todayHigh,
//         },
//         tomorrow: {
//             low: tomorrowLow,
//             high: tomorrowHigh,
//         }
//     } = forecast;
    
//     return console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
// }

// calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } });
// calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } });


// ========= #27
// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(... scores);
// const worstScore = Math.min(... scores);

// console.log(bestScore);
// console.log(worstScore);


// ========= #28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);


// ========= #29
// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
// };
// const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
// };

// const finalSettings = {...defaultSettings, ...overrideSettings};

// console.log(finalSettings);


// ========= #30
// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
    
//     const newData = {
//         category,
//         priority,
//         completed,
//     }

//     return console.log({...newData, ...data});
// }

// makeTask({});
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// makeTask({ category: "Finance", text: "Take interest" });
// makeTask({ priority: "Low", text: "Choose shampoo" });
// makeTask({ text: "Buy bread" });


// ========= #31
// function add(...args) {
//     let sum = 0;
//     for (const item of args){
//         sum += item;
//     }
    
//     return console.log(sum);
// }

// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36);


// ========= #32
// function addOverNum(...args) {
//     let total = 0;
//     const num = args[0];

//     for (const arg of args) {
//         if (num < arg){
//         total += arg;
//         }
//     }

//     return console.log(total);
// }

// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);


// ========= #33
// function findMatches(arr, ...args) {
//     const matches = [];

//     for (const arg of args){
//         if (arr.includes(arg)){
//             matches.push(arg);
//         }
//     }

//     return console.log(matches);
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);


// ========= #34
// const bookShelf = {
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//         return console.log("Returning all books");
//     },
//     addBook(bookName) {
//         return console.log(`Adding book ${bookName}`);
//     },
//     removeBook(bookName){
//         return console.log(`Deleting book ${bookName}`);
//     },
//     updateBook(oldName, newName){
//         return console.log(`Updating book ${oldName} to ${newName}`);
//     }
// };

// bookShelf.getBooks();
// bookShelf.addBook("Haze");
// bookShelf.removeBook("Red sunset");
// bookShelf.updateBook("Sands of dune", "Dune");


// ========= #35
// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
    
//     updateBook(oldName, newName) {
//         const index = this.books.indexOf(oldName);
        
//         this.books.splice(index, 1, newName);
//     },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// bookShelf.updateBook("The last kingdom", "Dune");


// console.log(bookShelf.books);


// ========= #37
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     getPotions(){
//         return console.log(this.potions);
//     },
// };

// atTheOldToad.getPotions();


// ========= #38
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//         this.potions.push(potionName);
//     },
// };

// atTheOldToad.addPotion("Invisibility");
// atTheOldToad.addPotion("Power potion");

// console.log(atTheOldToad.potions);


// ========= #39
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//         const index = this.potions.indexOf(potionName);

//         this.potions.splice(index, 1)
//     },
// };

// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Speed potion");

// console.log(atTheOldToad.potions);


// ========= #40
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//         const index = this.potions.indexOf(oldName);

//         this.potions.splice(index, 1, newName);
//     },
// };


// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");

// console.log(atTheOldToad.potions);


// ========= #41
// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],

//     getPotions() {
//         return console.log(this.potions);
//     },

//     addPotion(newPotion) {
//         for (const potion of this.potions){
//             if (potion.name === (newPotion.name)) {
//             return console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
//             }
//         }

//         this.potions.push(newPotion);
//     },

//     removePotion(potionName) {
//         for (let i = 0; i < this.potions.length; i += 1){
//             const potion = this.potions[i];

//             if (potion.name === potionName) {
//                 return this.potions.splice(i, 1);
//             }
//         }

//         return console.log(`Potion ${potionName} is not in inventory!`);
//     },

//     updatePotionName(oldName, newName) {
//         for (let i = 0; i < this.potions.length; i += 1){
//             const potion = this.potions[i];

//             if (potion.name === oldName) {

//                 return potion.name = newName;
//             }
//         }

//         return console.log(`Potion ${oldName} is not in inventory!`);
//     },
// };

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });

// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Speed potion");

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// atTheOldToad.getPotions();


//==================================================
//==================================================
// const book = [10, 20, 30, 50];

// function addItem (book, ...item) {
//     return console.log([...book, ...item]);
// }

// addItem(book, 'green', 3.14, 'five');

//==================================================
//==================================================

// const book = {
//     name: 'Sproot',
//     countPages: 200,
//     author: 'Liam Nisson',
//     yearPrint: 1855,
//     category: [
//         'fantastic', 'detective', 'triller'
//     ],

//     showProp() {
//         console.log(this);
//     },

//     addProp(prop) {    
//         const keys = Object.keys(prop);
//         const vals = Object.values(prop);

//         for (let i = 0; i < keys.length; i += 1) {
//             this[keys[i]] = vals[i];
//         }
//     },

//     removeProp(nameProp) {
//         delete book[nameProp];
//     },
// }

// book.addProp({ color: 'red', size: '210mm * 297mm' });
// console.log(book);

// book.removeProp('author');
// console.log(book);

//==================================================
//==================================================

// const shop = {
//     cart: [
//         { id: '1555448551445', name: 'bread', count: 5 },
//         { id: '1557575751445', name: 'water', count: 500 },
//     ],

//     addItemToCart(...item) {    
//         this.cart = [
//             ...this.cart,
//             ...item,
//         ]
//     },

//     removeItemFromCart(nameItem) {
//         for (let i = 0; i < this.cart.length; i += 1) {
//             const vals = Object.values(this.cart[i]);

//             if (vals.includes(nameItem)) {
//                 this.cart.splice(i, 1)    
//                 break;
//             }
            
//         }
//     },
// }

// const item2 = { id: '56621155525899', name: 'onion', count: 10 }
// const item3 = { id: '55588969933114', name: 'pepper', count: 3 }
// shop.addItemToCart(item2, item3);
// console.log(shop.cart);

// shop.removeItemFromCart('onion');
// console.log(shop.cart);

//==================================================
//==================================================





