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