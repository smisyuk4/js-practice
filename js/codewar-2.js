"use strict";
// ========= #21
// На этот раз ни истории, ни теории.
// В приведенных ниже примерах показано, как написать функцию
// Пример:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// function accum(s) {
//     const arrLetters = s.toLowerCase().split('');
//     const arrWords = [];

//     arrWords.push(arrLetters[0].toUpperCase());

//     for (let i = 1; i < arrLetters.length; i += 1){
//         let word = arrLetters[i].toUpperCase();

//         for (let b = 0; b < i; b += 1){
//             word = word.concat(arrLetters[i]);
//         }
        
//         arrWords.push(word);
//     }

//     console.log(arrWords.join('-'));
// }

// accum("Zpgl"); // "Z-Pp-Ggg-Llll"
// accum("NyffsGeyylB"); // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
// accum("MjtkuBovqrU"); // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
// accum("EvidjUnokmM"); // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"


// ========= #22
// Напишите функцию, которая принимает целое число n
// и строку s в качестве параметров
// и возвращает строку s, повторяющуюся ровно n раз.
// Пример:
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//мой код
// function repeatStr(n, s) {
//     let str = '';
//     for (let i = 0; i < n; i += 1) {
//         str = str.concat(s)
//     }

//     return console.log(str);
// }

// чужой код
// function repeatStr (n, s) {
//     return console.log(s.repeat(n));
// }

// repeatStr(3, "*");// "***"
// repeatStr(5, "#");// "#####"
// repeatStr(2, "ha ");// "ha ha "

// ========= #23
// Вам будет дан массив a и значение x.
// Все, что вам нужно сделать, это проверить,
// содержит ли предоставленный массив значение.
// Массив может содержать числа или строки.
// Х может быть любым.
// Возвращает true, если массив содержит значение,
// и false, если нет.

// function check(a, x) {
//     return console.log(a.includes(x));
// }

// check([66, 101], 66);// true
// check([101, 45, 75, 105, 99, 107], 107);// true
// check(['t', 'e', 's', 't'], 'e');// true
// check(['what', 'a', 'great', 'kata'], 'kat');// false

// ========= #24
// Учитывая строку цифр,
// вы должны заменить любую цифру ниже 5 на «0»,
// а любую цифру 5 и выше на «1».
// Верните полученную строку.

// function fakeBin(x) {
//     const arrNum = x.split('');
//     let newArrNum = [];

//     for (const num of arrNum){
//         if (num < 5) {
//             newArrNum.push(0);
//         } else {
//             newArrNum.push(1);
//         }
//     }

//     return console.log(newArrNum.join(''));
// }

// fakeBin('45385593107843568');// '01011110001100111'
// fakeBin('509321967506747');// '101000111101101'
// fakeBin('366058562030849490134388085');// '011011110000101010000011011'


// ========= #25
// Напишите функцию, которая принимает массив чисел
// и возвращает сумму чисел.
// Числа могут быть отрицательными или нецелыми.
// Если массив не содержит чисел, вы должны вернуть 0.
// Пример:
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// function sum (numbers) {
//     if (numbers.length == 0) {
//         return console.log(0);
//     }

//     let sum = 0;
//     for (const num of numbers){
//         sum += num;
//     }

//     return console.log(sum);
// };

// sum([]);// 0
// sum([1, 5.2, 4, 0, -1]);// 9.2


// ========= #25
// Рассмотрим массив / список овец,
// где некоторые овцы могут отсутствовать на своем месте.
// Нам нужна функция, которая подсчитывает количество овец,
// присутствующих в массиве(true означает наличие).

// function countSheeps(arrSheep) {
//     let countCheeps = 0;

//     for (const sheep of arrSheep) {
//         if (sheep === true) {
//             countCheeps += 1;
//         }
//     }

//     return console.log(countCheeps);
// }


// const array1 = [
//     true, true, true, false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true, true
// ];
// countSheeps(array1);// 17


// ========= #26
// Возвращает количество (количество) гласных в заданной строке.
// Мы будем рассматривать a, e, i, o, u как гласные для этой Ката (но не y).
// Входная строка будет состоять только из строчных букв и/или пробелов.

// function getCount(str) {
//     const stringLetters = 'aeiou';
//     const arrLetters = str.split('');
//     let countLeters = 0;

//     for (const letter of arrLetters) {
//         if (stringLetters.indexOf(letter) >= 0) {
//             countLeters += 1;
//         }
//     }

//     return console.log(countLeters);
// }

// getCount("abracadabra");// 5


// ========= #27
// Создайте функцию, которая возвращает
// сумму двух наименьших положительных чисел
// для заданного массива минимум из 4 положительных целых чисел.
// Не будут переданы числа с плавающей запятой
// или неположительные целые числа.
// Например,
// [19, 5, 42, 2, 77], вывод должен быть 7.
// [10, 343445353, 3453445, 3453545353453] должен вернуть 3453455.

// function sumTwoSmallestNumbers(numbers) {
//     const minNum1 = Math.min(...numbers);
//     const indexMinNum = numbers.indexOf(minNum1);

//     numbers.splice(indexMinNum, 1)

//     const minNum2 = Math.min(...numbers);

//     return console.log(minNum1 + minNum2);
// }

// sumTwoSmallestNumbers([5, 8, 12, 19, 22]);// 13
// sumTwoSmallestNumbers([15, 28, 4, 2, 43]);// 6
// sumTwoSmallestNumbers([3, 87, 45, 12, 7]);// 10
// sumTwoSmallestNumbers([23, 71, 33, 82, 1]);// 24
// sumTwoSmallestNumbers([52, 76, 14, 12, 4]);// 16


// ========= #28
