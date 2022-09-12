"use strict";
// ========= #34
//https://www.youtube.com/watch?v=JtMuXmmDl9s
// нужно найти в массиве два числа сумма которых даст число К. вернуть массив.

// const findSum = (arr, k) => { // #1 вариант
//     const sortArr = arr.sort((a, b) => { return a - b });
    
//     for (let i = 0; i < sortArr.length; i += 1){
//         for (let j = i + 1; j < sortArr.length; j += 1){
//             if (sortArr[i] + sortArr[j] === k) {
//                 return [sortArr[i], sortArr[j]];
//             }
//         }
//     }

//     return [];
// }

// console.log(findSum([-1, -2, 0, 12, 4, 7, 2], 10)); //[ -2, 12 ]
// console.log(findSum([3, 7, 14, -12, 1, 8, 4], 7)); //[ 3, 4 ]

// const findSum = (arr, k) => { // #2 вариант
//     const sortArr = arr.sort((a, b) => { return a - b });
//     let numBox = [];
//     let numSum = [];

//     sortArr.map((num) => {
//         if (numBox.includes(k - num)) {
//             numSum = [num, k - num];
//         }
        
//         if (!numBox.includes(k - num)) {
//             numBox = [...numBox, num];
//         }
//     })
    
//     return numSum;
// }

// console.log(findSum([-1, -2, 0, 12, 4, 7, 2], 10));
// console.log(findSum([3, 7, 14, -12, 1, 8, 4], 7));


// ========= #35
// https://www.youtube.com/watch?v=-59FbGWsCgI
// есть список температур на неделю.
//показать количество дней до наступления потепления для текущего дня.

// const temp = (tempWeek) => {
//     let resWeek = [];
    
//     for (let i = 0; i <= tempWeek.length; i += 1){
//         let countDay = 0;

//         for (let j = i + 1; j <= tempWeek.length; j += 1) {
//             if (tempWeek[i] >= tempWeek[j]) {
//                 countDay += 1;
//             }

//             if (tempWeek[i] < tempWeek[j]) {
//                 countDay += 1;
//                 resWeek.push(`${tempWeek[i]} ${countDay}`);
//                 break;
//             }
            
//             if (j === 7) {
//                 resWeek.push(`${tempWeek[i]} ${countDay}`);
//             }
//         }
//     }
//     return resWeek;
// }

// console.log(temp([13, 13, 15, 11, 9, 12, 16]));


// ========= #36
// Напишите метод, который будет получать массив целых чисел в качестве параметра
// и будет обрабатывать каждое число из этого массива.
// Вернуть новый массив с обработкой каждого числа входного массива следующим образом:
// Если число имеет целый квадратный корень, возьмите его, иначе возведите число в квадрат.
// Пример [4,3,9,7,2,1] -> [2,9,3,49,4,1]

//моё решение
// function squareOrSquareRoot(array) {
//     const newArr = array.map((num) => {
//         const currentNum = Math.sqrt(num);

//         if (Number.isInteger(currentNum)) {
//             return currentNum;
//         }

//         if (!Number.isInteger(currentNum)) {
//             return num ** 2;
//         }
//     })

//     return console.log(newArr);
// }

//чужое решение
// function squareOrSquareRoot(array) {
//     return console.log(array.map(x => {
//         const r = Math.sqrt(x);
//         return (r % 1 == 0) ? r : (x*x);
//     }));
// }

// squareOrSquareRoot([4, 3, 9, 7, 2, 1]); //[ 2, 9, 3, 49, 4, 1 ]
// squareOrSquareRoot([100, 101, 5, 5, 1, 1]); //[ 10, 10201, 25, 25, 1, 1 ]
// squareOrSquareRoot([ 1, 2, 3, 4, 5, 6 ]); //[ 1, 4, 9, 2, 25, 36 ]


// ========= #37
// Создайте функцию, которая будет возвращать оператор приветствия,
// использующий ввод; ваша программа должна вернуть "Привет, <имя>, как дела сегодня?".
// [Убедитесь, что вы вводите именно то, что я написал,
// иначе программа может работать неправильно]

// const greet = name => `Hello, ${name} how are you doing today?.`

// console.log(greet('Sara'))


// ========= #38
// В вашем классе был тест, и вы его прошли. Поздравляем!
// Но вы амбициозный человек. Вы хотите знать, лучше ли вы, чем средний ученик в вашем классе.
// Вы получаете массив с результатами тестов ваших сверстников.
// Теперь посчитайте среднее и сравните свой результат!
// Верните True, если вам лучше, иначе False!
// Примечание:
// Ваши баллы не включены в массив баллов вашего класса.
// Для расчета среднего балла вы можете добавить свой балл в данный массив!

//моё решение
// function betterThanAverage(classPoints, yourPoints) {
//     const newArr = classPoints.reduce((sum, point) => { return sum + point }, 0);

//     return console.log((newArr / classPoints.length) < yourPoints ? true : false)
// }

//чужое решение
// function betterThanAverage(classPoints, yourPoints) {
//     return console.log(yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length);
// }

