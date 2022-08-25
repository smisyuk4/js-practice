"use strict";
// ========= #1
// Ваша задача состоит в том, чтобы сделать две функции
// (maxи min, или maximumи и minimumт.д., в зависимости от языка),
// которые получают на вход список целых чисел и возвращают наибольшее
// и наименьшее число в этом списке соответственно.

// Примеры (ввод -> вывод)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Заметки
// Вы можете считать, что пустых массивов/векторов не будет.

//мой вариант
// let min = function(list){
//     let minNum = list[0];
//     for (const item of list){
//         if (minNum > item) {
//             minNum = item;
//         }
//     }

//     return console.log(minNum);
// }

// let max = function(list){
//     let maxNum = list[0];

//     for (const item of list) {
//         if (maxNum < item) {
//             maxNum = item;
//         }
//     }
//     return console.log(maxNum);
// }

//чужой вариант
// let min = function(list){
//     return console.log(Math.min(...list));
// }

// let max = function(list){
//     return console.log(Math.max(...list));
// }



// min([4, 6, 2, 1, 9, 63, -134, 566]);
// min([-52, 56, 30, 29, -54, 0, -110]);
// min([42, 54, 65, 87, 0]);
// min([5]);

// max([4, 6, 2, 1, 9, 63, -134, 566]);
// max([-52, 56, 30, 29, -54, 0, -110]);
// max([42, 54, 65, 87, 0]);
// max([5]);


// ========= #2
// Напишите функцию для преобразования имени в инициалы.
// Это ката строго состоит из двух слов с одним пробелом между ними.
// На выходе должны быть две заглавные буквы с точкой, разделяющей их.
// Это должно выглядеть так:
// Sam Harris => S.H
// patrick feeney => P.F

// function abbrevName(name){
//     const arrName = name.split(' ');
//     const firstLetter = arrName[0].slice(0, 1).toUpperCase();
//     const secLetter = arrName[1].slice(0, 1).toUpperCase();
    
//     return console.log(`${firstLetter}.${secLetter}`);
// }

// abbrevName("Sam Harris");
// abbrevName("Patrick Feenan");
// abbrevName("Evan Cole");
// abbrevName("P favuzzi");
// abbrevName("david Mendieta");


// ========= #3
// Сможете ли вы найти иголку в стоге сена?
// Напишите функцию findNeedle(), которая принимает массив, полный мусора, но содержащий одну «иглу».
// После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), в котором говорится:
// "найдена игла в положении " плюс индекс, в котором она нашла иглу.
// Пример:
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

// function findNeedle(haystack) {
//     const indexWord = haystack.indexOf('needle');

//     return console.log(`found the needle at position ${indexWord}`);
// }

// findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]);
// findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']);
// findNeedle([1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54]);


// ========= #4
// Учитывая непустой массив целых чисел,
// вернуть результат умножения значений вместе по порядку.
//     Пример:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function grow(x){
//     let resultMultiply = 1;
    
//     for (const num of x) {
//         resultMultiply *= num;
//     }

//     return console.log(resultMultiply);
// }


// grow([0, 2, 3]);
// grow([4, 1, 1, 1, 4]);
// grow([2, 2, 2, 2, 2, 2]);


// ========= #5
// Наша футбольная команда завершила чемпионат.
// Результат каждого совпадения выглядит как "x:y".
// Результаты всех матчей фиксируются в сборнике.
// Например: ["3:1", "2:2", "0:1", ...]
// Напишите функцию, которая берет такой набор и считает очки нашей команды в чемпионате.
// Правила подсчета очков за каждый матч:
// если х > у: 3 балла
// если х < у: 0 баллов
// если х = у: 1 балл

//моё решение
// function points(games) {
//     let pointsPerSeason = 0;
            
//     for (const game of games){
//         const countArr = game.split(':');

//         if (countArr[0] > countArr[1]) {
//             pointsPerSeason += 3;
//         } else if (countArr[0] < countArr[1]) {
//             pointsPerSeason += 0;
//         } else {
//             pointsPerSeason += 1;
//         }
//     }

//     return console.log(pointsPerSeason);
// }

// чужое решение
// function points(games) {
//     let totalPoints = 0;
    
//     for(var i=0; i<games.length; i++) {
    
//         let xScore = Number(games[i].charAt(0));
//         let yScore = Number(games[i].charAt(2));
        
