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

const refs = {
    arrowLeft: document.querySelectorAll('.arrow')[0],
    arrowRight: document.querySelectorAll('.arrow')[1],
    images: document.querySelector('ul'),
    items: document.querySelectorAll('ul li'),
}
// let currentNum = 0;

// const onClickButtonLeft = (event) => {
//     console.log(event.target)
// }



// const onClickButtonRight = (event) => {
//     console.log(event.target)
//     console.log(refs.items)
    
//     for (let item of refs.items) {
//         item.classList.add('hide')
//     }

//     refs.items[currentNum].classList.remove('hide')
//     refs.items[currentNum+1].classList.remove('hide')
//     refs.items[currentNum+2].classList.remove('hide')
    
//     if (currentNum + 3 === refs.items.length) {
//         currentNum = 0;
//     } else {
//         currentNum++;
//     }
    
// }

//решение с сайта
const widthPic = 130;
const countPic = 1;
let position = 0;

const onClickButtonLeft = (event) => {
    position += widthPic * countPic;
    position = Math.min(position, 0);
    refs.images.style.marginLeft = `${position}px`;
}

const onClickButtonRight = (event) => {
    position -= widthPic * countPic;
    position = Math.max(position, -widthPic * (refs.items.length - countPic))
    refs.images.style.marginLeft = `${position}px`;
}

refs.arrowLeft.addEventListener('click', onClickButtonLeft)

refs.arrowRight.addEventListener('click', onClickButtonRight)