// betterThanAverage([2, 3], 5);// true
// betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);// true
// betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9);// false
// betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50);// false
// betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21);// false


// ========= #39
// ОПИСАНИЕ:
// Вам будет дан массив целых чисел.
// Ваша задача состоит в том, чтобы взять этот массив и найти индекс N,
// где сумма целых чисел слева от N равна сумме целых чисел справа от N.
// Если нет такого индекса, который мог бы это сделать, верните - 1.

// Например:
// Допустим, вам дан массив {1,2,3,4,3,2,1}:
// Ваша функция вернет индекс 3,
// потому что на 3 - й позиции массива сумма левой части индекса({ 1, 2, 3})
// и сумма правой части индекса({ 3, 2, 1}) оба равны 6.

// Например:
// Вам дан массив {1,100,50,-51,1,1}:
// Ваша функция вернет индекс 1,
// потому что в 1 - й позиции массива сумма левой части индекса({ 1})
// и сумма правой части индекса({ 50,- 51, 1, 1 }) оба равны 1.

// Например:
// Вам дан массив {20,10,-80,10,10,15,35}
// В индексе 0 левая сторона {}
// Правая сторона {10,-80,10,10,15,35}
// Они оба равны 0 при сложении. (Пустые массивы равны 0 в этой задаче)
// Индекс 0 — это место, где левая и правая стороны равны.

// Вход:
// Целочисленный массив длины 0 < arr < 1000.
// Числа в массиве могут быть любыми целыми положительными или отрицательными.

// Выход:
// Наименьший индекс N, где сторона слева от N равна стороне справа от N.
// Если вы не найдете индекс, соответствующий этим правилам, вы вернете - 1.

// Примечание:
// Если вам дан массив с несколькими ответами, верните наименьший правильный индекс.

//моё решение
// function findEvenIndex(arr) {
//     let idx = 0;

//     for (let i = 0; i < arr.length; i += 1) {
//         let leftArrSum = arr.slice(0, i).reduce((sum, num) => { return sum + num }, 0);
//         let rightArrSum = arr.slice(i + 1).reduce((sum, num) => { return sum + num }, 0);

//         if (leftArrSum === rightArrSum) {
//             idx = i;
//             break;
//         }

//         if (leftArrSum !== rightArrSum) {
//             idx = -1;
//         }
//     }
//     return console.log(idx)
// }

//чужое решение
// function findEvenIndex(arr){
//     let left = 0;
//     let right = arr.reduce(function (pv, cv) { return pv + cv; }, 0);
    
//     for(var i = 0; i < arr.length; i++) {
//         if (i > 0) {
//             left += arr[i - 1];
//         }

//         right -= arr[i];
        
//         if (left == right) {
//             return console.log(i);
//         }
//     }
    
//     return console.log(-1);
// }

// findEvenIndex([20,10,-80,10,10,15,35]); //0
// findEvenIndex([1, 2, 3, 4, 3, 2, 1]); // 3
// findEvenIndex([1,100,50,-51,1,1]); //1
// findEvenIndex([1,2,3,4,5,6]); //-1
// findEvenIndex([20,10,30,10,10,15,35]); // 3


// ========= #40
// Очень просто, по заданному целому числу или числу с плавающей запятой найти его противоположность.

// function opposite(number) {
//     return console.log(number !== 0 ? number* (-1): 0);
// }

// opposite(1);// -1
// opposite(0);// 0
// opposite(4.25);// -4.25
// opposite(3.3333333);// -3.3333333
// opposite(-12525220.3325);// 12525220.3325
// opposite(-5);// 5


// ========= #41
// Нужно получить сумму двух массивов...
// На самом деле сумму всех их элементов.
// P.S. Каждый массив включает только целые числа. Выход - тоже число.

// function arrayPlusArray(arr1, arr2) {
//     return console.log([...arr1, ...arr2].reduce((sum, num) => sum + num, 0));
// }

// arrayPlusArray([1, 2, 3], [4, 5, 6]);// 21
// arrayPlusArray([-1, -2, -3], [-4, -5, -6])// -21
// arrayPlusArray([100, 200, 300], [400, 500, 600])// 2100


// ========= #42
// Тимми и Сара думают, что они влюблены, но там, где они живут,
// они узнают об этом, только когда каждый сорвет по цветку.
// Если у одного из цветов четное количество лепестков,
// а у другого нечетное количество лепестков, это означает, что они влюблены.

// Напишите функцию, которая будет принимать количество лепестков каждого цветка
// и возвращать true, если они влюблены, и false, если нет.

//моё решение
// function lovefunc(flower1, flower2) {
//     if ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)) {
//         return console.log(true);
//     }

//     if ((flower1 % 2 === 0 && flower2 % 2 === 0) || (flower1 % 2 !== 0 && flower2 % 2 !== 0)) {
//         return console.log(false);
//     }
// }

//чужое решение
// function lovefunc(flower1, flower2) {
    // return console.log((flower1 + flower2) % 2 == 1);
// }

// lovefunc(1, 4);// true
// lovefunc(2, 2);// false
// lovefunc(0, 1);// true
// lovefunc(0, 0);// false