//         if (xScore > yScore) { totalPoints += 3; }
//         if (xScore < yScore) { totalPoints += 0; }
//         if (xScore === yScore) { totalPoints += 1; }
//     }
    
//     return console.log(totalPoints);
// }

// points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]); // 30
// points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]); // 10
// points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]); // 0
// points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]); // 15
// points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"]);  // 12


// ========= #6
// Преобразовать число в перевернутый массив цифр
// Учитывая случайное неотрицательное число,
// вы должны вернуть цифры этого числа в массиве в обратном порядке.
// Пример (ввод => вывод):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//мой код
// function digitize(n) {
//     const numString = n.toString()
//     const arrNum = numString.split('');

//     let arrNumReverse = [];

//         for (let i = arrNum.length-1; i >= 0; i -= 1) {
//             arrNumReverse.push(Number(arrNum[i]));
//         }

//     return console.log(arrNumReverse);
// }

//чужой код
// function digitize(n) {
//     return console.log(String(n).split('').map(Number).reverse());
// }

// digitize(735231);
// digitize(0);


// ========= #7
// Нам нужна функция, которая может преобразовать число (целое число) в строку.
// Примеры (ввод --> вывод):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

//мой вариант
// function numberToString(num) {
//     return console.log(String(num));
// }

//чужой вариант
// function numberToString(num) {
//     return `${num}`; //№1
//     return num + ''; //№2
// }

// numberToString(67);
// numberToString(58789);
// numberToString(0);


// ========= #8
// Нам нужна функция, которая может преобразовать строку в число.
// Какие способы достижения этого вы знаете ?
// Примечание.Не беспокойтесь, все входные данные будут строками,
// а каждая строка является абсолютно допустимым представлением целого числа.
// Примеры (ввод --> вывод):
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

//мой вариант
// const stringToNumber = function(str){
//     return console.log(Number(str));
// }

//чужой вариант
// const stringToNumber = function(str){
    // return console.log(parseInt(str)); //#1
    // return console.log(+str); //#2
// }

// stringToNumber("1234");
// stringToNumber("605");
// stringToNumber("1405");
// stringToNumber("-7");


// ========= #9 (решение с прототипом решил Рустем. сам решил с обычной функцией)
// Строка в верхнем регистре?
// Создайте метод, чтобы увидеть, является ли строка ВСЕМИ ЗАГЛАВНЫМИ.
// Примеры (ввод --> вывод):
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

// В этом Ката говорится, что строка написана ВСЕ ЗАГЛАВНЫМИ буквами,
// если она не содержит строчных букв, поэтому любая строка,
// вообще не содержащая букв,
// тривиально считается написанной ВСЕМИ ЗАГЛАВНЫМИ БУКВАМИ.

// String.prototype.isUpperCase = function() {
//     return console.log(String(this) === this.toUpperCase());
// }

// 'hello I AM DONALD'.isUpperCase();
// 'C'.isUpperCase();
// 'hello I AM DONALD'.isUpperCase();
// 'HELLO I AM DONALD'.isUpperCase();
// 'ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase();
// 'ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase();
// 'Hello World'.isUpperCase();
// 'hello world'.isUpperCase();
// 'Hello world'.isUpperCase();
// 'hello World'.isUpperCase();
// 'HELLO WORLD'.isUpperCase();
// 'Bob walks his dog every day.'.isUpperCase();
// 'BOB walks his dog every day.'.isUpperCase();
// 'BOB WALKS HIS DOG EVERY DAY.'.isUpperCase();
// 'BOB WALKs HIS DOG EVERY DAY.'.isUpperCase();
// '#lovewins'.isUpperCase();
// '#Lovewins'.isUpperCase();


// ========= #10
// В этой ката ваша задача — реализовать расширенную версию
// знаменитой игры «камень - ножницы - бумага».
// Правила следующие:
// Ножницы режут бумагу
// Бумажные обложки Рок
// Камень давит ящерицу
// Ящерица отравляет Спока
// Спок разбивает ножницы
// Ножницы обезглавливают ящерицу
// Ящерица ест бумагу
// Бумага опровергает Спока
// Спок испаряет Рок
// Камень давит ножницы
// Задача:
// Учитывая два значения из приведенной выше игры,
// верните результат игрока как «Игрок 1 выиграл!», «Игрок 2 выиграл!» или «Ничья!».

// function rpsls(pl1,pl2){
// //"rock", "paper", "scissors", "lizard", "spock".
    
