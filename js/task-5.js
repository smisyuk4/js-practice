"use strict";

//Створити “Карусель” – стрічку зображень,
//яку можна прокручувати,
//натискаючи на стрілки.

// цей код позначає картинки, для зручності розробки
// він може бути видалений
let i = 1;
for(let li of document.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}
// ...ваш код, який зробить карусель робочою
