"use strict";
//Нехай м’яч переміщається при натисканні на поле,
// туди, де був клік


// Вимоги:
// Центр м’яча повинен збігатися з курсором миші (якщо це можливо без перетину країв поля);
// CSS-анімація бажана, але не є обов’язковою;
// М’яч у жодному разі не повинен перетинати межі поля;
// При прокручуванні сторінки нічого не повинно ламатися;

// Нотатки:
// Код повинен уміти працювати з різними розмірами м’яча та поля, не прив’язуватися до будь-яких фіксованих значень.
// Використовуйте властивості event.clientX/event.clientY, щоб вирахувати координати миші при кліці.

const refs = {
    field: document.querySelector('#field'),
    ball: document.querySelector('#ball'),
}

const onTargetMoveBall = (event) => {
    //позиція поля відносно вікна браузера
    const posField = refs.field.getBoundingClientRect();

    //позиція м'яча відносно вікна браузера
    const posBall = {
        top: event.clientY - posField.top - field.clientTop - ball.clientHeight / 2,
        left:  event.clientX - posField.left - field.clientLeft - ball.clientWidth / 2,
    }

    //заборона перетину верхньої межі
    if (posBall.top < 0) {
        posBall.top = 0;
    }

    //заборона перетину правої межі
    if (posBall.left + ball.clientWidth > field.clientWidth) {
        posBall.left = field.clientWidth - ball.clientWidth;
    }

    //заборона перетину нижньої межі
    if (posBall.top + ball.clientHeight > field.clientHeight) {
        posBall.top = field.clientHeight - ball.clientHeight;
    }

    //заборона перетину лівої межі
    if (posBall.left < 0) {
        posBall.left = 0;
    }
    
    refs.ball.style.top = posBall.top + 'px';
    refs.ball.style.left = posBall.left + 'px';
}

refs.field.addEventListener('click', onTargetMoveBall);