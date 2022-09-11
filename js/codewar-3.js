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


function XO(str) {
    const regStr = str.toLowerCase();
    // let letter1 = regStr.slice(0, 1);
    // let letter2 = '';

    const letters = {};
    let letter = ''

    for (let i = 0; i < regStr.length; i += 1){
        letter = regStr.slice(i, i + 1);

        letters[letter] = 6;
        // if () {
            
        // }
        // console.log(letter);
    }  

    return console.log(letters);
}

// XO('xo');// true
XO("xxOogg");// true
// XO("xxxm");// false
// XO("Oo");// false
// XO("ooom");// false