//     if (pl1 === pl2) {
//         return console.log("Draw!");
//     }

//     //rock
//     if ((pl1 === "rock" && pl2 === "scissors") ||
//         (pl1 === "rock" && pl2 === "lizard")){
//         return console.log("Player 1 Won!");
//     }

//     if ((pl1 === "rock" && pl2 === "spock") ||
//         (pl1 === "rock" && pl2 === "paper")){
//         return console.log("Player 2 Won!");
//     }

//     if ((pl2 === "rock" && pl1 === "scissors") ||
//         (pl2 === "rock" && pl1 === "lizard")) {
//         return console.log("Player 2 Won!");
//     }

//     //lizard
//     if ((pl1 === "lizard" && pl2 === "spock") ||
//         (pl1 === "lizard" && pl2 === "paper")){
//         return console.log("Player 1 Won!");
//     }

//     if ((pl1 === "lizard" && pl2 === "scissors") ||
//         (pl1 === "lizard" && pl2 === "rock")){
//         return console.log("Player 2 Won!");
//     }

//     if ((pl2 === "lizard" && pl1 === "spock") ||
//         (pl2 === "lizard" && pl1 === "paper")) {
//         return console.log("Player 2 Won!");
//     }

//     //spock
//     if ((pl1 === "spock" && pl2 === "scissors") ||
//         (pl1 === "spock" && pl2 === "rock")){
//         return console.log("Player 1 Won!");
//     }

//     if ((pl1 === "spock" && pl2 === "paper") ||
//         (pl1 === "spock" && pl2 === "lizard")){
//         return console.log("Player 2 Won!");
//     }

//     if ((pl2 === "spock" && pl1 === "scissors") ||
//         (pl2 === "spock" && pl1 === "rock")) {
//         return console.log("Player 2 Won!");
//     }

//     //scissors
//     if ((pl1 === "scissors" && pl2 === "lizard") ||
//         (pl1 === "scissors" && pl2 === "paper")){
//         return console.log("Player 1 Won!");
//     }

//     if ((pl1 === "scissors" && pl2 === "spock") ||
//         (pl1 === "scissors" && pl2 === "rock")){
//         return console.log("Player 2 Won!");
//     }

//     if ((pl2 === "scissors" && pl1 === "lizard") ||
//         (pl2 === "scissors" && pl1 === "paper")) {
//         return console.log("Player 2 Won!");
//     }

//     //paper
//     if ((pl1 === "paper" && pl2 === "rock") ||
//         (pl1 === "paper" && pl2 === "spock")){
//         return console.log("Player 1 Won!");
//     }

//     if ((pl1 === "paper" && pl2 === "lizard") ||
//         (pl1 === "paper" && pl2 === "scissors")){
//         return console.log("Player 2 Won!");
//     }

//     if ((pl2 === "paper" && pl1 === "rock") ||
//         (pl2 === "paper" && pl1 === "spock")) {
//         return console.log("Player 2 Won!");
//     }
// }

// rpsls('paper', 'rock');// 'Draw'
// rpsls('spock', 'rock');// 'Player 1 Won!!'
// rpsls('scissors', 'lizard');// 'Player 1 Won!!'
// rpsls('rock', 'lizard');// 'Player 1 Won!!'
// rpsls('rock','spock');// 'Player 2 Won!!'
// rpsls('spock', 'lizard');// 'Player 2 Won!!'
// rpsls('paper', 'lizard');// 'Player 2 Won!!'
// rpsls('scissors', 'spock');// 'Player 2 Won!!'
// rpsls('paper', 'scissors');// 'Player 2 Won!!'


// ========= #11
// Завершите решение так, чтобы оно возвращало true,
// если первый переданный аргумент(строка) заканчивается вторым аргументом(тоже строкой).
// Пример:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//моё решение
// function solution(str, ending){
//     if (ending === '') {
//         return console.log(true);
//     }

//     if (str.slice(-(ending.length)) === ending.slice(-(ending.length))) {
//         return console.log(true);
//     }

//     return console.log(false);
// }

// //чужое решение
// function solution(str, ending){
//     return console.log(str.endsWith(ending));
// }

// solution('abcde', 'cde');
// solution('abcde', 'abc');
// solution('sumo', 'omo');
// solution('abc', '')

// ========= #12
// Учитывая массив единиц и нулей,
// преобразуйте эквивалентное двоичное значение в целое число.
// Например: [0, 0, 0, 1] обрабатывается как 0001,
// что является двоичным представлением 1.

