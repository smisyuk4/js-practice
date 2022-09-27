"use strict";

//Створіть меню, яке відкривається/згортається після кліку:

const refs = {
    menu: document.querySelector('.menu'),
    title: document.querySelector('.title'),
    // menuItems: document.querySelector('.menu ul'),
}

const onClickTitle = () => {
    refs.menu.classList.toggle('hidden')
}

refs.title.addEventListener('click', onClickTitle)
