"use strict";

// Напишіть такий JavaScript,
// щоб після натискання на кнопку button,
// елемент < div id = "text" > зникав.

const refs = {
    btn: document.querySelector('#hider'),
    elem: document.querySelector('#text'),
}

const onClickRemoveBtn = () => {
    refs.elem.remove();
}

refs.btn.addEventListener('click', onClickRemoveBtn)