// https://ru.wikihow.com/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D1%8C-%D0%B8%D0%B7-%D0%B4%D0%B2%D0%BE%D0%B8%D1%87%D0%BD%D0%BE%D0%B9-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B-%D0%B2-%D0%B4%D0%B5%D1%81%D1%8F%D1%82%D0%B8%D1%87%D0%BD%D1%83%D1%8E
// https://www.youtube.com/watch?v=jeSErJeu_7Q&ab_channel=%D0%A2%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0%D0%9F%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D0%B0
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseInt


//моё решение
// const binaryArrayToNumber = arr => {
//     let countArr = arr.length-1;
//     let num = 0;

//     for (let i = 0; i < arr.length; i += 1){
//         num += arr[i] * (2 ** countArr);
//         countArr -= 1;
//     }

//     console.log(num);
// };

//чужое решение
// const binaryArrayToNumber = arr => console.log(parseInt(arr.join(''), 2));

// binaryArrayToNumber([1,1,1,0,1]) //29
// binaryArrayToNumber([0,0,0,1])// 1
// binaryArrayToNumber([0,0,1,0])// 2
// binaryArrayToNumber([1,1,1,1])// 15
// binaryArrayToNumber([0,1,1,0])// 6


// ========= #13
// Напишите функцию, которая вычисляет среднее значение чисел в заданном списке.
// Примечание. Пустые массивы должны возвращать 0.

// function find_average(array) {
//     let sumNum = 0;

//     if (array.length !== 0) {
//         for (const item of array) {
//             sumNum += item
//         }
//     } else {
//         return console.log(0);
//     }

//     return console.log(sumNum / array.length);
// }

//чужой вариант
// function find_average(array) {
//     return console.log((Math.min(...array) + Math.max(...array)) / 2);
// }

// find_average([1, 1, 1]); // 1
// find_average([1, 2, 3]); // 2
// find_average([1, 2, 3, 4]); //2.5


// ========= #14
// Просто удалите пробелы из строки, затем верните результирующую строку.

// function noSpace(x) {
    //return console.log(String(x).replaceAll(' ', '')); //#1 вариант

    // return console.log(String(x).split(' ').join('')); //#2 вариант
// }

// noSpace('8 j 8   mBliB8g  imjB8B8  jl  B');
// noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd');
// noSpace('8aaaaa dddd r     ');


// ========= #15
// Дан список целых чисел, определить, является ли сумма его элементов четной или нечетной.
// Дайте ответ в виде строки, соответствующей «нечетному» или «четному».
// Если входной массив пуст, рассматривайте его как: [0] (массив с нулем).
// пример:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// function oddOrEven(array) {
//     if (array.length === 0) {
//         return console.log("even");
//     }

//     let sum = 0;

//     for (const item of array) {
//         sum += item;
//     }

//     if (sum % 2 !== 0) {
//         return console.log("odd");
//     }

//     return console.log("even");
// }

// oddOrEven([0, -1, -5]);// 'even'
// oddOrEven([0, -1, -3]);// 'even'
// oddOrEven([-1023, 1, -2]);// 'even'

// oddOrEven([0, 1, 2]);// 'odd'
// oddOrEven([0, 1, 4]);// 'odd'
// oddOrEven([1023, 1, 3]);// 'odd'

// oddOrEven([0, -1, 2]);// 'odd'
// oddOrEven([0, 1, -4]);// 'odd'
// oddOrEven([-1023, -1, 3]);// 'odd'


// ========= #16
// Завершите функцию, которая принимает строковый параметр
// и переворачивает каждое слово в строке.
// Все пробелы в строке должны быть сохранены.
// Пример:
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// моё решение
// function reverseWords(str) {
//     const wordArr = String(str).split(' ')

//     let reversedArr = []

//     for (const word of wordArr) {
//         reversedArr.push(word.split('').reverse().join(''));
//     }

//     return console.log(reversedArr.join(' '));
// }

//чужое решение
// function reverseWords(str) {
//     return console.log(str.split("").reverse().join("").split(" ").reverse().join(" "));
// }

// reverseWords('The quick brown fox jumps over the lazy dog.');// 'ehT kciuq nworb xof spmuj revo eht yzal .god'
// reverseWords('apple');// 'elppa'
// reverseWords('a b c d');// 'a b c d'
// reverseWords('double  spaced  words');// 'elbuod  decaps  sdrow'