// ========= #43
// Проверьте, содержит ли строка одинаковое количество «x» и «o».
// Метод должен возвращать логическое значение и не учитывать регистр.
// Строка может содержать любой символ.

//моё решение
// function XO(str) {
//     const regStr = str.toLowerCase();
//     let letters = {};
//     let countLetters = 1;

//     for (let i = 0; i < regStr.length; i += 1){
//         let currentLetter = regStr.slice(i, i + 1);

//         if ((currentLetter === 'x' | currentLetter === 'o') //доп условие по конкретным буквам
//             && (!letters.hasOwnProperty(currentLetter))) {
//             for (let j = i + 1; j < regStr.length; j += 1){
//                 let testLetter = regStr.slice(j, j + 1);

//                 if (currentLetter === testLetter) {
//                     countLetters += 1;
//                 }
//             }

//             letters[currentLetter] = countLetters;
//             countLetters = 1;
//         }
//     }

//     const arrLettres = Object.keys(letters);

//     if (!arrLettres.includes('x')) {
//         letters = {...letters, x: 0}
//     }

//     if (!arrLettres.includes('o')) {
//         letters = {...letters, o: 0}
//     }

//     const countArrLettres = Object.values(letters);
//     return console.log(countArrLettres.every((count, index, array) => array[0] === count));
// }

//чужое решение
// function XO(str) {
//     return console.log(str.toLowerCase().split('x').length === str.toLowerCase().split('o').length); //
// }

// XO('xo') //true
// XO("xxOo") //true
// XO("xxxm") //false
// XO("Oo") //false
// XO("ooom") //false


// ========= #44
// Даны два целых числа a и b,
// которые могут быть положительными или отрицательными,
// найдите сумму всех целых чисел между ними и включая их и верните ее.
// Если два числа равны, верните a или b.

// Примечание: a и b не упорядочены!
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// function getSum(a, b){
//     let arrNum = [];

//     const start = Math.min(a, b);
//     const end = Math.max(a, b);

//     for (let i = start; i <= end; i += 1){
//         arrNum = [...arrNum, i]
//     }

//     return console.log(arrNum.reduce((sum, num) => sum + num, 0));
// }

// getSum(0, -1) //-1
// getSum(2, 2) //2
// getSum(0, 1) //1
// getSum(-1, 2) //2
// getSum(1, 2) //3
// getSum(-350, -408) //-22361
// getSum(-292, -536) //-101430


// ========= #45a
// Вам дан массив(список) строк и целое число k.
// Ваша задача — вернуть первую самую длинную строку,
// состоящую из k последовательных строк, взятых в массиве.

// function longestConsec(strarr, k) {
//     const maxLength = strarr.reduce((len, str) => {
//         if (str.length > len) {
//             return len = str.length;
//         }
//         return len;
//     }, 0)

//     const startWord = strarr.find(word => word.length === maxLength);
//     const indexWord = strarr.indexOf(startWord); //в массиве с 0 отсчёт

//     const newArr = strarr.splice(indexWord, k)
//     return console.log(newArr.join(''));
// }

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)// "abigailtheta")
// longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)// "oocccffuucccjjjkkkjyyyeehh"
// longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)// "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"

// ========= #45b
// Вам дан массив(список) строк и целое число k.
// Ваша задача — вернуть первую самую длинную строку,
// состоящую из k последовательных строк, взятых в массиве.

// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
// Concatenate the consecutive strings of strarr by 2, we get:
// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
//--> "abigailtheta"

// n being the length of the string array,
// if n = 0 or k > n or k <= 0
// return ""(return Nothing in Elm, "nothing" in Erlang).

//моё решение
// function longestConsec(strarr, k) {
//     let currentStr = '';
//     let maxLenStr = '';
//     let lenStr = 0;

//     if ((strarr.length === 0) || (k > strarr.length) || (k <= 0)) {
//         return "";
//     }

//     for (let i = 0; i < strarr.length; i += 1) {        
//         currentStr = strarr.slice(i, i + k).join('');
        
//         if (currentStr.length > lenStr) {
//             lenStr = currentStr.length;
//             maxLenStr = currentStr;
//         }        
//     }

//     return console.log(maxLenStr);
// }

//чужое решение
// function longestConsec(strarr, k) {
//     if (strarr.length == 0 || k > strarr.length || k < 1)
//         return console.log("");
    
//     let lens = strarr.map((_, i, arr) => arr.slice(i, i + k).join('').length);
//     // console.log(lens);
//     let i = lens.indexOf(Math.max(...lens));
//     // console.log(i);
//     // console.log(strarr.slice(i, i + k));    
//     return console.log(strarr.slice(i, i + k).join(''));
// }

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)// "abigailtheta")
// longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)// "oocccffuucccjjjkkkjyyyeehh"
// longestConsec([], 3)// ""
// longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)// "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
// longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)// "wlwsasphmxxowiaxujylentrklctozmymu"
// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)// ""
// longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)// "ixoyx3452zzzzzzzzzzzz"
// longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)// ""
// longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0)// ""