"use strict";
// logbook====1
// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showName();

// logbook====2
// const bookShelf = {
//     authors: ["Бернард Корнуелл", "Роберт Шеклі"],
//     getAuthors() {
//         return this.authors;
//     },
//     addAuthor(authorName) {
//         this.authors.push(authorName);
//     },
// };

// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
// bookShelf.addAuthor("Ли Танит");
// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]

// logbook====3
// function foo() {
//   console.log(this);
// }

// foo();

// logbook====4
// function showThis() {
//     console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // this in showThis: Window

// const user = {
//     username: "Mango",
// };

// // Записуємо посилання на функцію у властивість об'єкта
// // Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;

// // Викликаємо функцію в контексті об'єкта
// // this буде вказувати на поточний об'єкт, в контексті
// // якого здійснюється виклик, а не на глобальний об'єкт.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}


// logbook====5
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Буде помилка у виклику функції


// logbook====6
// const showThis = () => {
//     console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

// const user = {
//     username: "Mango",
// };
// user.showContext = showThis;

// user.showContext(); // this in showThis: window


// logbook====7
// const hotel = {
//     username: "Resort hotel",
//     showThis() {
//         const foo = () => {
//         // Стрілки запам'ятовують контекст під час оголошення
//         // з батьківської області видимості
//         console.log("this in foo: ", this);
//         };

//         foo();
//         console.log("this in showThis: ", this);
//     },
// };

// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}


// logbook====8
// function greet(clientName) {
//     return console.log(`${clientName}, ласкаво просимо в «${this.service}».`);
// }

// const steam = {
//     service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter("Манго"); // "Манго, ласкаво просимо в «Steam»."

// const gmail = {
//     service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter("Полі"); // "Полі, ласкаво просимо в «Gmail»."


// logbook====9
// const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//     console.log(`Обробляємо заявку від ${callback()}.`);
// }

// // makeMessage(customer.getFullName); // Виникне помилка на момент виклику функції
// makeMessage(customer.getFullName.bind(customer)); // Обробляємо заявку від Jacob Mercer.

// ========= ======= === WOME WORK - 1
// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],

//     checkPizza(pizzaName) {
//         return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//         const isPizzaAvailable = this.checkPizza(pizzaName);

//         if (!isPizzaAvailable) {
//         return console.log(`Sorry, there is no pizza named «${pizzaName}»`);
//         }

//         return console.log(`Order accepted, preparing «${pizzaName}» pizza`);
//     },
// };

// pizzaPalace.order("Smoked")//"Order accepted, preparing «Smoked» pizza"
// pizzaPalace.order("Four meats")//"Order accepted, preparing «Four meats» pizza"
// pizzaPalace.order("Big Mike")//"Sorry, there is no pizza named «Big Mike»"
// pizzaPalace.order("Viennese")//"Sorry, there is no pizza named «Viennese»"


// ========= ======= === WOME WORK - 2
// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
    
//     getBalance() {
//         return this.balance;
//     },
//     getDiscount() {
//         return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost - cost * this.discount;
//         this.orders.push(order);
//     },
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// ========= ======= === WOME WORK - 3
// const historyService = {
//     orders: [
//         { email: "jacob@hotmail.com", dish: "Burrito" },
//         { email: "solomon@topmail.net", dish: "Burger" },
//         { email: "artemis@coldmail.net", dish: "Pizza" },
//         { email: "solomon@topmail.net", dish: "Apple pie" },
//         { email: "jacob@hotmail.com", dish: "Taco" },
//     ],

//     getOrdersLog() {
//         return this.orders
//         .map(order => `email: ${order.email} dish: ${order.dish}`)
//         .join(" - ");
//     },
//     getEmails() {
//         const emails = this.orders.map(order => order.email);
//         const uniqueEmails = new Set(emails);
//         return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//         return this.orders.filter(order => order.email === email);
//     },
// };

// console.log(historyService.getOrdersLog())// рядок з переліком даних всіх замовлень з властивості orders
// console.log(historyService.getEmails())// масив всіх унікальних поштових адрес з властивості orders
// console.log(historyService.getOrdersByEmail("solomon@topmail.net")) // [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net")) // [{ email: "artemis@coldmail.net", dish: "Pizza" }]


// ========= ======= === WOME WORK - 4
// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
// };

// const child = Object.create(parent);

// child.name = "Jason";
// child.age = 27;


// ========= ======= === WOME WORK - 5
// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
// };


// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;


// ========= ======= === WOME WORK - 7
// class Car {
//     constructor(brand, model, price){
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
// }

// console.log(new Car("Audi", "Q3", 36000)) // { brand: "Audi", model: "Q3", price: 36000 }
// console.log(new Car("BMW", "X5", 58900)) // { brand: "BMW", model: "X5", price: 58900 }
// console.log(new Car("Nissan","Murano", 31700)) // { brand: "Nissan", model: "Murano", price: 31700 }


// ========= ======= === WOME WORK - 9
// class Car {
//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     getPrice(){
//         return this.price;
//     }

//     changePrice(newPrice){
//         this.price = newPrice;
//     }
// }


// ========= ======= === WOME WORK - 10
// class Storage {
//     constructor(items) {
//         this.items = items;
//     }

//     getItems(){
//         return this.items;
//     }

//     addItem(newItem){
//         this.items.push(newItem); //1 метод
        // this.items = [...this.items, newItem]; //2 метод
//     }

//     removeItem(itemToRemove){
//         const idx = this.items.indexOf(itemToRemove);
//         this.items.splice(idx, 1)
//     }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// ========= ======= === WOME WORK - 11




